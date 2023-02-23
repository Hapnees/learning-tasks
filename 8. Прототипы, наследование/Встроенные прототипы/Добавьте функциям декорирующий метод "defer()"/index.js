function defer(ms) {
	const func = this

	return function (...args) {
		setTimeout(() => func.apply(this, args), ms)
	}
}

Function.prototype.defer = defer

function f(a, b) {
	console.log(a + b)
}

f.defer(1000)(1, 2)
