let obj, method

obj = {
	go: function () {
		console.log(this)
	},
}

//obj.go() // (1) [object Object]

//obj.go() // (2) [object Object]
;(method = obj.go)() // (3)
;(obj.go || obj.stop)() // (4)

// Вывод (3) и (4) зависит от того, где мы запускаем код. В nodejs или в браузере. В брауезере получим [object Window], т.к. любая операция, кроме вызова, превратит значение из ссылочного типа в обычную функцию
