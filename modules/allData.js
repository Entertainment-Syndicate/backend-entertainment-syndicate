'use strict';
const axios = require('axios');

class Anime {
  constructor(item, category) {
    this.title = item.title;
    this.description = item.synopsis;
    this.date = item.start_date.split('').splice(0,10).join('');
    this.image = item.image_url;
    this.type = 'anime';
    this.category = category;
    this.watchURL = item.url;
    this.episodes = item.episodes;
    this.score = item.score;
    this.rate = item.rated;
  }
}
class Movie {
  constructor(item, category) {
    this.title = item.title;
    this.description = item.overview;
    this.date = item.release_date;
    this.image = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    this.type = 'movie';
    this.category = category;
    this.voteAverage = item.vote_average;
    this.voteCount = item.vote_count;
    this.popularity = item.popularity;
    this.cover = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
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
    this.installingURL=item.game_url;
    this.platform=item.platform;
    this.publisher=item.publisher;
    this.developer=item.developer;

  }
}
async function fetchAllData(req, res) {
  
  // GET 20 OF THE ANIMES DATA

  let animeAction;
  let animefantasy;
  let animeHorror;
  let animeScienceFiction;
  try {
    animeAction = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=&genre=1&order_by=score`
    );
    animefantasy = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=&genre=10&order_by=score`
    );
    animeHorror = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=&genre=14&order_by=score`
    );
    animeScienceFiction = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=&genre=24&order_by=score`
    );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(`error in getting the anime data ==> ${error.message}`);
  }

  // EXTRACT THE REQUIRED DATA

  let selectedAnimeAction = animeAction.data.results.splice(0, 10);
  let selectedAnimefantasy = animefantasy.data.results.splice(0, 10);
  let selectedAnimeHorror = animeHorror.data.results.splice(0, 10);
  let selectedAnimeScienceFiction = animeScienceFiction.data.results.splice(
    0,
    10
  );

  let animeActionArr = selectedAnimeAction.map((item) => {
    return new Anime(item, 'action');
  });

  let animefantasyArr = selectedAnimefantasy.map((item) => {
    return new Anime(item, 'fantasy');
  });

  let animeHorrorArr = selectedAnimeHorror.map((item) => {
    return new Anime(item, 'horror');
  });

  let animeScienceFictionArr = selectedAnimeScienceFiction.map((item) => {
    return new Anime(item, 'ScienceFiction');
  });

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

  let movieActionArr = movieAction.data.results
    .map((item) => {
      return new Movie(item, 'action');
    })
    .splice(0, 10);
  let moviefantasyArr = moviefantasy.data.results
    .map((item) => {
      return new Movie(item, 'fantasy');
    })
    .splice(0, 10);
  let movieHorrorArr = movieHorror.data.results
    .map((item) => {
      return new Movie(item, 'horror');
    })
    .splice(0, 10);
  let movieScienceFictionArr = movieScienceFiction.data.results
    .map((item) => {
      return new Movie(item, 'ScienceFiction');
    })
    .splice(0, 10);

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
    .splice(0, 10);
  let gamefantasyArr = gamefantasy.data
    .map((item) => {
      return new Game(item, 'fantasy');
    })
    .splice(0, 10);
  let gameHorrorArr = gameHorror.data
    .map((item) => {
      return new Game(item, 'horror');
    })
    .splice(0, 10);
  let gameScienceFictionArr = gameScienceFiction.data
    .map((item) => {
      return new Game(item, 'ScienceFiction');
    })
    .splice(0, 10);
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
