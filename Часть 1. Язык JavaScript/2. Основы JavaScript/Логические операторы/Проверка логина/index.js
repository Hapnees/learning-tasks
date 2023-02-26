const username = prompt('Введите имя пользователя', '')

if (username === 'Админ') {
	const password = prompt('Введите пароль', '')

	if (password === 'Я главный') {
		alert('Здравствуйте')
	} else if (!password) {
		alert('Отменено')
	} else {
		alert('Неверный пароль')
	}
} else if (!username) {
	alert('Отменено')
} else {
	alert('Я вас не знаю')
}
