const num = prompt('Введите число', '')

for (let i = 2; i <= num; i++) {
	let isPrime = true

	for (let j = 2; j < i; j++) {
		if (i % j === 0) {
			isPrime = false
			break
		}
	}
	if (isPrime) alert(i)
}
