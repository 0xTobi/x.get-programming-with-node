let printDetails = require("./main.js");
for (let elements of printDetails.details) {
    console.log(`${elements.name} is ${elements.age} years old.`)
    if (elements.age >= 18) {
        console.log(`${elements.name} is old enough to drink.`)
    } else {
        console.log(`${elements.name} is not old enough to drink`)
    }
}