var start_btn = document.querySelector(".start_quiz");
var quiz_box = document.querySelector(".quiz_box");
var que_text = quiz_box.querySelector(".que_text");
var options_box = quiz_box.querySelector(".options");
var next_btn = document.querySelector(".next-btn");
var total_q = document.querySelector(".quiz_footer .total_que");
var count_que = document.querySelector(".quiz_footer .count_que");
var result_box = document.querySelector(".result_box");

var total_que_r= document.querySelector(".total-que span");
var right_ans_r= document.querySelector(".right-ans span");
var wrong_ans_r= document.querySelector(".wrong-ans span");
var percentage = document.querySelector(".percentage span");

var again_quiz = document.querySelector(" .result_footer .again_quiz");
var exit = document.querySelector(".result_footer .exit");


var mark_wrong ='<i class="fa-solid fa-check"></i>';
var mark_check = '<i class="fa-solid fa-xmark"></i>';



 start_btn.onclick =()=>{
    quiz_box.classList.remove("inactive");
    start_btn.classList.add("inactive");

 }

 total_q.innerText = questions.length;
 total_que_r.innerText = questions.length;
 

var que_index = 0;
var right_answers = 0;
var wrong_answers =0;
count_que.innerText = que_index+1;
showquestion(que_index);

function showquestion(q_index){
    que_text.innerText = questions[q_index].num+". "+ questions[q_index].question;
       var option_statement = "";
         for( var i=0; i<questions[q_index].options.length; i++){
            option_statement += `<div class="option">${questions[q_index].options[i]}</div>`;
        }
       
       options_box.innerHTML = option_statement;

       var AllOptions = options_box.querySelectorAll(".option");

       for(var i=0; i<AllOptions.length; i++){
         AllOptions[i].setAttribute("onclick","UserAnswer(this)")
       }
       next_btn.classList.add("inactive");
}


next_btn.onclick=()=>{
   que_index++;
   if(questions.length>que_index){
      count_que.innerText = que_index+1;
        showquestion(que_index);


    }else{
        console.log("Complete Questions");
        quiz_box.classList.add("inactive");
        result_box.classList.remove("inactive");
        right_ans_r.innerText = right_answers;
        wrong_ans_r.innerText = wrong_answers;
        percentage.innerText = ((right_answers*100)/questions.length).toFixed(2)+"%";
 }
 if(questions.length-1==que_index){
   next_btn.innerText = "finish";
 }
}
 function UserAnswer(answer){    
     var userAns = answer.innerText;
     var correctAns = questions[que_index].answer;
     var AllOptions2 = options_box.querySelectorAll(".option");


next_btn.classList.remove("inactive");
  if(userAns === correctAns){
       console.log("%c right answer","color:green");
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend",mark_wrong);
       
  }else{
        console.log("%c wrong answer","color:red");
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend",mark_check);
        right_answers++;

        for(var i=0; i<AllOptions2.length; i++){
        if(AllOptions2[i].innerText==correctAns){
         AllOptions2[i].classList.add("corect");
         AllOptions2[i].insertAdjacentHTML("beforeend",mark_wrong);
         wrong_answers++;
        }

        }
   }
   

   for(var i=0; i<AllOptions2.length; i++){
      AllOptions2[i].classList.add("disabled");
   }
     }

     again_quiz.onclick=()=>{
      quiz_box.classList.remove("inactive");
      result_box.classList.add("inactive");

      reset();
     }

     exit.onclick=()=>{
      start_btn.classList.remove("inactive");
      result_box.classList.add("inactive");

      reset();

     }

     function reset(){
      que_index = 0;
      right_answers = 0;
      wrong_answers = 0;
      count_que.innerText = que_index+1;
      showquestion(que_index);
     }