/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
var sub = function(n1,n2){
  return n1 - n2
} 

//Callback example
var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

var mul = function (n1, n2) {
    return n1 * n2;
}
console.log(cb(10,10,mul));
// Result from the two numbers: 10+10=100

// 5)
console.log(cb(10,10,function(n1,n2){
         return n1/n2;
}))


console.log(cb(3,"hh",add));