function f() {
	alert(this.name)
}

f = f.bind({ name: 'Вася' }).bind({ name: 'Петя' })

f()

// Выведет "Вася", т.к. bind() не будет 'перепривязывать' другой контекст
