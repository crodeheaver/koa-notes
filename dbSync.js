const connection = require('./data_access/connection')

const User = require('./models/user')
const Note = require('./models/note')

connection.sync()