new Promise(function (resolve, reject) {
	setTimeout(() => {
		throw new Error('Whoops!')
	}, 1000)
}).catch(alert)

// catch не выполнится, поскольку Ошибка лежит в setTimeout.
// В главе говорится про "скрытый try...catch", а эта штука синхронная. В то время как setTimeout() - асинхронная. И пока дело дойдёт до ошикби (через 1 секунду), движок уже покинет конструкцию try..catch

// Если заменить throw на reject, то всё заработает
