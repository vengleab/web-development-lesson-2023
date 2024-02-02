const jwt = require('jsonwebtoken');
const jwtSecret = "s1";

const generateToken = (userId) => {
    return jwt.sign({ userId }, jwtSecret, { expiresIn: '30s' });
}

const verifyToken = (token) => {
    return jwt.verify(token, jwtSecret);
}

module.exports = {
    generateToken,
    verifyToken
}