// Исправленный вариант

let hamster = {
	stomach: [],

	eat(food) {
		this.stomach = [food]
	},
}

let speedy = {
	__proto__: hamster,
	stomach: [],
}

let lazy = {
	__proto__: hamster,
	stomach: [],
}

// Потому что у обоих хомяков был один желудок
