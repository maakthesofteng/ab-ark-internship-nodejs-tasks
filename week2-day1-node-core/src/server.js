const express = require('express')
const fileRoutes = require('./routes/fileRoutes')
const loggerMiddleware = require('./middleware/loggingMiddleware')
const { hashPassword } = require('./utils/hashUtils')
// Create an instance of the Express application
const app = express()


app.use(express.json())
app.use(loggerMiddleware)


console.log("Hashed password for 'mysecretpassword':", hashPassword('mysecretpassword'))

app.use('/api/files', fileRoutes)


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})