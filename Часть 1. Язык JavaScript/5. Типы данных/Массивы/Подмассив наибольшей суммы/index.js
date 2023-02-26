const getMaxSubSum = arr => {
	let maxSum = 0
	let tmpSum = 0

	for (let el of arr) {
		tmpSum += el
		maxSum = Math.max(maxSum, tmpSum)
		if (tmpSum < 0) tmpSum = 0
	}

	return maxSum
}
