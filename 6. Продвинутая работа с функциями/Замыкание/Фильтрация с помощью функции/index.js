let arr = [1, 2, 3, 4, 5, 6, 7]

function inBetween(min, max) {
	return el => el >= min && el <= max
}

function inArray(arr) {
	return el => arr.includes(el)
}

console.log(arr.filter(inBetween(3, 6)))
console.log(arr.filter(inArray([1, 2, 10])))
