let choicesEl = document.querySelector("#choices")
let questions = [{question: "", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 3},
{question: "", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2}
]


let currentQuestion = 0;


choicesEl.addEventListener("click", function(event){

if(event.target.matches("button")){
console.log(event.target.getAttribute("data-index"))
 }
})