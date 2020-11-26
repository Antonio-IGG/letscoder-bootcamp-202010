import { call } from '../utils'
import { validateToken, validateCallback } from './helpers/validations'

export default function (noteId, callback) {
    validateToken(noteId)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/notes/delete', { 'Content-type': 'application/json'}, 
        JSON.stringify({ noteId }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const notes = JSON.parse(response)

            callback(null, notes)
        })
} 