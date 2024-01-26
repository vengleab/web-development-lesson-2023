const bcrypt = require('bcrypt');
const salf = 10;

const userData = [
    { id: 1, username: 'admin', password: bcrypt.hashSync('admin', salf) },
]

module.exports = userData;