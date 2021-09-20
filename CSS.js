// creating an array and passing the number, questions, options, and answers
const quizDB = [
    { 
    question: "Q1) What does CSS stand for?",
     a: "Cascade style sheets",
     b: "Color and style sheets",
     c: "Cascading style sheets",
     d: "None of the above",
     ans:"ans3"
  },
  


    {
    question: "Q2)  The property in CSS used to change the background color of an element is -",             
     a: "bgcolor",
     b: "color",
     c: "background-color",
     d: "All of the above",
    ans:"ans3"
  },
  

    {
    question: "Q3) The CSS property used to control the element's font-size is  -",
     a: "text-style",
     b: "font-size",
     c: "text-size",
     d: "None of the above",
    ans:"ans2"
        
  },
  
    {
     question: "Q4) Which of the HTML attribute used to define the internal stylesheet is?",
     a: "style tag",
     b: "link tag",
     c: "b tag",
     d: "script tag",
     ans:"ans1"      
  },
  
    {
     question: "Q5) Which  CSS property used to specify the transparency of an element is?",
     a: 'opacity',
     b: "filter",
     c: "visibility",
     d: "overlay",
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

