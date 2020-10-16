const express = require('express')
const router = express.Router()
const controller = require('../controllers/gamesController')

//@route GET games
//@desc Retornar todos os games
//@access Public
//@endpoint http://localhost:porta/games
router.get('/jogos', controller.getGames)

//@route GET games
//@params :id
//@desc Retornar apenas um único game pelo id: identificador
//@access Public
//@endpoint http://localhost:porta/games/:id
router.get('/jogos/:id', controller.getGameById)

//@route PUT games
//@params :id
//@desc Atualiza completamente um game pelo id: identificador
//@access Public
//@endpoint http://localhost:porta/games/:id
router.put('/jogos/:id', controller.updateGame)

//@route PATCH games
//@params :id
//@desc Atualiza parcialmente um game pelo id: identificador
//@access Public
//@endpoint http://localhost:porta/games/:id
router.patch('/jogos/:id', controller.updateGameKey)

module.exports = router