let promise = new Promise(function (resolve, reject) {
	resolve(1)

	setTimeout(() => resolve(2), 1000)
})

promise.then(resp => alert(resp))

// Выведет 1, т.к. все resolve после первого будут игнориороваться
