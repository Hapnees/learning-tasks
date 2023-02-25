const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

delay(3000).then(() => alert('выполнилось через 3 секунды'))
