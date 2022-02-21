var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');

var app={
    questions:[
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
        {
            q:'', 
            options:['','','',''],
            answer:1,
        },
    ],

    index:0,

    load:function(){
        if(this.index<=this.questions.length-1){
                    quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                    op1.innerHTML=this.questions[this.index].options[0];
                    op2.innerHTML=this.questions[this.index].options[1];
                    op3.innerHTML=this.questions[this.index].options[2];
                    op4.innerHTML=this.questions[this.index].options[3];
                
                       this.scoreCard();
                    }
                    else{

                    quizBox.innerHTML="Quiz is Over!!!"      
                    op1.style.display="none";
                    op2.style.display="none";
                    op3.style.display="none";
                    op4.style.display="none";
                    btn.style.display="none";
                    }
     },

        next:function(){
        this.index++;
        this.load();
     },
