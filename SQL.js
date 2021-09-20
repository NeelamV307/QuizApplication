// creating an array and passing the number, questions, options, and answers
const quizDB = [
    { 
    question: "Q1) What is the full form of SQL?",
     a: "Structured Query List",
     b: "Structure Query Language",
     c: "Sample Query Language",
     d: "None of the above",
     ans:"ans2"
  },
  


    {
    question: "Q2)  Which of the following is not a valid SQL type?",             
     a: "FLOAT",
     b: "NUMERIC",
     c: "DECIMAL",
     d: "CHARACTER",
    ans:"ans3"
  },
  

    {
    question: "Q3) Which of the following is not a DDL command?",
     a: "TRUNCATE",
     b: "ALTER",
     c: "CREATE",
     d: "UPDATE",
    ans:"ans4"
        
  },
  
    {
     question: "Q4) Which statement is used to delete all rows in a table without having the action logged?",
     a: "DELETE",
     b: "REMOVE",
     c: "DROP",
     d: "TRUNCATE",
     ans:"ans4"      
  },
  
    {
     question: "Q5) How many Primary keys can have in a table?",
     a: 'Only 1',
     b: "Only 2",
     c: "Depends on no of Columns",
     d: "Depends on DBA",
     ans:"ans1"    
  } 
  
  ];
  
const question = document.querySelector('.question'); //for class we use .
const option1 = document.querySelector ('#option1'); //for ids we use #
const option2 = document.querySelector ('#option2');
const option3 = document.querySelector ('#option3');
const option4 = document.querySelector ('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer'); //taking reference from input 
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score=0;

//defing function loadQuestion()
const loadQuestion=()=> {
	
	const questionList = quizDB[questionCount];
	question.innerHTML = questionList.question;
	
	option1.innerHTML = questionList.a;
	option2.innerHTML = questionList.b;
	option3.innerHTML = questionList.c;
	option4.innerHTML = questionList.d;
	
	
}
//calling function loadQuestion()
loadQuestion();

//defing function getCheckAnswer()
const getCheckAnswer=()=> {
	let answer;
	
	answers.forEach((curAnsElem)=> {
	if(curAnsElem.checked){
		answer = curAnsElem.id;
	}
	
	});
	return answer;
};

const deselectAll = () =>{
	answers.forEach((curAnsElem)=> curAnsElem.checked = false);
};
var myWindow;

function openWin() {
  myWindow = window.open("index.html");
  
}

submit.addEventListener('click', ()=>{
	const checkedAnswer = getCheckAnswer(); 
	console.log(checkedAnswer);
	
	if(checkedAnswer== quizDB[questionCount].ans)
	{
	score++;
	};
	questionCount++;
	deselectAll();
	
	if(questionCount<quizDB.length){
		loadQuestion();
		
	}
	else {
		showScore.innerHTML =`
	<h3> Your Score is ${score}/${quizDB.length}</h3>
	<button class="btn" onclick="location.reload()">Play Again</button>
	`;
	showScore.classList.remove('scoreArea');
	}
	
	
});
