const increase = document.querySelector(".more")
const decrease = document.querySelector(".less")
const inpt = document.querySelector("input")
const number = document.querySelector('p')
const title = document.querySelector('h2')
const submit = document.querySelector(".submit")

submit.innerHTML = 'Reset'

let randomNumber = Math.floor(Math.random() * 101)
i = 0
let game = () => {
    if (inpt.value == parseInt(inpt.value)) {
        title.innerText = `You left only ${6 - i} try`
    }
    if (inpt.value != randomNumber) {
        const heartsC = document.querySelector('.img-c');
        const hearts = heartsC.querySelectorAll('img');
    
        if (hearts.length > 0) {
            heartsC.removeChild(hearts[hearts.length - 1]);
        }
    }
    if (inpt.value < randomNumber) {
        increase.classList.add('borderAfter')
        setTimeout(() => { increase.classList.remove('borderAfter') }, 1500);
    }
    else if (inpt.value > randomNumber) {
        decrease.classList.add('borderAfter')
        setTimeout(() => { decrease.classList.remove('borderAfter') }, 1500);
    }
    else if (inpt.value == randomNumber) {
        title.innerText = 'You won'
        number.innerText = `Random number is ${randomNumber}`
        return 0   
    }
    if (i === 6) {
        title.innerText = 'You lost'
        number.innerText = `Random number is ${randomNumber}`
        return 0
    }
    i++
}
inpt.addEventListener('keyup', (e) => {
    if (e.code === "Enter") {
        game()
    }
})