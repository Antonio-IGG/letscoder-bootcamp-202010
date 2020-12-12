const { validateId, validateText, validatePrice} = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { User } = require('../models')
const { Game } = require('../models')
const { ObjectId } = require('mongodb') 

module.exports = function( gameId, name, description, gameconsole, budget, ownerId) {
    if (typeof gameId !== 'undefined') validateId(gameId)
    validateText(name)
    validateText(description)
    validatePrice(budget)
    validateId(ownerId)
    validateText(gameconsole)

    const _id = ObjectId(ownerId)

    return User
        .findById({_id})
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${ownerId} not found`)

            if (gameId) {

                const _id = ObjectId(gameId)

                return Game
                    .findOne({_id})
                    .then(game => {
                        if (!game) throw new NotFoundError(`game with id ${gameId} not found`)

                        return Game
                            .updateOne({ _id }, { $set: { name, description, budget } } )
                            .then(result => result.id)
                    })
            } else
                return Game.create({ name, description, gameconsole, budget, owner: ObjectId(ownerId) })
                    .then(result => result.id)
        })
}