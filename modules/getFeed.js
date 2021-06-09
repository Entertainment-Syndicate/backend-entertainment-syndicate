const Feed = require('../schema/feed');

const getFeed = (req, res) => {
  Feed.find({}, (err, data) => {
    res.send(data);
  });
};

module.exports = getFeed;
