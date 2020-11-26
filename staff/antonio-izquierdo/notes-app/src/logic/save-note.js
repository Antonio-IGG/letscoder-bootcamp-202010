import { call } from '../utils'
import { validateId, validateText, validateTags, validateVisibility, validateCallback } from './helpers/validations'

export default function saveNote(token, noteId, text, tags, visibility, callback) {
    //validateId(token)
    //if (typeof noteId !== 'undefined') validateId(noteId)
    validateText(text)
    validateTags(tags)
    validateVisibility(visibility)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/notes', { 
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ noteId, text, tags, visibility }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(null)
        })
} 