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
            q:'What will be the output of the program ? <br>#include<br>int main()<br>{    <br>float arr[] = {12.4, 2.3, 4.5, 6.7};<br>printf("%dn", sizeof(arr)/sizeof(arr[0]));<br> return 0;<br>}', 
            options:['5','4','7','8'],
            answer:4,
        },
        {
            q:'What will be the output of the program if the array begins at 65472 and each integer occupies 2 bytes?<br>#include<stdio.h><br>int main()<br>{<br>int a[3][4] = {1, 2, 3, 4, 4, 3, 2, 1, 7, 8, 9, 0};<br> printf("%u, %un", a+1, &a+1);<br>return 0;<br>}', 
            options:['65480,65490','65480,65496','65480,65499','65480,65489'],
            answer:2,
        },
        {
            q:'What does the following declaration mean?<br>int (*ptr)[10];', 
            options:['ptr is array of pointers to 10 integers','ptr is a pointer to an array of 10 integers','ptr is an array of 10 integers','ptr is an pointer to array'],
            answer:1,
        },
        {
            q:'What will be the output of the program if the array begins 1200 in memory?<br>#include<stdio.h><br>int main()<br>{<br>int arr[]={2, 3, 4, 1, 6};<br>printf("%u, %u, %un", arr, &arr[0], &arr);<br>return 0;<br>}', 
            options:['1300,1200,1500','1200,1200,1200','1300,1400,1500','1200,1200,1300'],
            answer:2,
        },
        {
            q:'What will be the output of the program ?<br>#include<stdio.h><br>int main()<br>{<br>void fun(int, int[]);<br>int arr[] = {1, 2, 3, 4};<br>int i;<br>fun(4, arr);<br>for(i=0; i<4; i++)<br>printf("%d,", arr[i]);<br>return 0;<br>}<br>void fun(int n, int arr[])<br>{<br>int *p=0;int i=0;<br>while(i++ < n)<br>p = &arr[i];<br>*p=0;<br>}',
            options:['0.1.2.3','1,2,3,4','1,3,4,5','1,4,5,6'],
            answer:2,
        },
        {
            q:'What will be the output of the program ?<br>#include<stdio.h><br>int main()<br>{<br>int a[5] = {5, 1, 15, 20, 25};<br>int i, j, m;<br>i = ++a[1];<br>j = a[1]++;<br>m = a[i++];<br>printf("%d, %d, %d", i, j, m);<br> return 0;<br>}', 
            options:['6,7,8','4,5,6','3,2,15','2,3,4'],
            answer:3,
        },
        {
            q:'In C, if you pass an array as an argument to a function, what actually gets passed?', 
            options:['Value of elements in array','First element of the array','Base address of the array','Address of the last element of array'],
            answer:3,
        },
        {
            q:'What will happen if in a C program you assign a value to an array element whose subscript exceeds the size of array?', 
            options:['The element will be set to 0.','he compiler would report an error.','The program may crash if some important data gets overwritten','The array size would appropriately grow.'],
            answer:3,
        },
        {
            q:'Which of the following statements are correct about an array?<br>1: The array int num[26]; can store 26 elements.<br>2: The expression num[1] designates the very first element in the array.<br>3: It is necessary to initialize the array at the time of declaration.<br>4: The declaration num[SIZE] is allowed if SIZE is a macro.', 
            options:['1,2','1,4','1,5','1,6'],
            answer:2,
        },
        {
            q:'What will be the output of the program in Turb C (under DOS)?<br>#include<stdio.h><br>int main()<br>{<br>int arr[5],<br>i=0;<br>while(i<5)<br>arr[i]=++i;<br>for(i=0; i<5; i++)<br>printf("%d, ", arr[i]);<br>return 0;<br>}', 
            options:['1,2,3','garbage value 1,2,3,4','1,2,3,4,5','1,4,5'],
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