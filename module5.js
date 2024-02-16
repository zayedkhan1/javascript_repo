// variable
//math operation
//shorthand method
//Array
// conditional operator
//loops
//function
//object
//inch to feet in js
//
/* 
const Inches=12;
const Feet= Inches/12;
console.log(Feet);

const dadaInch=144;
const dadaFeet=dadaInch/12;
console.log(dadaFeet);

const dadiInches=60;
const dadiFeet=dadiInches/12;
console.log(dadiFeet);
 */
//inches to feet conversiton using function
/* 
function convertClaculator(inches){
    const feet=inches/12;
    return feet;
}
const myInches=564;
const myFeet=convertClaculator(myInches);
console.log(myFeet); */
// mile to km conversiton using function
/* 
function mileToKm(kilometer){
    const mile=kilometer/0.621371;
    return mile;
}
const atalpurToKanchan=6.5;
const calculateMile=mileToKm(atalpurToKanchan);
const gawsiaToPaiska=10;
const calculateGawsiaMile=mileToKm(gawsiaToPaiska);
console.log(calculateMile,calculateGawsiaMile); */
//  kg to gram conversiton using function
/* 
function kgToGram(kg){
    const gram=kg*1000;
    return gram;

}
const myPotatoInKg=5;
const myPotatoInGram=kgToGram(myPotatoInKg);
console.log(myPotatoInGram);
    */
// odd even by using function
/* 
function evenOrOdd(number){
    if(number % 2==0){
        return true;
    }else{
        return false;
    }
}
 const value = evenOrOdd(88);
console.log(' is this a even nmber: ',    value);
 */
//leap year or not usnig function
/* 
function isLeapYear(year){
    if(year % 4 == 0){
return true;    }
    else{
 return false;             }
}
const value= isLeapYear(2024);
console.log( 'is leap year :', value)
 */
//find sum from array
/* 
function getSum(array){
    let sum=0;
    for(let i=0; i<array.length;i++){
        sum+=array[i];
        console.log( i,array[i],sum);

    }
    return sum;
}
const myArray=[34,56,76,55,44,33,31,99];
getSum(myArray)
 */
//
/* 
function getMySum(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
        console.log(array[i],sum)
    }
    return sum;

}
let arrayValue=[34,64,65,64,32];
getMySum(arrayValue);
  */
//get odd numbers of an array
/* 
function getOddNumbersOfArray(numbers){
  
    let oddNumbers=[];
    for(let i=0;i<numbers.length;i++){

    
        if(numbers[i] % 2 !=0){
            console.log(i,numbers[i]);
            oddNumbers.push(numbers[i]);

        }
    }
    return oddNumbers;  
}
let myNumbers=[32,11,31,23,45,66,77,88,86];
 let oddNumbers= getOddNumbersOfArray(myNumbers);
 console.log(oddNumbers);
  */
 //claculation multiplication
/* 
 function sumOfNumbers(number){
    let mul=1;
 for(i=1;i<=number;i++){
    mul=mul*i;
    console.log(i,mul)

 }
 return mul;
 
 }
 sumOfNumbers(6); */
//calculation factorial 5!
/* 
function factorial(number){
    mul=1;
    for(let i=1;i<=number;i++){
        mul*=i;
        console.log(i,mul)
    }
    return mul;
}
factorial(5); */
//factorial in reversre way
/* 
function factorial(number){
    let reasult=1;
    for( let i=number;i>=1;i--){
        reasult*=i;
        console.log(i);
    }
    return reasult;
}
let number=6;
 let fact= factorial(number);
 console.log( 'factorial of : ',number, '-is :', fact) */
//degabbing 
/* 
function getFactorial(number){
    let factorial=1;
    for (let i=1;i<=7;i++){
        factorial=factorial*i;
    }
    return factorial;
}
const factorial =getFactorial(7);
console.log( factorial) */
