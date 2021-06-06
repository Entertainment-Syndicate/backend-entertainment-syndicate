'use strict';

const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
// const axios = require('axios');

const server = express();
server.use(cors());
server.use(express.json());

mongoose.connect('mongodb://localhost:27017/favorite', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let PORT = process.env.PORT;
server.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

// reqs & res

// function for getting and sending all data response for the 1st req ,
const fetchAllData = require('./modules/allData.js');
server.get('/fetchAllData', fetchAllData);

// fonction for adding data to the database from 2nd req
const favoriteHandler = require('./modules/favorite.js');
server.post('/favorite', favoriteHandler);

// function for sending data from database to profile.
const getFavoriteHandler = require('./modules/getFavorite.js');
server.get('/favorite', getFavoriteHandler);
