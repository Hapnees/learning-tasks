const draggableElems = Array.from(document.querySelectorAll('.draggable'))

document.addEventListener('mousedown', event => {
	event.preventDefault()
	const target = event.target
	if (!draggableElems.includes(target)) return

	const currentElem = draggableElems.find(el => el === target)
	currentElem.style.left = currentElem.getBoundingClientRect().left + 'px'
	currentElem.style.top =
		currentElem.getBoundingClientRect().top +
		document.documentElement.scrollTop +
		'px'

	currentElem.style.position = 'absolute'

	const currentElemRect = currentElem.getBoundingClientRect()

	const shiftX = event.clientX - currentElemRect.left
	const shiftY = event.clientY - currentElemRect.top

	currentElem.ondragstart = () => false
	const onMouseMove = event => {
		currentElemCurrentRect = currentElem.getBoundingClientRect()
		const html = document.documentElement
		let topValue = event.clientY - shiftY + html.scrollTop

		if (
			topValue + currentElem.offsetHeight >
			html.clientHeight + html.scrollTop
		) {
			html.scrollTop += 5
			topValue = html.clientHeight - currentElem.offsetHeight + html.scrollTop
		}

		if (topValue < html.scrollTop) {
			topValue = html.scrollTop
			html.scrollTop -= 5
		}

		currentElem.style.left = event.clientX - shiftX + 'px'
		currentElem.style.top = topValue + 'px'
	}

	const onMouseUp = () => {
		document.removeEventListener('mousemove', onMouseMove)
		document.removeEventListener('mouseup', onMouseUp)
	}

	document.addEventListener('mousemove', onMouseMove)
	document.addEventListener('mouseup', onMouseUp)
})
