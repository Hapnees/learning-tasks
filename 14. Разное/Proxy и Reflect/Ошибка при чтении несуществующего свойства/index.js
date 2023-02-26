let user = {
	name: 'John',
}

const wrap = target => {
	return new Proxy(target, {
		get(target, prop, receiver) {
			if (prop in target) return Reflect.get(...arguments)
			else {
				throw new Error(`Ошибка: свойство ${prop} не существует`)
			}
		},
	})
}

user = wrap(user)

console.log(user.name)
console.log(user.age)
