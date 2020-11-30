const { validateId } = require('./helpers/validations')
const context = require('./context')
const { NotFoundError } = require('../errors')
const { User } = require('../models')

module.exports = function (userId) {
    validateId(userId)

    return User
    
    .findOne({ id })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            //const { _id, fullname, email } = user

            //user = { id: _id.toString(), fullname, email } // sanitise  

            user.id = _id.toString()

            delete user._id
            delete user.password

            return user.fullname
        })
}.bind(context) 