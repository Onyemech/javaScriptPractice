const ps = require("prompt-sync")
const prompt = ps()

let userNumbers = []

for(let count = 1; count < 6; count++) {
	userNumber = parseInt(prompt("Enter your number "+ count+" "))
	userNumbers.push(userNumber)
}

for (let count = 0; count < userNumbers.length; count++) {
	for (let counter = 0; counter < userNumbers.length; counter++) {
		if (userNumbers[counter] < userNumbers[counter + 1]) {
			userNumbers[counter] = userNumbers[counter] + userNumbers[counter + 1]
			userNumbers[counter + 1] = userNumbers[counter] - userNumbers[counter + 1]
			userNumbers[counter] = userNumbers[counter] - userNumbers[counter + 1]

		}
	} 
}

console.log(userNumbers)