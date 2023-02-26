function Rabbit(name) {
	this.name = name
}
Rabbit.prototype.sayHi = function () {
	alert(this.name)
}

let rabbit = new Rabbit('Rabbit')

//Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi()
Rabbit.prototype.sayHi()
Object.getPrototypeOf(rabbit).sayHi()
rabbit.__proto__.sayHi()

// Первый вызов отличается тем, что this = rabiit, а в остальных случаях this = Rabbit.prototype. Первая строчка выведет "Rabbit", а остальные - undefined
