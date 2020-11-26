/* const saveNote = require('./save-note')
saveNote('1605114786001920841724006920200', '1605861826363177580724222532000', 'Hello, World!', ['hello', 'world'], 'private', console.log)  */

require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')

const saveNote = require('./save-note')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {

    if(error) return console.error(error)

    context.connection = connection

    try {
        saveNote('5fb931532723ea3bc8aedb88', undefined, 'La nota de Pilar',['mongo', 'crisis', 'finde'], 'public')
        .then(console.log('note saved'))
        .catch(error => console.error('note could not be saved', error))
        .then(() => client.close())
        .then(() => console.log('connection closed'))
    } catch (error) {
        console.log('validation error', error)
    }
})