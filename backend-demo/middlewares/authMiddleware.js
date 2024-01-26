const jwtLib = require("../libs/jwt");

const authMiddleware = (req, res, next) => {
  console.log("Executing authMiddleware");
  // protec this route only for logged in users
  // header "Authorization": "Bearer dfdsffdfddfsdkfjdsjfdsjlkfdsf"
  let authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "Not login" });
  }
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Bad header" });
  }
  const token = authHeader.split(" ")[1];
  if (token) {
    // verify token
    // if token is valid, continue
    try {
      const payload = jwtLib.verifyToken(token);
      console.log({ payload });
      req.userId = payload.userId;
      next();
    } catch (error) {
      console.log({ error});
      return res.status(401).send({ message: "Invalid token" });
    }
  }
};

module.exports = authMiddleware;