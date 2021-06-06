const User = require('../schema/users');

seeding = () => {
  let mahmoud = new User({
    name: 'Mahmoud',
    email: 'mahmoud.saadeh998@gmail.com',
    image:
      'https://lh3.googleusercontent.com/a/AATXAJxydc0MlJAGi8YP9X-Cr5ZejpzWKO7UJfU3GExi=s96-c',
    favoriteAnime: [],
    favoriteMovie: [],
    favoriteGame: [],
  });
  let abd = new User({
    name: 'abd',
    email: 'daour.211@gmail.com',
    image:
      'https://www.promarinetrade.com/cache/promarine/public/shop_product_picture/_1200x800x0/4602_A.jpg',
    favoriteAnime: [],
    favoriteMovie: [],
    favoriteGame: [],
  });
  let yahia = new User({
    name: 'yahia',
    email: 'yahiaqous@gmail.com',
    image:
      'https://lh3.googleusercontent.com/a-/AOh14GgDY0_j6FiJlVnYdMaxopHdCPxMz1zCwPcBJcM_=s96-c',
    favoriteAnime: [],
    favoriteMovie: [],
    favoriteGame: [],
  });
  let hiba = new User({
    name: 'hiba',
    email: 'salemhiba.hs@gmail.com',
    image:
      'https://lh3.googleusercontent.com/ogw/ADea4I4DJYtZbdYi9edhd97FkqvLbYPDXkflNPfMxKoa=s83-c-mo',
    favoriteAnime: [],
    favoriteMovie: [],
    favoriteGame: [],
  });
  let dana = new User({
    name: 'dana',
    email: 'younisdana7@gmail.com',
    image:
      'https://www.promarinetrade.com/cache/promarine/public/shop_product_picture/_1200x800x0/4614_D.jpg',
    favoriteAnime: [],
    favoriteMovie: [],
    favoriteGame: [],
  });
  mahmoud.save();
  abd.save();
  yahia.save();
  hiba.save();
  dana.save();
};
// seeding();

// Adding users Favorite Data to DataBase From 2nd req
favoriteHandler = (req, res) => {
  const { favouriteData } = req.body;
  // console.log(favouriteData);

  // filling data in the schema
  User.findOne({ email: favouriteData.email }, (err, data) => {
    if (err) {
      console.log(err + ' error inside the find');
    } else {
      if (favouriteData.favoriteItem.type === 'anime') {
        // console.log(data, 'anime');
        data.favoriteAnime.push(favouriteData.favoriteItem);
      } else if (favouriteData.favoriteItem.type === 'movie') {
        // console.log(favouriteData.favoriteItem, 'movie');
        data.favoriteMovie.push(favouriteData.favoriteItem);
      } else if (favouriteData.favoriteItem.type === 'game') {
        // console.log(favouriteData.favoriteItem, 'game');
        data.favoriteGame.push(favouriteData.favoriteItem);
      }
    }
    data.save();
    res.send(data);
  });
};

module.exports = favoriteHandler;
