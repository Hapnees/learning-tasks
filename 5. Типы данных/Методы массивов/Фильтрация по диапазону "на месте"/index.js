const filterRangeInPlace = (arr, a, b) => {
	arr.forEach((el, idx) => {
		if (!(el >= a && el <= b)) {
			arr.splice(idx, 1)
		}
	})
}
