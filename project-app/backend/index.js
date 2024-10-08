const app = require('./app')
const http = require('http')
require('dotenv').config()

const PORT = process.env.PORT

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`)
})
