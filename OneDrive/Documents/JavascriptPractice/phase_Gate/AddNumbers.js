const ps = require("prompt-sync")
const prompt = ps()

arrayNumbers = []
for(let count = 0; count < 3; count++) {
		let counter = 1
		counter += count
		userNumber = parseInt(prompt("Enter your "+counter+" number "))
		arrayNumbers.push(userNumber)
}
 console.log(sumElements(arrayNumbers))

function sumElements (arrayNumbers) {
	let result = 0
	for(let count = 0; count < arrayNumbers.length; count++) {
		 result = result + arrayNumbers[count]
	}
	return result
}