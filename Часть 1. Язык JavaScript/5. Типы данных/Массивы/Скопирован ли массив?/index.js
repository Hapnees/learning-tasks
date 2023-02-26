let fruits = ['Яблоки', 'Груша', 'Апельсин']

// добавляем новое значение в "копию"
let shoppingCart = fruits
shoppingCart.push('Банан')

// что в fruits?
alert(fruits.length) // ?

// Выведет 4, т.к. fruits и shoppingCart ссылаютсян на один и тот же массив
