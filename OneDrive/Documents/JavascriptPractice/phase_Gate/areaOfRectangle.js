const ps = require("prompt-sync")
const prompt = ps()

let width = parseInt(prompt("Enter your width : "))
let height = parseInt(prompt("Enter your height : "))
console.log(getArea(width, height))

function getArea(width, height) {
	let area = width * height
	return area
}
