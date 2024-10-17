const ps = require("prompt-sync")
const prompt = ps()

userYear = prompt("Enter the year : ")
console.log(isLeapYear (userYear))

function isLeapYear (userYear) {
	if (userYear % 4 == 0) {
		return true
	}
		else {
			return false
		}
}