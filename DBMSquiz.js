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
            
        }