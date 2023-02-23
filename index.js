let choicesEl = document.querySelector("#choices")
let questions = [{question: "ask good question", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 3},
{question: "", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2}
]


let currentQuestion = 0;


document.querySelector("#question-title").textContent = questions[0].question





choicesEl.addEventListener("click", function(event){

if(event.target.matches("button")){
console.log(event.target.getAttribute("data-index"))
 }
})
alert("hello");