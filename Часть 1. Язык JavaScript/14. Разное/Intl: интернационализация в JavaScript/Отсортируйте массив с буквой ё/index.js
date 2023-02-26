const animals = ['тигр', 'ёж', 'енот', 'ехидна', 'АИСТ', 'ЯК']

const collator = new Intl.Collator('ru')

animals.sort((a, b) => {
	return collator.compare(a, b)
})

console.log(animals)
