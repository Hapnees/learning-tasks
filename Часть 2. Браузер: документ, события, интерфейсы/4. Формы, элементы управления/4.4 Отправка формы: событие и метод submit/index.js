const btnShowForm = document.getElementById('btn__show-form')
const modalWindow = document.getElementById('modal')
const form = document.getElementById('prompt-form')

const showPrompt = (html, callback) => {
	btnShowForm.onclick = () => {
		modalWindow.style.display = 'flex'
		let currentFormElemIndex = 0
		const lastFormElemIndex = form.elements.length - 1

		document.onkeydown = event => {
			if (event.key === 'Escape') {
				callback(null)
				modalWindow.style.display = 'none'
				document.onkeydown = null
			} else if (event.key === 'Tab' && !event.shiftKey) {
				form.elements[currentFormElemIndex].focus()
				currentFormElemIndex++
				if (currentFormElemIndex > lastFormElemIndex) currentFormElemIndex = 0
				return false
			} else if (event.key === 'Tab' && event.shiftKey) {
				form.elements[currentFormElemIndex].focus()
				currentFormElemIndex--
				if (currentFormElemIndex < 0) currentFormElemIndex = lastFormElemIndex
				return false
			}
		}

		form.text.focus()
	}

	const promptMessage = document.getElementById('prompt-message')
	promptMessage.innerHTML = html

	form.onsubmit = () => {
		const value = form.text.value
		callback(`Вы ввели: ${value}`)
	}

	const cancelBtn = form.cancel
	cancelBtn.onclick = () => {
		callback(null)
		modalWindow.style.display = 'none'
		document.onkeydown = null
	}
}

showPrompt('Введите что-нибудь<br>...умное :)', function (value) {
	alert(value)
})
