let words = "Hello words";
let vowels = "aeiou";
let number = 0;


for(let counter = 0; counter < words.length; counter++) {
	if(vowels.includes(words[counter])){
		number++
	}
}

console.log(number)