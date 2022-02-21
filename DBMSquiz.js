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
            q:'What do you mean by one to many relationship between Teacher and Class table?', 
            options:['One class may have many teachers','One teacher can have many classes','Many classes may have many teachers','Many teachers may have many classes'],
            answer:2,
        },
        {
            q:'What are the different view to present a Table ?', 
            options:['Datasheet View','Design View','Pivote TableView','All Of Above'],
            answer:4,
        },
        {
            q:'Which name must be unique within a database ?', 
            options:['Table','Field','Records','Character'],
            answer:1,
        },
        {
            q:'In which state one gathers and list all the necessary fields for the database design project.', 
            options:['Data Definition','Data Refinement','C.Establishing Relationship','None Of The Above'],
            answer:1,
        },
        {
            q:'Which of the following enables us to view data from a table based on a specific criterion', 
            options:['Form','Query','Macro','Report'],
            answer:2,
        },
        
        {
            q:'Which database object is ideal to view, change, andanalyze datain different ways ?', 
            options:['Table','Form','Query','Report'],
            answer:3,
        },
        {
            q:'In one-to-many relationship the table in one side is called _______', 
            options:['Child','Owner','Parent','Entity'],
            answer:3,
        },
        {
            q:'Which data type allows alphanumeric characters and special symbols to be entered?', 
            options:['Text','Memo','Auto Number','Mixed'],
            answer:1,
        },
        {
            q:'It is used to establish an association between related tables.', 
            options:['Line','Relationship','Primary Key','Records'],
            answer:2,
        },
        {
            q:'This key that uniquely identifies each record is called ', 
            options:['Primary Key','Key Record','Unique Key','Field Name'],
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
         }
         
