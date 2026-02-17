const crypto = require('crypto');

const hashPassword = (text) => {
    return crypto
        .createHash('sha256')
        .update(text)
        .digest('hex');
}

module.exports = { hashPassword}