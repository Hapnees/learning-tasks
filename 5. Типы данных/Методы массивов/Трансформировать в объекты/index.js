const petya = { name: 'Петя', surname: 'Иванов', id: 2 }
const vasya = { name: 'Вася', surname: 'Пупкин', id: 1 }
const masha = { name: 'Маша', surname: 'Петрова', id: 3 }
const users = [vasya, petya, masha]

const usersMapped = users.map(el => ({
	id: el.id,
	fullName: `${el.name} ${el.surname}`,
}))
