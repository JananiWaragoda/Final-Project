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
            q:'HTML stands for?', 
            options:['Hyper Text Markup Language','High Text Markup Language','Hyper Tabular Markup Language','None of these'],
            answer:1,
        },
        {
            q:'HTML is what type of language?', 
            options:['Scripting Language','Markup Language','Programming Language','Network Protocol'],
            answer:2,
        },
        {
            q:'HTML uses?', 
            options:['User defined tags','Pre-specified tags','Fixed tags defined by the language','Tags only for linking'],
            answer:3,
        },
        {
            q:'The year in which HTML was first proposed _______.', 
            options:['1990','1980','2000','1995'],
            answer:1,
        },
        {
            q:'Fundamental HTML Block is known as ___________.', 
            options:['HTML Body','HTML Tag','HTML Attribute','HTML Element'],
            answer:2,
        },
        {
            q:'Apart from <b> tag, what other tag makes text bold ?', 
            options:['<fat>','<strong>','<black>','<emp>'],
            answer:1,
        },
        {
            q:'What is the full form of HTML?', 
            options:['HyperText Markup Language','Hyper Teach Markup Language','Hyper Tech Markup Language','None of these'],
            answer:1,
        },
        {
            q:'Who is Known as the father of World Wide Web (WWW)?', 
            options:['Robert Cailliau','Tim Thompson','Charles Darwin','Tim Berners-Lee'],
            answer:4,
        },
        {
            q:'What should be the first tag in any HTML document?', 
            options:['<head>','<title>','<html>','<document>'],
            answer:3,
        },
        {
            q:'How can you make a bulleted list with numbers?', 
            options:['<dl>','<ol>','<list>','<ul>'],
            answer:2,
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

        check:function(ele){
           
                 var id=ele.id.split('');
                 
                 if(id[id.length-1]==this.questions[this.index].answer){
                     this.score++;
                     ele.className="correct";
                     ele.innerHTML="Correct";
                     this.scoreCard();
                 }
                 else{
                     ele.className="Incorrect";
                     ele.innerHTML="Incorrect";
                 }

        },

        notClickAble:function(){
            for(let i=0;i<ul.children.length;i++){
                    ul.children[i].style.pointerEvents="none";
            }
     },

        clickAble:function(){
            for(let i=0;i<ul.children.length;i++){
                    ul.children[i].style.pointerEvents="auto";
                    ul.children[i].className=''

            }
     },

     score:0,
     scoreCard:function(){
         scoreCard.innerHTML=this.score+"/"+this.questions.length;
     }

}

window.onload=app.load();

            function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

            function  next(){
              app.next();
              app.clickAble();
 } 


