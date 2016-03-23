/**
 * Created by shaunak on 23/3/16.
 */
function addNumber(a, b)
{
    return a+b;
}

function stupid()
{}

console.log(addNumber(7,10.5));
console.log(stupid());

// Remember: any function without explicit return statement is going to return undefined

// set a var to an anonymous function

var printloves = function()
{
    console.log("mini loves shona");
}
printloves();

//when u store a function in a var u can basically use that var in other functions

setTimeout(printloves, 5000);
