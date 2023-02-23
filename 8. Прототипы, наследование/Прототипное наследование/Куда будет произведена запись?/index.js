let animal = {
	eat() {
		this.full = true
	},
}

let rabbit = {
	__proto__: animal,
}

rabbit.eat()

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

// Свойство full получит объект rabbit
