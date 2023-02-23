const user = {}

// Использую запись с квадратными скобками, поскольку линтер ругается на запись с точкой, когда свойство отсутствует
// Использую eslint

user['name'] = 'John'
user['surname'] = 'Smith'
user['name'] = 'Pete'

delete user['name']
