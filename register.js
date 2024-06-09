// GET HTML ELEMENT IN JAVASCRIPT
let fullName = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')

// USER DATA STORE
let UserRegister = []

// REGISTOR DATA CONTROL
form.addEventListener('submit', event => {
    event.preventDefault()
    UserRegister.push({
        name : fullName.value,
        password : password.value,
        email : email.value
    })
    console.log(UserRegister);
    localStorage.setItem('sendLocal' , JSON.stringify(UserRegister))
})
