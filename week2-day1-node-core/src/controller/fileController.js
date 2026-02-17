const { getFileStream } = require('../services/fileServices')

const readFile = (req, res) => {
    const fileStream = getFileStream();

    fileStream.on('error', (err) => {
        console.error('Error reading file:', err);
        res.status(500).send('Error reading file');
    })

    res.setHeader('Content-Type', 'text/plain');

    fileStream.pipe(res)
}

module.exports = { readFile}