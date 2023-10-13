// Navigation
const nav = document.querySelector('.nav')
const navBurger = nav.querySelector('.nav__burger')
const navItems = nav.querySelector('.nav__items')

const toggleNav = () => {
	nav.classList.toggle('nav--active')
	navBurger.classList.toggle('nav__burger--active')
}

const hideNav = () => {
	navBurger.classList.remove('nav__burger--active')
	nav.classList.remove('nav--active')
}

navBurger.addEventListener('click', toggleNav)
navItems.addEventListener('click', hideNav)
// End of Navigation

// Contact input validation
const submitInput = document.querySelector('.contact__input')
const submitBtn = document.querySelector('.btn--submit')
const errorText = document.querySelector('.contact__error')

const checkInput = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (submitInput.value == '') {
		showError(`Input can't be blank!`)
	} else if (re.test(submitInput.value)) {
		sendInput()
	} else {
		showError(`Email address is invalid!`)
	}
}

const showError = errorMsg => {
	submitInput.classList.remove('contact__input-success')
	errorText.classList.remove('contact__error--disabled')
	submitInput.classList.add('contact__input-error')
	errorText.classList.add('contact__error--active')
	errorText.innerHTML = `<img class="contact__error-img" src="./img/icons/warning.svg" alt=""> ${errorMsg}`
}

const sendInput = () => {
	submitInput.classList.remove('contact__input-error')
	errorText.classList.remove('contact__error--active')
	errorText.classList.add('contact__error--disabled')
	submitInput.classList.add('contact__input-success')
	errorText.innerHTML = `<img class="contact__error-img" src="./img/icons/success.svg" alt=""> You signed up correctly!`
}

submitBtn.addEventListener('click', checkInput)
// End of Contact input validation

// Footer year
const footerYear = document.querySelector('.footer__year')
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
// End of Footer year

// Statistics
const elements = document.querySelectorAll('.statistics__card-percent')
const targetValues = [50, 30, 90]
const initialIntervals = [100, 200, 150]
const stepValues = 1
const accelerations = [0.95, 0.92, 0.94]

elements.forEach((element, index) => {
	let currentValue = 0
	let interval = initialIntervals[index]
	const targetValue = targetValues[index]
	const stepValue = stepValues
	const acceleration = accelerations[index]

	function animate() {
		currentValue += stepValue
		element.textContent = currentValue + '%'

		if (currentValue < targetValue) {
			if (currentValue < targetValue / 2) {
				interval *= acceleration
			} else {
				interval /= acceleration
			}
			interval = Math.max(interval, 10)
			setTimeout(animate, interval)
		}
	}
	animate()
})
// End of Statistics
