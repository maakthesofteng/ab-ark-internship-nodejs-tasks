const fs = require('fs')
const path = require('path')


const getFileStream = () => {
    const filePath = path.join(__dirname, '..', 'files', 'large.txt');
    // const filePath = path.join(__dirname, "../files/large.txt")

    return fs.createReadStream(filePath, 'utf-8')
}

module.exports = { getFileStream }