function makeObservable(target) {
	const handlers = []

	target.observe = function (newHandler) {
		handlers.push(newHandler)
	}

	return new Proxy(target, {
		set(target, prop, value, receiver) {
			const isSuccess = Reflect.set(...arguments)
			if (isSuccess) handlers.forEach(el => el(prop, value))

			return isSuccess
		},
	})
}

let user = {}
user = makeObservable(user)

user.observe((key, value) => {
	console.log(`SET ${key}=${value}`)
})

user.name = 'John'
