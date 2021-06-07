'use strict';
const User = require('../schema/users');

function deleteHandler(req, res) {
  let email = req.query.email;
  let index = req.params.index;
  let type = req.query.type;
  console.log('type', type);
  console.log('email', email);

  //filter based on the type sent from frontend
  User.find({ email: email }, (err, data) => {
    let deleteFilter = data[0];
    let deletedArr;
    if (type === 'anime') {
      deletedArr = deleteFilter.favoriteAnime.filter(
        (item, idx) => index != idx
      );
      console.log('insied anime if');

      data[0].favoriteAnime = deletedArr;
    } else if (type == 'movie') {
      deletedArr = deleteFilter.favoriteMovie.filter(
        (item, idx) => index != idx
      );
      console.log('insied move if');

      data[0].favoriteMovie = deletedArr;
    } else if (type === 'game') {
      deletedArr = deleteFilter.favoriteGame.filter(
        (item, idx) => index != idx
      );
      console.log('insied game if');

      data[0].favoriteGame = deletedArr;
    }

    data[0].save();
    // console.log(data[0]);
    res.send(data[0]);
  });
}

module.exports = deleteHandler;
