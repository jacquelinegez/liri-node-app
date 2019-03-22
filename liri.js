require("dotenv").config();
var fs = require("fs");
var spotify = require("spotify");
var action = process.argv[2];
var request = require("request");

switch (command) {
    case "concert-this":
      artistConcerts();
      break;
    case "spotify-this-song":
      searchSong();
      break;
    case "movie-this":
      moviesOMDB();
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
  }

  function artistConcerts () {
      
  }