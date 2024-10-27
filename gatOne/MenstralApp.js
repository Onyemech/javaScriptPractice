const ps = require("prompt-sync");
const prompt = ps();

console.log("Welcome to my menstruation cycle calculator");

let userName = prompt("Please Enter your name: ");
console.log("Hello, " + userName + "!");

let userAge = parseInt(prompt("Enter thy age: "));
let userMonth = parseInt(prompt("Enter the month in numbers : "));

if (userAge < 8 || userAge > 50) {
	console.log("Please consult your doctor.");
} else {
	let cycleLength = parseInt(prompt("Enter cycle length: "));
        let lastFlowDate = parseInt(prompt("Enter last flow day: "));
    	getNextFlowDate(cycleLength, lastFlowDate, userMonth);
}

function getNextFlowDate(cycleLength, lastFlowDate, userMonth) {
    	let year = new Date().getFullYear();
    	let lastFlowDateObj = new Date(year, userMonth - 1, lastFlowDate);
    
    	let nextMenstruationDate = new Date(lastFlowDateObj);
    	nextMenstruationDate.setDate(nextMenstruationDate.getDate() + cycleLength);
    
    	let ovulationDate = new Date(lastFlowDateObj);
    	ovulationDate.setDate(ovulationDate.getDate() + Math.floor(cycleLength / 2));
    
    	let safePeriodStart = new Date(nextMenstruationDate);
    	safePeriodStart.setDate(safePeriodStart.getDate() - 18);
        
    	console.log("Your next flow date is: " + (nextMenstruationDate.getMonth() + 1) + "-" + nextMenstruationDate.getDate());
    	console.log("Your ovulation starting date is: " + (ovulationDate.getMonth() + 1) + "-" + ovulationDate.getDate());
    	console.log("Your safe period starts from: " + (safePeriodStart.getMonth() + 1) + " and ends in 5 days ");
}
