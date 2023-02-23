const replaceInMiddle = (arr, value) => {
	const indexOfMiddle = Math.round(arr.length / 2) - 1
	arr[indexOfMiddle] = value
}

const styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
replaceInMiddle(styles, 'Классика')
const firstElem = styles.shift()
alert(firstElem)
styles.unshift('Рэп', 'Регги')
