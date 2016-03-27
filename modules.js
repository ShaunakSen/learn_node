/*
 function printMini()
 {
 console.log("Hi.. I am MINI");
 }
 function printShona()
 {
 console.log("Hi.. I am SHONA");
 }

 I only wanna export shona.. mini is protected  .. shona is public

 module.exports.person = printShona;
 */


// 2nd method
/*
module.exports = {
    printMini: function () {
        console.log("Hi.. I am MINI");
    },
    printShona: function () {
        console.log("Hi.. I am SHONA");
    },
    favMovie: "Barfi"
};
*/


/*
module.exports = {
    favMovie:""
};
*/
//object factory

module.exports = function(){
    return {
        favmovies: ""
    };
};

