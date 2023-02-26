function debounce(f, ms) {
	let isReady = true

	return function () {
		if (!isReady) return

		f.apply(this, arguments)
		isReady = false

		setTimeout(() => (isReady = true), ms)
	}
}

const f = debounce(console.log, 1000)

f('test')
f('test2')

setTimeout(() => f(3), 100)
setTimeout(() => f(4), 1100)
setTimeout(() => f(5), 2100)
