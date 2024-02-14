
//array declare

var friendsAge= [11, 34, 65, 77, 31, 12] ;
var picnicFee=[2000, 5000, 3000, 100, 30];
var players=['mahi', 'opu', 'purnima', 'Nusrat'];
var vowels=['a', 'e', 'i', 'o', 'u']

//index number

var numbers=[65, 54, 65, 77, 54];
//setelement by index
numbers[3]=77;
numbers[4]=44;
console.log(numbers);


// add numbers/strings as last index using .push() function

var numbers=[45, 76, 35, 73, 86];
numbers.push(69);
var friends=['balam', 'kalam'];
friends.push('salam');
console.log(friends)


//remove numbers/strings as last index using .pop() function

var numbers=[56, 75, 43, 26, 75];
var names=['kalam', 'jalam', 'salam'];
console.log(names);
 var element= names.pop();
console.log(element);

// unshift method 

var numbers=[45, 75, 74, 37];
numbers.unshift(66);
console.log(numbers)

//shift method

var number=[45, 75, 74, 37];
number.shift();
console.log(number)

//comperision

 console.log(5 == 5);
console.log(5 != 6);
console.log(5<6);
console.log(7>8);
console.log(5<=6);
console.log(6>=6)

//conditional statement

var iponePrice=790000;
var myBudget=67000000;
if(iponePrice<myBudget){
    console.log("i will buy the iphone");
}else{
    console.log("i can't afford it")
}

//muliple condition test for &&

var isGraduated=true;
var salary=53000;
var car=2;
if(isGraduated == true && salary > 50000 && car>=1){
     console.log("cholo biye kore feli");

}else{
    console.log("taratari biye kor")
}

//muliple condition test for ||

var isGraduated=true;
 var salary=45777;
if (isGraduated == true || salary==30875){
    console.log("let's do it")
}else{

    console.log("done")
}

//else-if   test

var money =10;
var danishPrice=65;
var butterBread=45;
var toastBiscuit=33;
if(danishPrice<money){
    console.log("Danish khabo")
}
else if(butterBread<money){
    console.log("butterbon khabo")
}
else if(toastBiscuit<money){
    console.log("toastbiscut khabo")
}
else{
    console.log("cha khabo")
}

//nested if 

var math=true;
var geometry=true;
var line=false;
if(math == ture){
    if(geometry==true){
        if( line=false    )
        console.log(math)

    }
}else{
    console.log("ki porli atodin")
}

// (while loop) loop testing

var roastGiven=0;
while(roastGiven < 7){
    console.log("Roast dn please")
    console.log(roastGiven);
    roastGiven+=1;
}


var number=6;
while(number<9){
    console.log(number);
    number++;
}

//sum of 10 number

var sum=0;
var number=0;
while( number <= 10){
    sum = sum + number;      

    console.log(sum);
    number=number+1;
}

//foor loop

for(var number=1;number<10;number++){
    console.log( number);
} 
//dsplay array by using loop

var numbers=[45, 75, 43, 24, 75, 32, 65];
numbers.push(77, 88);
for( var i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}


var names=['Ali', 'kodom', 'sohid', 'ohid'];
names.push('sohid', 'afridi');
names.shift();
for (var i=0;i<=names.length;i++){
    console.log(names[i]);
} 
// break & continue statement

for(var i=1;i<=20;i++){

    if(i > 10){

        continue;

    }
    console.log(i);


    }
 
// reverse way

for(var number=10;number>=5;number--){
    console.log(number);
} 
//

var price=[45, 654, 65, 75, 73, 23, 43, 23, 22];
for(var i=0;i<price.length;i++){
    if(price[i] > 60){
        continue;
    }
    console.log(price[i]);

} 
//use of slice function

var number=[45, 63, 53, 53, 234, 53, 63, 64];
 var cutting=number.slice(2,6);
console.log(cutting);
 
//uase of includes function

var names=["he", "is", "good"]
console.log(names.includes("good")) 
// break,continue again

for(var i=0;i<=20;i++){
    console.log(i);
    if(i > 10){
        break;
    }
} 
