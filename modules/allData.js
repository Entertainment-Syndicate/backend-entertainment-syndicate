'use strict';
const axios = require('axios');

class Movie {
  constructor(item, category) {
    this.title = item.title;
    this.description = item.overview;
    this.date = item.release_date;
    this.image = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    this.type = 'movie';
    this.category = category;
  }
}
class Anime {
  constructor(item, category) {
    this.title = item.title;
    this.description = item.synopsis;
    this.date = item.start_date;
    this.image = item.image_url;
    this.type = 'anime';
    this.category = category;
  }
}
class Game {
  constructor(item, category) {
    this.title = item.title;
    this.description = item.short_description;
    this.date = item.release_date;
    this.image = item.thumbnail;
    this.type = 'game';
    this.category = category;
  }
}
async function fetchAllData(req, res) {
  // GET 20 OF THE MOVIES DATA

  let movieAction;
  let moviefantasy;
  let movieHorror;
  let movieScienceFiction;
  try {
    movieAction = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=32705b2157d089bfa091a1f46fd73813&with_genres=28`
    );
    moviefantasy = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=32705b2157d089bfa091a1f46fd73813&with_genres=14`
    );
    movieHorror = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=32705b2157d089bfa091a1f46fd73813&with_genres=27`
    );
    movieScienceFiction = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=32705b2157d089bfa091a1f46fd73813&with_genres=878`
    );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(`error in getting the movie data ==> ${error.message}`);
  }

  // EXTRACT THE REQUIRED DATA

  let movieActionArr = movieAction.data.results.map((item) => {
    return new Movie(item, 'action');
  });
  let moviefantasyArr = moviefantasy.data.results.map((item) => {
    return new Movie(item, 'fantasy');
  });
  let movieHorrorArr = movieHorror.data.results.map((item) => {
    return new Movie(item, 'horror');
  });
  let movieScienceFictionArr = movieScienceFiction.data.results.map((item) => {
    return new Movie(item, 'ScienceFiction');
  });

  // GET 20 OF THE ANIMES DATA

  let animeAction;
  let animefantasy;
  let animeHorror;
  let animeScienceFiction;
  try {
    animeAction = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=&genre=1`
    );
    animefantasy = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=&genre=10`
    );
    animeHorror = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=&genre=14`
    );
    animeScienceFiction = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=&genre=24`
    );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(`error in getting the anime data ==> ${error.message}`);
  }

  // EXTRACT THE REQUIRED DATA

  let animeActionArr = animeAction.data.results
    .map((item) => {
      return new Anime(item, 'action');
    })
    .splice(0, 20);
  let animefantasyArr = animefantasy.data.results
    .map((item) => {
      return new Anime(item, 'fantasy');
    })
    .splice(0, 20);
  let animeHorrorArr = animeHorror.data.results
    .map((item) => {
      return new Anime(item, 'horror');
    })
    .splice(0, 20);
  let animeScienceFictionArr = animeScienceFiction.data.results
    .map((item) => {
      return new Anime(item, 'ScienceFiction');
    })
    .splice(0, 20);

  // GET 20 OF THE GAMES DATA

  let gameAction;
  let gamefantasy;
  let gameHorror;
  let gameScienceFiction;
  try {
    gameAction = await axios.get(
      `https://www.freetogame.com/api/games?category=action`
    );
    gamefantasy = await axios.get(
      `https://www.freetogame.com/api/games?category=fantasy`
    );
    gameHorror = await axios.get(
      `https://www.freetogame.com/api/games?category=horror`
    );
    gameScienceFiction = await axios.get(
      `https://www.freetogame.com/api/games?category=sci-fi`
    );
  } catch (error) {
    console.log(error);
    res.status(500).send(`error in getting the game data ==> ${error.message}`);
  }

  // EXTRACT THE REQUIRED DATA

  let gameActionArr = gameAction.data
    .map((item) => {
      return new Game(item, 'action');
    })
    .splice(0, 20);
  let gamefantasyArr = gamefantasy.data
    .map((item) => {
      return new Game(item, 'fantasy');
    })
    .splice(0, 20);
  let gameHorrorArr = gameHorror.data
    .map((item) => {
      return new Game(item, 'horror');
    })
    .splice(0, 20);
  let gameScienceFictionArr = gameScienceFiction.data
    .map((item) => {
      return new Game(item, 'ScienceFiction');
    })
    .splice(0, 20);
  //   console.log(movieAction);

  let allData = [
    animeActionArr,
    animefantasyArr,
    animeHorrorArr,
    animeScienceFictionArr,
    movieActionArr,
    moviefantasyArr,
    movieHorrorArr,
    movieScienceFictionArr,
    gameActionArr,
    gamefantasyArr,
    gameHorrorArr,
    gameScienceFictionArr,
  ];
  res.send(allData);
}

module.exports = fetchAllData;
