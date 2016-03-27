/**
 * Created by shaunak on 27/3/16.
 */
var movies = require('./modules');
//console.log("Bucky's fav movies is "+movies.favMovie);
//shona and mini all reference the same module. So any change within mini is also reflected within shona
//this is the default behavior
//we want to override this default behavior

var shonaMovies = movies();
shonaMovies.favmovies = "barfi";
console.log("Shona's fav movies is "+shonaMovies.favmovies);