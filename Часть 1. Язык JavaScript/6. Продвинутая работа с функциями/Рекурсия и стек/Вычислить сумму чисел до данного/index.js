const sumTo_1 = n => {
	let newNum = n
	for (let i = 1; i < n; i++) {
		newNum += i
	}

	return newNum
}

const sumTo_2 = n => {
	if (n <= 1) {
		return 1
	}

	return n + sumTo_2(n - 1)
}

const sumTo_3 = n => {
	return (n ** 2 + n) / 2
}

// Самый быстрый - вариант с формулой, т.к. вычисления в нём несильно затратные + функция вызывается всего один раз

// Самый медленный - вариант с рекурсией, т.к. функция вызывается n раз
