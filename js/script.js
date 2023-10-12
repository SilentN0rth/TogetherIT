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

// Footer year
const footerYear = document.querySelector('.footer__year')
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
// End of Footer year
