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