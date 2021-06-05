'use strict';

const axios = require('axios');;

async function getMovie(req,res){
    
    

    if('fantasy' == req.query ){
        let searchNumber = 2;
    }else if('action' == req.query ){
        let searchNumber = 6;
    }else if('sci-fi' == req.query ){
        let searchNumber = 8;
    }else if('horror' == req.query ){
        let searchNumber = 9;
    }

    // let key1 = process.env.MOVIE_API_KEY;

    // let url =  `https://api.themoviedb.org/3/discover/movie?api_key=32705b2157d089bfa091a1f46fd73813&with_genres=${searchNumber}`
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=436281052c009396f1046ba27be009e1`
    try {
        console.log('get the data from the API');
        const movie = await axios.get(url);
        console.log(movie);

        const movieArray = movie.data.genres.map(Item => {
            return new Movie(Item)
        })

       
        res.send(movieArray);
    // res.send(movie);

    } catch (error) {
        console.log(error)
        res.status(500).send(`error in getting the movie data ==> ${error}`);
    }
}

class Movie {

    constructor(item) {

        this.id = item.id
        this.name = item.name        


    }


}

module.exports = getMovie;