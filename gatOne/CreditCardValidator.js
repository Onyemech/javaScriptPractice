const ps = require("prompt-sync")
const prompt = ps()

let userCard = prompt("Hello, Kindly Enter Card details to verify ");
let realNumber = userCard;
let lenght = userCard.length;

if (lenght >= 13 && lenght <= 16){
	let checkCardType = getFirstDigit(userCard);
	oddCount = 0;
	evenCount = 0;
	sumOdds = 0;
	sumEven = 0;

	let arrayNumbers = Array.from(userCard).map(Number);
	let oddPosition = new Array(Math.floor(lenght / 2)).fill(0)
	let evenPosition = new Array(Math.floor(lenght / 2)).fill(0)
		
	for(let count = 0; count< arrayNumbers.length; count++) {
		if (count % 2 == 0) {
			oddPosition[oddCount] = arrayNumbers[count];
			oddCount++;
		}
			else {
				evenPosition[evenCount] = arrayNumbers[count];
				evenCount++;
			}
	}
		for(let count = 0; count < oddPosition.length; count++) {
			oddPosition[count] = oddPosition[count] * 2;
			if (oddPosition[count] > 9) {
				oddPosition[count] = sumTwoNumbers(oddPosition[count])
			}

		}
		for (let counter = 0; counter < oddPosition.length; counter++) {
			sumOdds+= oddPosition[counter];
		}
		for (let cout = 0; cout < evenPosition.length; cout++) {
			sumEven+= evenPosition[cout];
		}

		let total = sumEven + sumOdds;
		if (total  % 10 == 0 && checkCardType == 4) {

						let visaCard = "******************************\n"
                      								+ "**Credit Card Type : VisaCard\n"
                     								+ "**Credit Card Number: " + realNumber + "\n"
                    								+ "**Credit Card Digit Length : " + lenght + "\n"
                      								+ "**Credit Card Validity Status: Valid\n"
                      								+ "******************************";
						console.log(visaCard);
					} 
 
						else if(total  % 10 != 0 && checkCardType == 4){
    							let visaCard2 = "******************************\n"
                      								+ "**Credit Card Type : VisaCard\n"
                     								+ "**Credit Card Number: " + realNumber + "\n"
                    								+ "**Credit Card Digit Length : " + lenght + "\n"
                      								+ "**Credit Card Validity Status: invalid\n"
                      								+ "******************************";
   							console.log(visaCard2);
						}



					if (total  % 10 == 0 && checkCardType == 5) {

						let masterCard = "******************************\n"
                      								+ "**Credit Card Type : MasterCard\n"
                     								+ "**Credit Card Number: " + realNumber + "\n"
                    								+ "**Credit Card Digit Length : " + lenght + "\n"
                      								+ "**Credit Card Validity Status: Valid\n"
                      								+ "******************************";
						console.log(masterCard);
					} 
 
						else if (total  % 10 != 0 && checkCardType == 5){
    							let masterCard2 = "******************************\n"
                      								+ "**Credit Card Type : MasterCard\n"
                     								+ "**Credit Card Number: " + realNumber + "\n"
                    								+ "**Credit Card Digit Length : " + lenght + "\n"
                      								+ "**Credit Card Validity Status: invalid\n"
                      								+ "******************************";
   							console.log(masterCard2);
						}



					if (total  % 10 == 0 && checkCardType == 3) {

						let expressCard = "******************************\n"
                      								+ "**Credit Card Type : American Express Cards\n"
                     								+ "**Credit Card Number: " + realNumber + "\n"
                    								+ "**Credit Card Digit Length : " + lenght + "\n"
                      								+ "**Credit Card Validity Status: Valid\n"
                      								+ "******************************";
						console.log(expressCard);
					} 
 
						else if (total  % 10 != 0 && checkCardType == 3){
    							let expressCard2 = "******************************\n"
                      								+ "**Credit Card Type : American Express Cards\n"
                     								+ "**Credit Card Number: " + realNumber + "\n"
                    								+ "**Credit Card Digit Length : " + lenght + "\n"
                      								+ "**Credit Card Validity Status: invalid\n"
                      								+ "******************************";
							console.log(expressCard2);

						}

		
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
function sumTwoNumbers(number) {
	
	let firstDigit = Math.floor(number / 100);       
   	let secondDigit = Math.floor((number / 10) % 10); 
    	let thirdDigit = Math.floor(number % 10);   
    
    	let sum = firstDigit + secondDigit + thirdDigit; 

	return sum;
}
