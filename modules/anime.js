'use strict';

const axios = require('axios');;

async function getAnime(req,res){
    
    // let movie = req.query.query

    // let key1 = process.env.MOVIE_API_KEY;


    let url = `https://api.jikan.moe/v3/search/anime?q=&genre=3`
    try {
        console.log('get the data from the API');
        const anime = await axios.get(url);
        console.log('it is wokring');

        const animeArray = anime.data.results.map(Item => {
            return new Anime (Item)
        })
        console.log(animeArray);
       
        res.send(animeArray);
    // res.send(movie);

    } catch (error) {
        console.log(error)
        res.status(500).send(`error in getting the anime data ==> ${error}`);
    }
}

class Anime {

    constructor(item) {

        this.image_url = item.image_url
        this.title = item.title
        this.episodes = item.episodes        


    }


}

module.exports = getAnime;