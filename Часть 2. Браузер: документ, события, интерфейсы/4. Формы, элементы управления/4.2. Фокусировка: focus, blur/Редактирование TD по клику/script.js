let table = document.getElementById('bagua-table')

const editingMap = new Map([['isEditing', false]])

table.onclick = event => {
	const target = event.target

	if (target.tagName !== 'TD' || editingMap.get('isEditing')) return
	editingMap.set('isEditing', true)

	const { textareaCont, textareaElem } = createTextareaCont(target)
	const btnsCont = createBtnsCont(target, textareaCont)
	textareaCont.append(btnsCont)

	target.replaceWith(textareaCont)
	textareaElem.focus()
}

const createTextareaCont = viewElem => {
	const textareaCont = document.createElement('div')
	const textareaElem = document.createElement('textarea')

	textareaCont.className = 'container__edit'

	textareaElem.className = 'edit'
	textareaElem.value = viewElem.innerHTML
	textareaElem.style.height = viewElem.offsetHeight + 'px'
	textareaElem.style.width = viewElem.offsetWidth + 'px'

	textareaCont.append(textareaElem)

	return { textareaCont, textareaElem }
}

const createBtnsCont = (viewElem, textareaCont) => {
	const textareaElem = textareaCont.getElementsByTagName('textarea')[0]
	const btnsCont = document.createElement('div')
	const okBtn = document.createElement('button')
	const cancelBtn = document.createElement('button')

	btnsCont.className = 'edit__container__btn'
	okBtn.textContent = 'OK'
	cancelBtn.textContent = 'CANCEL'
	btnsCont.append(okBtn, cancelBtn)

	okBtn.onclick = () => {
		viewElem.innerHTML = textareaElem.value
		textareaCont.replaceWith(viewElem)
		editingMap.set('isEditing', false)
	}

	cancelBtn.onclick = () => {
		textareaCont.replaceWith(viewElem)
		editingMap.set('isEditing', false)
	}

	return btnsCont
}
