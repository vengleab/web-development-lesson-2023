const authRoutes = require("express").Router();
const userData = require("../user-data");
const bcrypt = require('bcrypt');
const jwtLib = require("../libs/jwt");
const authMiddleware = require("../middlewares/authMiddleware");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
authRoutes.post("/login", async (req, res) => {
    const { username, password } = req.body || {};

    if (!username || !password) {
        return res.status(400).send({ message: "Username and password required" });
    }

    const foundUser = await prisma.user.findFirst({ where: { username: username} });

    // console.log({password, foundPassword: foundUser.password});
    if(!foundUser || !bcrypt.compareSync(password, foundUser.password)) {
        return res.status(401).send({ message: "User or password incorrect" });
    }

    return res.status(200).send({ reuslt: jwtLib.generateToken(foundUser.id), message: "Login successful" });
})

authRoutes.get("/profile", authMiddleware, async (req, res) => {
    loginId = req.userId;
    console.log("userId",loginId);
    const foundUser = await prisma.user.findUnique({ where: { id: loginId }});
    const { password: _, ...noPassUserData } = foundUser;
    return res.status(200).send({ result: noPassUserData, message: "found user" });  
})

module.exports = authRoutes