const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds for hashing

class Helpers {
    generateHashPassword(password) {
        // Generate a salt
        const salt = bcrypt.genSaltSync(saltRounds);
        // Hash the password with the salt
        const hash = bcrypt.hashSync(password, salt);
        // Return the hashed password
        return hash;
    }

    comparePassword(password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword);
    }
}

module.exports = new Helpers()
