const myObject = require('./information.js');
console.log(myObject);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${myObject.nom} and my campus is ${myObject.campus}  `,
    e : "oO",
    T : "U "
}));