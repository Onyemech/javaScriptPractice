const ps = require("prompt-sync")
const prompt = ps()

userNumber = parseInt(prompt("Enter a number : "))
let numberCheck = 1000

while(numberCheck > userNumber) {
	result = numberCheck -= userNumber
	console.log(result)
}