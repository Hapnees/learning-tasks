let i = 0

setTimeout(() => alert(i), 100) // ?

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
	i++
}

// setTimeout() отработает после всего синхронного кода(в данном случае после цикла). alert выведет 100000000
