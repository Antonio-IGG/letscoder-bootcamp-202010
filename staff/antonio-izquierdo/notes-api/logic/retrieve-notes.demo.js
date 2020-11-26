/* const retrieveNotes = require('./retrieve-notes')

retrieveNotes('1605100834183530418874468846100', console.log)  */
require('dotenv').config()
const { MongoClient } = require('mongodb')
const context = require('./context')
const retrieveNotes = require('./retrieve-notes')

const saveNote = require('./save-note')

const { env: { MONGODB_URL } } = process

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

client.connect((error, connection) => {
    if (error) return console.error(error)

    context.connection = connection

    try {
        retrieveNotes('5fb931532723ea3bc8aedb88')
        .then(() => console.log("note retrieved"))
        .catch(error => console.error("note could not be retrieved", error))
        .then(() => client.close())
        .then(() => console.log("connection closed"))
    } catch (error) {
        console.log(error.message)
    }
})