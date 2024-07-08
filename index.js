const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions , currentQuestionIndex



startButton.addEventListener('click',startGame)
nextButton.addEventListener('click' , () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - 0.5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion(){
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct){
        button.dataset.correct =answer.correct
    }
    button.addEventListener('click' ,selectAnswer)
   answerButtonsElement.appendChild(button)

})
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body ,correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button , button.dataset.correct)
    })
    if(shuffledQuestions.length >  currentQuestionIndex +1){
        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }


}
function setStatusClass(element , correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }

}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'What is the name of Nobita\'s robotic cat from the future?',
        answers: [
            { text: 'Doraemon', correct: true },
            { text: 'Dorami', correct: false }
        ]
    },
    {
        question: 'What is Nobita\'s favorite pastime?',
        answers: [
            { text: 'Sleeping', correct: true },
            { text: 'Studying', correct: false }
        ]
    },
    {
        question: 'Which gadget allows Nobita to fly?',
        answers: [
            { text: 'Bamboo Copter', correct: true },
            { text: 'Time Machine', correct: false }
        ]
    },
    {
        question: 'Who is Nobita\'s best friend?',
        answers: [
            { text: 'Shizuka', correct: false },
            { text: 'Doraemon', correct: true }
        ]
    },
    {
        question: 'Who is Nobita\'s rival and sometimes bully?',
        answers: [
            { text: 'Gian', correct: true },
            { text: 'Suneo', correct: false }
        ]
    },
    {
        question: 'What is the color of Doraemon\'s body?',
        answers: [
            { text: 'Blue', correct: true },
            { text: 'Red', correct: false }
        ]
    },
    {
        question: 'What is Doraemon afraid of?',
        answers: [
            { text: 'Mice', correct: true },
            { text: 'Dogs', correct: false }
        ]
    },
    {
        question: 'Which character loves to sing but is very bad at it?',
        answers: [
            { text: 'Gian', correct: true },
            { text: 'Suneo', correct: false }
        ]
    },
    {
        question: 'Who is Doraemon\'s sister?',
        answers: [
            { text: 'Dorami', correct: true },
            { text: 'Shizuka', correct: false }
        ]
    },
    {
        question: 'What is the magical pocket called that Doraemon uses to store his gadgets?',
        answers: [
            { text: '4D Pocket', correct: true },
            { text: 'Magic Bag', correct: false }
        ]
    }

]

