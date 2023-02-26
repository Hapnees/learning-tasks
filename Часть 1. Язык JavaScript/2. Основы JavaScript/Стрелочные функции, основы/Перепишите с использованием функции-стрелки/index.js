const ask = (question, yes, no) => {
	if (confirm(question)) yes()
	else no()
}

const agree = () => alert('Вы согласились.')
const disagree = () => alert('Вы отменили выполнение.')

ask('Вы согласны?', agree, disagree)
