// reverse words example
/* 
const word = "ozkan ozkan";

------Make an array from string------

 const arr = [...word];  
const arr = word.split("");
 */
 


// methods of defining function in js.
/* function reverse(sentence){    

} */
// const reverse = function (sentence){
//     let arr = sentence.split("");
//     let arr1 = [];

//     //return arr.reverse().join("");       // reverse an array directly and join its all elements.
//     for ( let i = arr.length-1 ; i >=  0; i--){

//         arr1.push(arr[i]);


//     };
    
//     return arr1.join("");

// };

// console.log(reverse("büşra ders çalışıyor"));  

//----------------REVERSE---------------//

// function reversed (parameter){
//     let sonuç = [];
//     for (let i = 0; i< parameter.length; i++) {
        
//      sonuç.push(parameter[i]);
        
//     }
//     sonuç = sonuç.reverse().join("");
//     return sonuç;
// }
// console.log(reversed("büşra geldi"));



  
// practic usage of  function in Js.
/* const a = x => x**2;

console.log(a(5)); */

//---------------derece dönüştürme---------//

// let giriş = window.prompt("please enter c>f or f>c or q for exit:");

// let sonuç;
// function converter(){

    
//     if (giriş !== "c>f" || giriş !=="f>c" ) {
//         console.log("please try again");
//     }
    

//     if (giriş==="c>f") {
//         let degree =parseInt(window.prompt("please enter degree:"));
//         sonuç=(degree*9/5)+32;
//         return sonuç;
       
//     } 
//     else if(giriş==="f>c") {
//         let degree =parseInt(window.prompt("please enter degree:"));
//         sonuç=(degree-32)*9/5;
//         return sonuç;
       
    
//     }
//     else if(giriş === "q"){
//         return "we are waiting for you again";
//     }


// console.log(sonuç);
// }

// converter();


// let a = 35;
// console.log(typeof(a) !== "number") ;


// let giriş = window.prompt("what action do you want to do: \n 1 c>f \n 2 f>c \n q exit");
// function converter(){
    
//     if(giriş == 1){
//         let degree =parseInt(window.prompt("please enter degree:"));
//         sonuç=(degree*9/5)+32;
//         alert( sonuç);

//     }

//     else if(giriş == 2){
//         let degree =parseInt(window.prompt("please enter degree:"));
//         sonuç=(degree-32)*9/5;
//         alert( sonuç);

//     }
//     else if(giriş === "q"){
//         alert("we are waiting for you again") ;
//     }
//     else{
//         alert("please try again press f5");

//     }

// }
// converter();
//............indexbulma.............

// let text=window.prompt("enter a text");
// let character=window.prompt("enter a character");
// let arr=[];
// for(i=0;i<text.length-1;i++){
//    if(text[i]=== character){
//        arr.push(i);
//    } 
   
   
// };
// if(arr.length===0){
//     alert(" character not found")
// }
// console.log(arr);


let num= parseInt(window.prompt("enter a number"));
let count=0;
for(i=2; i<num; i++){
    if(num%i===0){
        console.log("asal sayı değil");
        break;
    }
    else{
    
        console.log("asal sayı");
    }
    
}
    
