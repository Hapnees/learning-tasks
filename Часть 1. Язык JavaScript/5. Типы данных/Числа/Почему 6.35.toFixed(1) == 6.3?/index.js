// Насколько я помню, десятичные дроби хранятся немного в другом виде.
// Помимо того числа, которое мы видим, есть ещё длинный-длинный хвост из цифр после
// Полагаю, этот факт и повлиял на результат

alert((1.35).toFixed(1)) // 1.4
alert((6.35).toFixed(1)) // 6.3

// Для того, чтобы правильно округлить, можно использоваться Math.round(). А ещё лучше написать фукцнию для выбора точности

const modifRound = (num, accuracy = 0) => {
	return Math.round(num * 10 ** accuracy) / 10 ** accuracy
}
