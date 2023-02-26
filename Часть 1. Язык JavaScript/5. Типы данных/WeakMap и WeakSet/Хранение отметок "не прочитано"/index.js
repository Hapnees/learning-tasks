let messages = [
	{ text: 'Hello', from: 'John' },
	{ text: 'How goes?', from: 'John' },
	{ text: 'See you soon', from: 'Alice' },
]

const readMessages = new WeakSet()

// Из строчки "P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных" ясно, что нам нужно использовать либо WeakMap, либо WeakSet. Поскольку нам важен лишь факт прочтения(или непрочтения) сообщения, то выберем WeakSet

// Для того, чтобы прочитать сообщение
readMessages.add(messages[0])

// Для того, чтобы узнать, прочитано оно или нет
readMessages.has(messages[0])
