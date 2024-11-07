const bcrypt = require('bcrypt')

const handleHashPassword = async (password) => {
    try {
        return await bcrypt.hash(password, 10);
    } catch (error) {
        throw error
    }
}

const handleComparePassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        throw error
    }
}

module.exports = {
    handleHashPassword,
    handleComparePassword
}