'use strict';

const axios = require('axios');


async function getGame(req,res){
    
    let category = req.query.category

   


    let url = `GET https://www.freetogame.com/api/games?category=${category}`
    try {
        console.log('get the data from the API');
        const game = await axios.get(url);
        console.log(game);

        const gameArray = game.data.genres.map(Item => {
            return new Game(Item)
        })

       
        res.send(gameArray);
    // res.send(movie);

    } catch (error) {
        console.log(error)
        res.status(500).send(`error in getting the game data ==> ${error}`);
    }
}

class Game {

    constructor(item) {

        this.id = item.id
        this.name = item.name        


    }
}

module.exports = getGame;