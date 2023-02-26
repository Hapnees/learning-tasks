const obj = {}

function A() {
	return obj
}

function B() {
	return obj
}

const a = new A()
const b = new B()

alert(a == b)
