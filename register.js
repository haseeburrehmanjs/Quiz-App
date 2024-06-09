// PASSWORD VISIBILITY FUNCTION
function myInput() {
    let x = document.querySelector('#password')
    if (x.type === 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
}

// GET HTML ELEMENT IN JAVASCRIPT
let fullName = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let form = document.querySelector('form')

// GET REGISTER DATA FORM LOCAL STORAGE
let getData = JSON.parse(localStorage.getItem('sendLocal'))
console.log(getData)

// EMAIL PASSWORD REGEX VALIDATION
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,15}$/;

// USER DATA STORE
let userRegister = []
let localData;

// SEND REGISTER DATA LOCALSTORAGE
let pushData = () => {
    localData = localStorage.setItem('sendLocal', JSON.stringify(userRegister))
}

// REGISTOR DATA CONTROL
form.addEventListener('submit', event => {
    event.preventDefault()
    if (emailRegex.test(email.value) && passwordRegex.test(password.value)) {
        userRegister.push({
            name: fullName.value,
            password: password.value,
            email: email.value
        })
        console.log(userRegister);
        pushData()
        alert('Register succesfull')
        // window.location = 'index.html'
    }else {
        alert('Password 8 and 15 characters, including at least one special character, one number, and one uppercase letter:')
    }
})





































// if (emailRegex.test(email.value) && passwordRegex.test(password.value)) {
//     userRegister.push({
//         name: fullName.value,
//         password: password.value,
//         email: email.value
//     })
//     console.log(userRegister);
//     pushData()
//     alert('Register succesfull')
//     // window.location = 'index.html'
// }else if(getData.map(item => {
//     return item.email === email.value
// })){
//     alert('this is email is already register')
// }else {
//     alert('Password 8 and 15 characters, including at least one special character, one number, and one uppercase letter:')
// }