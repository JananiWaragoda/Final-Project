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
            q:'What will be the output of the program ?#includeint main(){    float arr[] = {12.4, 2.3, 4.5, 6.7};    printf("%dn", sizeof(arr)/sizeof(arr[0]));    return 0;}', 
            options:['5','4','7','8'],
            answer:4,
        },
        {
            q:'What will be the output of the program if the array begins at 65472 and each integer occupies 2 bytes?#include<stdio.h>int main(){    int a[3][4] = {1, 2, 3, 4, 4, 3, 2, 1, 7, 8, 9, 0};    printf("%u, %un", a+1, &a+1);    return 0;}', 
            options:['65480,65490','65480,65496','65480,65499','65480,65489'],
            answer:2,
        },
        {
            q:'What does the following declaration mean?int (*ptr)[10];', 
            options:['ptr is array of pointers to 10 integers','ptr is a pointer to an array of 10 integers','ptr is an array of 10 integers','ptr is an pointer to array'],
            answer:1,
        },
        {
            q:'What will be the output of the program if the array begins 1200 in memory?#include<stdio.h>int main(){    int arr[]={2, 3, 4, 1, 6};    printf("%u, %u, %un", arr, &arr[0], &arr);    return 0;}', 
            options:['1300,1200,1500','1200,1200,1200','1300,1400,1500','1200,1200,1300'],
            answer:2,
        },
        {
            q:'What will be the output of the program ?#include<stdio.h>int main(){    void fun(int, int[]);    int arr[] = {1, 2, 3, 4};    int i;    fun(4, arr);    for(i=0; i<4; i++)        printf("%d,", arr[i]);    return 0;}void fun(int n, int arr[]){    int *p=0;    int i=0;    while(i++ < n)        p = &arr[i];    *p=0;}',
            options:['0.1.2.3','1,2,3,4','1,3,4,5','1,4,5,6'],
            answer:2,
        },
        {
            q:'What will be the output of the program ?#include<stdio.h>int main(){    int a[5] = {5, 1, 15, 20, 25};    int i, j, m;    i = ++a[1];    j = a[1]++;    m = a[i++];    printf("%d, %d, %d", i, j, m);    return 0;}', 
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
            q:'Which of the following statements are correct about an array?1: The array int num[26]; can store 26 elements.2: The expression num[1] designates the very first element in the array.3: It is necessary to initialize the array at the time of declaration.4: The declaration num[SIZE] is allowed if SIZE is a macro.', 
            options:['1,2','1,4','1,5','1,6'],
            answer:2,
        },
        {
            q:'What will be the output of the program in Turb C (under DOS)?#include<stdio.h>int main(){    int arr[5], i=0;    while(i<5)        arr[i]=++i;    for(i=0; i<5; i++)        printf("%d, ", arr[i]);    return 0;}', 
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