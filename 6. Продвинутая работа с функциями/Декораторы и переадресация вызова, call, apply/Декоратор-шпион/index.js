function work(a, b) {
	alert(a + b)
}

function spy(func) {
	function wrapper(...args) {
		wrapper.calls.push(args)
		return func.apply(this, args)
	}

	wrapper.calls = []

	return wrapper
}

work = spy(work)
