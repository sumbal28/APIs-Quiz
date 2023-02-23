let choicesEl = document.querySelector("#choices")
let questions = [{question: "Ask good question?", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 3},
{question: "question 2, 👋 Everyone", answers:["ex1-2", "ex2-2", "ex3-2", "ex4-2"], correctAnswer: 2}
]


let currentQuestion = 0;



 /*document.querySelector("#question-title").textContent = questions[0].question
 console.log(questions[0].answers[0])
 console.log(questions[0].answers[1])
 console.log(questions[0].answers[2])
 console.log(questions[0].answers[3])*/


document.querySelector("#question-title").textContent = questions[1].question

console.log(questions[currentQuestion].answers[0])
console.log(questions[currentQuestion].answers[1])
console.log(questions[currentQuestion].answers[2])
console.log(questions[currentQuestion].answers[3])





choicesEl.addEventListener("click", function(event){

if(event.target.matches("button")){
console.log(event.target.getAttribute("data-index"))
 }
})
