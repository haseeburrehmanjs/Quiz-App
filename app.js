// API LINK 
"https://the-trivia-api.com/v2/questions"

// PASSWORD VISIBILITY FUNCTION
function myInput(){
    let x = document.querySelector('#password')
    if(x.type === 'password'){
        x.type = 'text'
    }else {
        x.type = 'password'
    }
}

// GET HTML ELEMENT IN JAVASCRIPT
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')

// GET REGISRER DATA FROM LOCAL STORAGE
let getLocal = JSON.parse(localStorage.getItem('sendLocal'))
console.log(getLocal);

form.addEventListener('submit', event=> {
    event.preventDefault()
})