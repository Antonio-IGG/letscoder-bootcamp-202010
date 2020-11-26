const { validateId, validateCallback } = require('./helpers/validations')
const context = require('./context')
const { ObjectId } = require('mongodb')

const { env: { DB_NAME } } = process

module.exports = function (noteId, callback) {
    validateId(noteId)
    validateCallback(callback)

    const { connection } = this

    const db = connection.db(DB_NAME)

    const notes = db.collection('notes')

    notes.deleteOne({ _id: ObjectOd(noteId) }, (error, result) => {
        if (error) {
            return callback(error)

        } else return callback(null)
    })
}