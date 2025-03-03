const popUp = document.querySelector('.popup-container');
const popup = document.querySelector('.popup')
const cross = document.querySelector('.cross');
const button = document.querySelector('button');
const submit = document.querySelector('.subscribe')
const email = document.querySelector('.emailid')

button.addEventListener('click',()=>{
    popUp.classList.add('popup-open')
    // popUp.style.display = 'block'
})

cross.addEventListener('click',()=>{
    popUp.classList.remove('popup-open')
})

submit.addEventListener('click',()=>{
    if(typeof email.value === 'string' && email.value !== ''){
        popUp.classList.remove('popup-open')
    }
    
})

popup.addEventListener('click', (e) => {
    e.stopPropagation()
})

popUp.addEventListener('click', () => {
    popUp.classList.remove('popup-open')
    // popUp.classList.remove('popup-open')
})