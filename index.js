const myProfil = require('./information');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${myProfil.name} \n I went from ${myProfil.campus}`,
    e : "UU",
    T : "w ",
}));

// or cowsay.think()