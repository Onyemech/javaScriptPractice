const ps = require("prompt-sync")
const prompt = ps()

let userCard = prompt("Hello, Kindly Enter Card details to verify ")

let cardLength = userCard.length

if (cardLength >= 13 && cardLength <= 16){
	let checkCardType = getFirstDigit(userCard);

	let arrayNumbers = Array.from(userCard);
	let oddPosition = new Array(Math.floor(cardLength / 2)).fill(0)
	let evenPosition = new Array(Math.floor(cardLength / 2)).fill(0)
		
	for(let count = 0; count< arrayNumbers.length; count++) {
		if (count % 2 == 0) oddPosition = arrayNumbers[count];
	}
	console.log(checkCardType)
}

	else {
		console.log("Invalid card\nPlease try again");
	}
function getFirstDigit (userCard) {
	let convertToArray = Array.from(userCard)
	let firstDigit = parseInt(convertToArray[0]);
		
	if (convertToArray[0] .startsWith('3')) {	
		let secondDigit = parseInt(convertToArray[1]);
		let twoDigits = firstDigit * 10 + secondDigit;
		return twoDigits;
	}
		else {
			return firstDigit;
		}
	
	
}
