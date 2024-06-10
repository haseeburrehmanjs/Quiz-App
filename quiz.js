// GET HTML ELEMENT IN JAVASCRIPT
let div = document.querySelector('.question')
let nextBtn = document.querySelector('#nextBtn')
let index = 0
let question = []

let renderArray = array => {
    if (index < question.length) {
        let questionArray = array.data
        console.log(questionArray);
        div.innerHTML = `
        <h1>${questionArray[index].question.text}</h1>
        `
    } else {
        console.log('Question Complete');
    }

}

axios("https://the-trivia-api.com/v2/questions")
    .then(responce => {
        renderArray(responce)
        console.log(responce);
    })
    .catch(error => {
        console.log(error);
    })

// NEXT BUTTON
nextBtn.addEventListener('click', () => {
    index += 1
    renderArray(question)
})