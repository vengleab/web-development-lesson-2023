const authRoutes = require("express").Router();
const userData = require("../user-data");
const bcrypt = require('bcrypt');
authRoutes.post("/login", (req, res) => {
    const { username, password } = req.body || {};

    if (!username || !password) {
        return res.status(400).send({ message: "Username and password required" });
    }

    const foundUser = userData.find((user) => user.username === username);

    console.log({password, foundPassword: foundUser.password});
    if(!foundUser || !bcrypt.compareSync(password, foundUser.password)) {
        return res.status(401).send({ message: "User or password incorrect" });
    }

    return res.status(200).send({ message: "Login successful" });
})

module.exports = authRoutes