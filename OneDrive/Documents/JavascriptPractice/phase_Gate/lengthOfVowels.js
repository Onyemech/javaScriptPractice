let words = "Hello words";
let vowels = "aeiou";
let counter = 0;

for(let count = 0; count < words.length; count++) {
	for(let counter = 0; counter < words.length; counter++) {
		if(words[counter] == vowels){
			counter++
		}
	}
}

console.log(counter)