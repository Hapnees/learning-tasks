const list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
}

const printList_1 = obj => {
	console.log(obj.value)

	if (!obj.next) return

	return printList_1(obj.next)
}

const printList_2 = obj => {
	let currentObj = obj

	while (currentObj) {
		console.log(currentObj.value)
		currentObj = currentObj.next
	}
}

// Лучше вариант с циклом, поскольку функция вызывается всего один раз
