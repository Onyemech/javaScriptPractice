const ps = require("prompt-sync");
const prompt = ps();

let userName = prompt("Welcome to my menstruation cycle calculator \nPlease Enter your name: ");
let userAge = prompt("Enter thy age: ");
let userMonth = prompt("Enter the month in numbers (1-12): ");

if (userAge < 8 || userAge > 50) {
    console.log("Please consult your doctor ");
} else {
    let cycleLength = prompt("Enter cycle length: ");
    let lastFlowDate = prompt("Enter last flow day: ");
    getNextFlowDate(cycleLength, lastFlowDate, userMonth);
}

function getNextFlowDate(cycleLength, lastFlowDate, userMonth) {
   
}
