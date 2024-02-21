
/*
//function expression
let expression=function(x,y){
    let sum=x+y;
    return sum;
}
let reasult=expression(5,6);
console.log(reasult);
//arrow function
var square= (x) =>{
    let value=x*x;
    return value;

}
let value =square(5);
console.log(value);
let  myReasult=expression(7,6);
console.log(myReasult);
//
 let tony={
    name:'stark',
    title:'billineor'

 }
 var heyTony=Object.keys(tony);
 var hiTony =Object.values(tony);
 console.log(heyTony,hiTony);
 //
 function celcToFaren(C){
     let Fareen=((C*9)/5)+32;
     return Fareen

 }
 let farenValue= celcToFaren(41);
 console.log(farenValue);
 //
 function myMarks(marks){
    if(marks>=90){
        console.log('A+');
    }
    else if(marks>=80){
    console.log('A');
    }
    else if(marks>=70){
        console.log('B+');

    }else{
        console.log('fail');
    }

 }
 let givValue=myMarks(88);

 //
 function Bank(moye){
    let get=moye*(5/100);
    console.log(get);
    let tooMuch=moye+get;
    return tooMuch;
 }
 let thor= Bank(678);
 console.log('total: ', thor);
 //
 //
 function bar(){
    console.log('bar')
 }
function foo(){
    console.log('foo');
    bar();
}
foo();
*/

/*
//part-2
const name1='dkfh;';
var heisAmazing=true;
let number1=66;
console.log(name1,number1,heisAmazing);
//
const name2='kopaSamsu';
let number2=67;
number2=87;
console.log(name2,number2);
//
var x1=55;
var y1=55;
var reasult=(x1+y1);
console.log(reasult);
//
var a=65;
var b=74;

if(a>b){
    console.log("i am bigger",a)
}
else{
    console.log('he is bigger',b)
}
//
var i=7;
while(i<=19){
    if(i % 2 !== 0){
        console.log(i)

    }
    i++;

}
//
var arr=[45,75,543,3566];
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
//
var array=[64,97,65,43,88,86,44,3,2,455,754,3,5,7];
for(let i=0;i<=array.length;i++){
    if(array[i]>80){
        console.log( array[i])

    }
}
console.log("::::::::::::::: siuuuu ::::::::::::::::")
//
var  emotion=[56,74,354,78,86,43,21,6];
let out=emotion.pop(8);
emotion[3]=99;
let repp=emotion[6]+emotion[7];
console.log(emotion.length,emotion,repp,out);
//
var obee={
    name6:'kallooo',
    age:645,
    feminest:'yes'
}
 obee.feminest='gooo';
console.log( obee);

*/
//
 function CentimeterToMeter(cent){
    var meter=cent*100;
    return meter;
 }
 var reasult=CentimeterToMeter(5);
 console.log(reasult);
 //
 var numbers=[45,75,32,34,0,8,-5,76,978,-7,-2,3];
 for(let i=0;i<=numbers.length;i++){
    if(numbers[i]<0){

        break;
    }
    let number=[(numbers[i])];

    console.log(number);

 }
 //
 function BestFriend(best){
    let max=best[0];
    for(let i=0;i<=best.length;i++){
        if(max<best[i]){
            console.log(best[i])
        }
        else{
            console.log(max)
        }
    }

 }
 var friend= BestFriend(['jodu','modu','kodu','kudduss','apel','komola']) ;
 

