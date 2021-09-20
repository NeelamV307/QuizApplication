// creating an array and passing the number, questions, options, and answers
const quizDB = [
    { 
    question: "Q1) What does HTML stand for?",
     a: "Hyper Text Preprocessor",
     b: "Hyper Text Markup Language",
     c: "Hyper Text Multiple Language",
     d: "Hyper Tool Multi Language",
     ans:"ans2"
  },
  
    {
    question: "Q2) Which of the following element is responsible for making the text italic in HTML?",             
     a: "i tag",
     b: "italic tag",
     c: "it tag",
     d: "pre tag",
    ans:"ans1"
  },
  

    {
    question: "Q3) The correct sequence of HTML tags for starting a webpage is -",
     a: "Head, Title, HTML, body",
     b: "HTML, Body, Title, Head",
     c: "HTML, Title, Head, Body",
     d: "HTML, Head, Title, Body",
    ans:"ans4"
        
  },
  
    {
     question: "Q4) Which of the following element is responsible for making the text bold in HTML?",
     a: "pre tag",
     b: "a tag",
     c: "b tag",
     d: "br tag",
     ans:"ans3"      
  },
  
    {
     question: "Q5) Which of the following tag is used for inserting the largest heading in HTML?",
     a: 'h3 tag',
     b: "h1 tag",
     c: "h5 tag",
     d: "h6 tag",
     ans:"ans2"    
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


