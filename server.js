'use strict';

const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')
const axios = require('axios');

const server = express();
server.use(cors());
server.use(express.json());

const getMovie = require('./modules/movies.js')
const getAnime = require('./modules/anime.js')
const getGame = require('./modules/games.js')



let PORT = process.env.PORT
server.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

server.get('/movies',getMovie);

server.get('/anime',getAnime)

server.get('/game',getGame)


