// Исправленный вариант
// По сути, три проверки запиханы в один тест. Если бы одна из них не прошла, то мы бы не поняли, какая именно

function pow(x, n) {
	if (n < 0) return NaN
	if (Math.round(n) != n) return NaN

	let result = 1

	for (let i = 0; i < n; i++) {
		result *= x
	}

	return result
}

describe('pow', function () {
	const x = 5
	let result = x

	it('Возводит x в степень 1', function () {
		assert.equal(pow(x, 1), result)
	})

	it('Возводит x в степень 2', function () {
		result *= x
		assert.equal(pow(x, 2), result)
	})

	it('Возводит x в степень 3', function () {
		result *= x
		assert.equal(pow(x, 3), result)
	})
})
