const userRoutes = require("express").Router();
// const userData = require("../user-data");
const jwtLib = require("../libs/jwt");
const bcrypt = require('bcrypt');
const salf = 10;
const authMiddleware = require("../middlewares/authMiddleware");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

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




userRoutes.get("/", authMiddleware, async (req, res) => {
  const users = await prisma.user.findMany()
  return new Response(res).setResult(users).send();
  // res.send({ "result" : userData, "message": "success" });
});
userRoutes.get("/:userId", authMiddleware, async (req, res) => {
  const { userId } = req.params || {};

  try {
    const userIdNumber = parseInt(userId);
    if (isNaN(userIdNumber)) {
      return res.status(400).send("User ID must be a number!");
    }
    const foundUser = await prisma.user.findUnique({ where: { id: userIdNumber }});

    if (!foundUser) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({ result: foundUser, message: "found user" });
  } catch (error) {
    res.status(500).send({ message: "Unknown error" });
    return;
  }
});
userRoutes.post("/", async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    res.status(400).send({ message: "Username and Password are required!" });
    return;
  }

  const newUser = { username, password: bcrypt.hashSync(password, salf) };
  // userData.push(newUser);
  const dbUser =  await prisma.user.create({ data: newUser });
  res.send({ message: "Create a user!", result: dbUser });
});
userRoutes.put("/", (req, res) => {
  res.send({ message: "Update a user!" });
});
userRoutes.delete("/", (req, res) => {
  res.send({ message: "Delete a user!" });
});

module.exports = userRoutes;
