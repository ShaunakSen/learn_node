/**
 * Created by shaunak on 27/3/16.
 */
var mini = {
    favFood:'achaar',
    favMovie: 'kung fu panda'
};

// EVERYTHING IS REFERENCE IN JAVASCRIPT
var shona = mini
//shona is a reference to mini
shona.favFood="chcken";
console.log(mini.favFood);
