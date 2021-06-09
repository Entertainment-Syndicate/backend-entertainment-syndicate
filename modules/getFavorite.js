'use strict';

const User = require('../schema/users');

// Function Sending Favorite data from dataBase res to 3rd req
const getFavoriteHandler = (req, res) => {
  //   console.log(req.query.email);
  let email = req.query.email;

  User.findOne({ email: email }, (err, data) => {
    if (err) {
      console.log('error from getFavourite');
    } else {
      // console.log(data);
      res.send(data);
    }
  });
};

module.exports = getFavoriteHandler;
