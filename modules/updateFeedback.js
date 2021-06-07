'use strict';
const User = require('../schema/users');

function updateFeedback(req, res) {
  let email = req.body.email;
  let index = req.params.index;
  let type = req.body.type;
  let feedback = req.body.feedback;
  // console.log(feedback);

  //filter based on the type sent from frontend
  User.find({ email: email }, (err, data) => {
    let updateFilter = data[0];
    let updatedArr;
    if (type === 'anime') {
      updatedArr = data[0].favoriteAnime.map((item, idx) => {
        if (index == idx) {
          item.feedback = feedback;
        }
        return item;
      });

      data[0].favoriteAnime = updatedArr;
    } else if (type == 'movie') {
      updatedArr = updateFilter.favoriteMovie.map((item, idx) => {
        if (index == idx) {
          item.feedback = feedback;
        }
        return item;
      });
      data[0].favoriteMovie = updatedArr;
    } else if (type === 'game') {
      updatedArr = updateFilter.favoriteGame.map((item, idx) => {
        if (index == idx) {
          item.feedback = feedback;
        }
        return item;
      });

      data[0].favoriteGame = updatedArr;
    }

    data[0].save();
    // console.log(data[0]);
    res.send(data[0]);
  });
}

module.exports = updateFeedback;
