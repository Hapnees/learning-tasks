const aclean = arr => {
	const tmpObject = {}

	arr.forEach(el => {
		const modifEl = el.toLowerCase().split('').sort().join('')
		tmpObject[modifEl] = el
	})

	const result = Array.from(Object.values(tmpObject))
	return result
}

// Статья про Map и Set, так что, скорее всего, нужно было использовать их в
// функциях. Поэтому перепишу эту же функцию с использованием Map

const acleanWithMap = arr => {
	const map = new Map()

	arr.forEach(el => {
		const modifEl = el.toLowerCase().split('').sort().join('')
		map.set(modifEl, el)
	})

	const result = Array.from(map.values())
	return result
}
