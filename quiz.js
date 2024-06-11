// GET HTML ELEMENT IN JAVASCRIPT
let div = document.querySelector('.question')
let nextBtn = document.querySelector('#nextBtn')
let ul = document.querySelector('.main-ul')
let index = 0
let questions = [] // Initialize an empty array to store the questions

// SUFFLE ARRAY 
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


// RENDER ITEM ON QUIZ.HTML
let renderQuestion = (arr) => {
    div.innerHTML = ''
    let answer = [
        ...arr[index].incorrectAnswers, arr[index].correctAnswer
    ]
    console.log(answer);
    div.innerHTML += `
      <h3>Q${index + 1}: ${arr[index].question.text}</h3>
      `;
      ul.innerHTML = `
      ${shuffleArray(answer).map(
        (items) => `
        <li>
        <input type="radio" name="choice" class="choice" id=${items} value=${items}><label for=${items}> ${items}</label>
        </li>`
      )}
      `
}

// NEXT BUTTON
nextBtn.addEventListener("click", () => {
    if (index < questions.length - 1) {
        index += 1
        renderQuestion(questions)
    } else {
        alert('Go to Result')
        window.location= 'result.html'
    }
})

// API CALL DATA 
axios("https://the-trivia-api.com/v2/questions")
    .then(response => {
        questions = response.data // Store the fetched questions in the questions array
        renderQuestion(questions) // Render the first question
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })

















