//function declaration1
 
function startType(){
    console.log('stand up');
    console.log('walk to the swithc');
    console.log('press the switch');
    console.log('akhon aisha ghuma');
}
//calling function
startType();
startType();
startType();
 
//fucntion declaration 2
 
function startSingara(mama){
    console.log("mama singara den");
    console.log(mama);
}
startSingara(1); 
//Function 3 using parameter
 
function bringWater(mama){
    console.log("vai ai ne apnr ",mama);
    console.log("ai nen pani");
}
var taka=200;
bringWater(taka); 
// use akhadik perameter
 
function  add(number1,number2){
    console.log("going to add ",number1,number2);
}
add(34,56); 
 
function sum(a,b,c,d,e){
    console.log(a,b,c,d,e);
    var sum=a+b+c+d+e;
    console.log(sum);
}
sum(4, 6, 8, 4, 3, 2); 
//using return
 
function myNumber(num1,num2){
    console.log(num1,num2);
    var sum=num1+num2;
    return sum;
    return 12;
}
var total = myNumber(30,40);
console.log('total',total) 
// problem sollution by function

function bringSingara(money){
    var singaraPrice=10;
    var sigaraQuantity=money/singaraPrice;
    return sigaraQuantity;
}
var myTaka=500;
var totalSingara=bringSingara(myTaka);
console.log(totalSingara); 
 
function pitha(money){
    var pithaQuantity=10;
    var totalPithaPrice=pithaQuantity*money;
    return totalPithaPrice;
}
var taka=244;
var price=pitha(taka);
console.log(price);
 
//

function getTotal(assaignment1,assaignment2,assaignment3){
    var total=assaignment1+assaignment2+assaignment3;
    var avg=total/3;
    return avg;
}
var assaignment1=34;
var assaignment2=54;
var assaignment3=78;

var myAvg=getTotal(assaignment1,assaignment2,assaignment3);
console.log(myAvg); 
//

function add(num1,num2){
    var sum=num1+num2;
    return sum;

}
var reasult1=add(5,6);
var reasult2=add(7,8);
var totalReasult=add(reasult1,reasult2);
console.log(totalReasult); 
