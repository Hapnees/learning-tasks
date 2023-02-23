function f() {
	alert(this) // ?
}

let user = {
	g: f.bind(null),
}

user.g()

// Выведет null, т.к. this стало равно null
