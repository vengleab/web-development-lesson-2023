const userRoutes = require("express").Router();
const userData = require("../user-data");

class Response {
  constructor(response) {
    this.res = response;
    this.status = 200;
    this.message = "Sucessful request";
  }

  setMessage(message) {
    this.message = message;
    return this;
  }

  setStatusCode(statusCode) {
    this.status = statusCode;
    return this;
  }

  setResult(data) {
    this.result = data;
    return this;
  }

  send() {
    this.res
      .status(this.status)
      .send({ data: this.result, message: this.message });
  }
}

userRoutes.get("/", (req, res) => {
  return new Response(res).setResult(userData).send();
  // res.send({ "result" : userData, "message": "success" });
});
userRoutes.get("/:userId", (req, res) => {
  const { userId } = req.params || {};

  try {
    const userIdNumber = parseInt(userId);
    if(isNaN(userIdNumber)) {
       return res.status(400).send("User ID must be a number!")
    }
    const foundUser = userData.find((user) => user.id === userIdNumber);
    
    if (!foundUser) {
        return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({ result: foundUser, message: "found user" });
  } catch (error) {
    res.status(500).send({ message: "Unknown error" });
    return;
  }
});
userRoutes.post("/", (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    res.status(400).send({ message: "Username and Password are required!" });
    return;
  }

  const newUser = { username, password: password };
  userData.push(newUser);
  res.send({ message: "Create a user!" });
});
userRoutes.put("/", (req, res) => {
  res.send({ message: "Update a user!" });
});
userRoutes.delete("/", (req, res) => {
  res.send({ message: "Delete a user!" });
});

module.exports = userRoutes;
