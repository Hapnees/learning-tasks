// Работает корректно

function Person(age) {
	this.age = age
}

const person_1 = new Person(18)

const person_2 = new person_1.constructor(11)

// Работает некорректно

function Person(age) {
	this.age = age
}

Person.prototype = {}

const person_1 = new Person(18)

const person_2 = new person_1.constructor(11)
