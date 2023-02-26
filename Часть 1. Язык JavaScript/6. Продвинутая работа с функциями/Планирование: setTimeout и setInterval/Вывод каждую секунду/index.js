const printNumbers = (from, to) => {
	let current = from
	const interval = setInterval(() => {
		console.log(current)

		if (current === to) {
			clearInterval(interval)
		}

		current++
	}, 1000)
}

const printNumbersWithTimeout = (from, to) => {
	let current = from

	const next = () => {
		console.log(current)
		if (current < to) {
			setTimeout(next, 1000)
		}
		current++
	}

	setTimeout(next, 1000)
}
