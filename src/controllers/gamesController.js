const games = require('../models/games.json')

const getGames = (request, response) => {
    response.status(200).send(games)   
}

const getGameById = (request, response) => {
    const id = parseInt(request.params.id)
    const game = games.find(game => game.id === id)
    if(game){
        response.status(200).send(game)
    } else {
        response.status(404).send({ message: "Id not found"})
    }
}

const updateGame = (request, response) => {
    const id = parseInt(request.params.id)
    const updatedGame = request.body
    const game = games.find((game, index) => {
        if(game.id == id){
            games.splice(index, 1, {id, ...updatedGame})
            return true
        }
    })

    if(game){
        response.status(200).send(games)
    } else {
        response.status(404).send({ message: "Id not found"})
    }
}

const updateGameKey = (request, response) => {
    const id = parseInt(request.params.id)
    const updatedGame = request.body
    const game = games.find(game => game.id === id)
    if(game){
        Object.keys(updatedGame).forEach(key => {
            game[key] = updatedGame[key]
        })
        response.status(200).send(game)
    } else {
        response.status(404).send({ message: "Id not found"})
    }
}

module.exports = {
    getGames,
    getGameById,
    updateGame,
    updateGameKey
}