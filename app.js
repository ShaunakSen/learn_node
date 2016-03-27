/**
 * Created by shaunak on 23/3/16.
 */
function addNumber(a, b) {
    return a + b;
}

console.log(addNumber(7, 10.5));
console.log(stupid());

// Remember: any function without explicit return statement is going to return undefined

// set a var to an anonymous function

var printloves = function () {
    console.log("mini loves shona");
}
printloves();

//when u store a function in a var u can basically use that var in other functions

setTimeout(printloves, 5000);


function placeAnOrder(orderNumber) {
    console.log("customer order: ", orderNumber);
    cookAndDeliverFood(function () {
        console.log('Delivered food order: ' + orderNumber);
    })

}


//time consuming function
function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);
}

//place the orders
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

var mini = {
    favFood: 'achaar',
    favMovie: 'kung fu panda'
};

// EVERYTHING IS REFERENCE IN JAVASCRIPT
var shona = mini
//shona is a reference to mini
shona.favFood = "chcken";
console.log(mini.favFood);

//this keyword is just a reference to the thing which called it

var littleMini = {
    printName: function () {
        console.log("My name is little mini");
        console.log(this === littleMini);
    }
};

littleMini.printName();

//the default calling context is GLOBAL
function stupid() {
    console.log("\ni am stupid");
    console.log(this === global);
}

stupid();


// PROTOTYPING - add additional methods to an existing class

function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave one life to " + targetPlayer.name);
    }
}
var Shaunak = new User();
var Manisha = new User();

Shaunak.name = "Shaunak";
Manisha.name = "Manisha";
Manisha.giveLife(Shaunak);
console.log("Shaunak: " + Shaunak.life + " Manisha: " + Manisha.life);

User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " uppercutted " + targetPlayer.name);
};

Manisha.uppercut(Shaunak);
console.log("Shaunak: " + Shaunak.life + " Manisha: " + Manisha.life);

//u can add properties also

User.prototype.magic = 60;
console.log(Shaunak.magic);

var person = require('./modules');
person.person();