const truncate = (str, maxlength = str.length) => {
	if (str.length <= maxlength) return str

	const modifStr = str.slice(0, maxlength - 1) + '…'
	return modifStr
}
