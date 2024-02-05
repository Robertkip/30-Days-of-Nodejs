
const prompt = require(`prompt-sync`)();
function greet(name) {
    console.log(`Hi ${name}, how do you do?`);
}
let name = "John";

function displayGreeting(callback) {
    let name = prompt("What's your name?");
    callback(name);
};

displayGreeting(greet);