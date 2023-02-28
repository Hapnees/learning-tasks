const table = document.getElementById('age-table')

const labels = table.getElementsByTagName('label')

const tdWithReg = Array.from(table.getElementsByTagName('td')).filter(td =>
	td.textContent.includes('Age')
)[0]

const form = document.getElementsByName('search')[0]
const firstInput = form.getElementsByTagName('input')[0]

const inputs = form.getElementsByTagName('input')
const lastInput = inputs[inputs.length - 1]
