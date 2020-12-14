const { Router } = require('express')
const { jsonBodyParser } = require('../../middlewares')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleSaveGame,
    handleFindGames,
    handleRetrieveGame,
    handleSaveGameImage,
    handleRetrieveGameImage
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.get('/api/users', withErrorHandling(handleRetrieveUser))

router.post('/api/games', jsonBodyParser, withErrorHandling(handleSaveGame))

router.get('/api/games', withErrorHandling(handleFindGames))

router.get('/api/games/:gameId', withErrorHandling(handleRetrieveGame))

router.post('/api/games/:gameId/images', jsonBodyParser, withErrorHandling(handleSaveGameImage))

router.get('/api/games/:gameId/images', withErrorHandling(handleRetrieveGameImage))


//'http://localhost:4000/api/games/?query=<query>&gameconsole=<gameconsole>&budget=<budget>&priceMin=<priceMin>&priceMax=<priceMax>'




module.exports = router