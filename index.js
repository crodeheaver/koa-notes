require('dotenv').config()
const server = require('./app.js')

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`API server started on ${port}`))
