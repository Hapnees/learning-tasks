let room = {
	number: 23,
}

let meetup = {
	title: 'Совещание',
	occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
	place: room,
}

room.occupiedBy = meetup
meetup.self = meetup

const replacer = (key, value) => {
	const result = key != '' && value == meetup ? undefined : value
	return result
}

const test = JSON.stringify(meetup, replacer)
