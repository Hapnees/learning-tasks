const fib_1 = n => {
	if (n <= 1) {
		return n
	}

	return fib_1(n - 1) + fib_1(n - 2)
}

const fib_2 = n => {
	let result = 1
	let prev = 1

	for (let i = 1; i < n - 1; i++) {
		const temp = result
		result += prev
		prev = temp
	}

	return result
}
