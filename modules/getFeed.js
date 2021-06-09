const Feed = require('../schema/getFeed');

const getFeed = (req, res) => {
  Feed.find({}, (err, data) => {
    console.log('inside feed');
    res.send(data);
  });
};

module.exports = getFeed;
