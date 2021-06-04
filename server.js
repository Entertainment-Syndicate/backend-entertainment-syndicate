'use strict';

const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')
const axios = require('axios');;

const server = express();
server.use(cors());
// server.use(express.json());

let PORT = process.env.PORT
server.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

server.get('/movies',getMovie)

async function getMovie(req,res){
    
    // let movie = req.query.query

    // let key1 = process.env.MOVIE_API_KEY;


    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=436281052c009396f1046ba27be009e1`
    try {
        console.log('get the data from the API');
        const movie = await axios.get(url);

        const movieArray = movie.data.map(Item => {
            return new Movie(Item)
        })

       
        res.send(movie);
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