/**
 * Created by shaunak on 27/3/16.
 */
var movies = require('./modules');
//movies.favMovie="Kung Fu Panda";
//console.log("Mini's fav movies is "+movies.favMovie);

var miniMovies = movies();
miniMovies.favmovies="Kung Fu Panda";
console.log("Mini's fav movies is "+miniMovies.favmovies);