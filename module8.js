
// let sum=0;
// for (let i=5;i>=1;i--){
//     sum+=i;
    
// }
// console.log(sum)
/*
 
function multiplicatio(x){

    if(x==1){
        return 1;
    }

    var mul=x*multiplicatio(x-1);
    return mul;
}
var reasult=multiplicatio(6);
console.log(reasult);
//factorial using recursive function
function factorial(i){
    if(i==1){
        return 1;
    }

    var fact=i*factorial(i-1);
    return fact;
}
var ress=factorial(8);
console.log(ress);
//
const student={
    name:'sakib khan',
    id:232,
    adress:'ldhfkdh',
    isSingle:true,
    friends:['apu','bpu','cpu','dpu'],
    act: function(){
        console.log('acting like sakib khan')
    },
    car : {
        brand:'tesla',
        price:544985798,
        made:2024,
        manufactrue:{
            name:'tesla',
            ceo:'Elon mask',
            country:'USA'

        }
    }
}
// console.log(student.car.manufactrue);
student.act();
// student.act();
*/
//FInd th Matchhing product
 const numbers=[45,67,86,32,67];
// for(let i=0;i<numbers.length;i++){
//     const number=numbers[i];
//     console.log(number);
// }
//for of loop
for (const number of numbers){
    console.log(number)

}
const products=[
    {id:1,name:'walton phone', price:3456},
    {id:1,name:'iphone ', price:3456},
    {id:1,name:'dell phone', price:3456},
    {id:1,name:'rooltop phone', price:3456},
    {id:1,name:'xiaomi phone', price:3456},
    {id:1,name:'samgsung phone', price:3456},
    {id:1,name:'Nokia phone', price:3456}
]
for(const product of products){
    console.log(product)
}