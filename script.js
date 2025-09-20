
const buttonTop = document.querySelector('#button-top')
const buttonModeLight = document.querySelector('#button-mode')
const body = document.body

    

function scrolando() {
    

    if (window.scrollY > 300) {
        buttonTop.classList.remove('hidden')
        
    } if (window.scrollY <= 300) {
        buttonTop.classList.add('hidden')
    }
}
    window.addEventListener('scroll', scrolando)


function backTop(){
    window.scrollTo({ top: 0, behavior: 'smooth'})

}
buttonTop.addEventListener('click', backTop)



function modeLight(){
    body.classList.toggle('light-mode')
    if (body.classList.contains('light-mode')) {
        buttonModeLight.innerHTML = '☀️'
    } else {
        buttonModeLight.innerHTML = '🌙'
    }
}

buttonModeLight.addEventListener('click', modeLight)