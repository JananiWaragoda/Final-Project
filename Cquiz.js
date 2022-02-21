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
       
    ],