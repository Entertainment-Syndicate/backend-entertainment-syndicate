'use strict';

const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
// const axios = require('axios');

const server = express();
server.use(cors());
server.use(express.json());


const fetchAllData = require('./modules/allData.js');

let PORT = process.env.PORT;
server.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

server.get('/fetchAllData', fetchAllData);

