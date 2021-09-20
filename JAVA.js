// creating an array and passing the number, questions, options, and answers
const quizDB = [
    { 
    question: "Q1) Which of the following option leads to the portability and security of Java?",
     a: "Bytecode is executed by JVM",
     b: "The applet makes the Java code secure and portable",
     c: "Use of exception handling",
     d: "Dynamic binding between objects",
     ans:"ans1"
  },
  
    {
    question: "Q2) Which of the following is not a Java features?",             
     a: "Dynamic",
     b: "Architecture Neutral",
     c: "Use of pointers",
     d: "Object-oriented",
    ans:"ans3"
  },
  

    {
    question: "Q3)  _____ is used to find and fix bugs in the Java programs.",
     a: "JVM",
     b: "JRE",
     c: "JDK",
     d: "JDB",
    ans:"ans4"
        
  },
  
    {
     question: "Q4) What is the return type of the hashCode() method in the Object class?",
     a: "Object",
     b: "int",
     c: "long",
     d: "void",
     ans:"ans2"      
  },
  
    {
     question: "Q5)  Evaluate the following Java expression, if x=3, y=5, and z=10: ++z + y - y + z + x++",
     a: '24',
     b: "23",
     c: "20",
     d: "25",
     ans:"ans4"    
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
