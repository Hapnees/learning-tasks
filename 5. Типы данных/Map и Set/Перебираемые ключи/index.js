// ДО

let map = new Map()

map.set('name', 'John')

let keys = map.keys()

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push('more')

// keys.push() не сработает, потому что map.keys() возвращает нам
// [Map Iterator], а не массив. Воспользуемся методом Array.from(), чтобы преобразовать в массив

// ПОСЛЕ

const map = new Map()

map.set('name', 'John')

const keys = Array.from(map.keys())

keys.push('more')
