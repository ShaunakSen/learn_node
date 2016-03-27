/**
 * Created by shaunak on 27/3/16.
 */
function printMini()
{
    console.log("Hi.. I am MINI");
}
function printShona()
{
    console.log("Hi.. I am SHONA");
}

// I only wanna export shona.. mini is protected  .. shona is public

module.exports.person = printShona;