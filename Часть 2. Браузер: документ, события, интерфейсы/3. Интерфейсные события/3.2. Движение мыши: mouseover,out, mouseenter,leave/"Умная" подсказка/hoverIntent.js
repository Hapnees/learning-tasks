// -------------> Вроде работает, но тесты не проходит :C <-------------
// FIXME: не проходит тесты

'use strict'

// Здесь показан набросок класса
// с возможностями, которые нам понадобятся
class HoverIntent {
	constructor({
		sensitivity = 0.1, // скорость ниже 0.1px/ms значит "курсор на элементе"
		interval = 100, // измеряем скорость каждые 100ms: определяем дистанцию между предыдущей и новой позицией.
		elem,
		over,
		out,
	}) {
		this.sensitivity = sensitivity
		this.interval = interval
		this.elem = elem
		this.over = over
		this.out = out

		// убедитесь, что "this" сохраняет своё значение для обработчиков.
		this.onMouseMove = this.onMouseMove.bind(this)
		this.onMouseOver = this.onMouseOver.bind(this)
		this.onMouseOut = this.onMouseOut.bind(this)

		// назначаем обработчики
		elem.addEventListener('mouseover', this.onMouseOver)
		elem.addEventListener('mouseout', this.onMouseOut)
	}

	onMouseOver(event) {
		if (this.isOverElement) return

		this.isOverElement = true

		this.firstX = event.pageX
		this.firstY = event.pageY
		this.firstTime = Date.now()

		elem.addEventListener('mousemove', this.onMouseMove)

		this.speedCalcFunc = this.calcSpeed.bind(this)
		this.timer = setInterval(this.speedCalcFunc, this.interval)
	}

	onMouseOut(event) {
		const relatedTarget = event.relatedTarget

		if (!this.elem.contains(relatedTarget)) {
			this.isOverElement = false
			//this.elem.removeEventListener('mousemove', this.onMouseMove)
			clearInterval(this.timer)
			this.out()
		}
	}

	onMouseMove(event) {
		this.lastX = event.pageX
		this.lastY = event.pageY
		this.lastTime = Date.now()
	}

	calcSpeed() {
		let speed = 0

		const distance = Math.sqrt(
			(this.lastX - this.firstX) ** 2 + (this.lastY - this.firstY) ** 2
		)

		const deltaTime = this.lastTime - this.firstTime

		if (!this.lastTime || !deltaTime) {
			speed = 0
		} else {
			speed = distance / deltaTime
		}

		this.firstX = this.lastX
		this.firstY = this.lastY

		if (speed < this.sensitivity) {
			this.over()
		}
	}

	destroy() {
		this.elem.removeEventListener('mouseover', this.onMouseOver)
		this.elem.removeEventListener('mousemove', this.onMouseMove)
		this.elem.removeEventListener('mouseout', this.onMouseOut)
	}
}
