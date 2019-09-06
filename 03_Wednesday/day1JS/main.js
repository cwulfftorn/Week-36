
//Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

var sub = function(n1,n2){
  return n1 - n2
} 

//rewrite callback method

try{
    
    var cb = function(n1,n2, callback){
        if(
            typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
            typeof n2 === "number" //Will fail if n2 is undefined or is not a number
            typeof callback === "function" //Will fail if callback is undefined or is not a function
           
            ){
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
        
    }else{
        
        return console.log("Function cb failed because of wrong inputs")
            }
    };

}catch(e){
    
    console.log("cb Failed. Cause: " + e.log);
}
    
//2)
//console.log( add(1,2) );
// expected output: 3

//console.log( add );
//expected output: add is hoisted with an initial value undefined. So it represent only the name funtion name add, 
//if it should be used, it must be called with scope.

//console.log( add(1,2,3));
// expected output: return 3 cause, the function only takes two inputs, 1 and 2 and adds them together.
// the third input is ignored.

//console.log(add(1));
// expected output: NaN, "Not-a-Number" value. This property indicates that a value is not a legal number.
// Since the funtion needs 2 values.

//console.log( cb(3,3,add) );
// expected output: "Result from the two numbers: 3+3=6"

//console.log( cb(4,3,sub) );
// expected output: "Result from the two numbers: 4+3=1"

//console.log(cb(3,3,add()));
// expected output: error, callback is not a function, so it is not possible to call the add() funtion.

//console.log(cb(3,"hh",add));
// a function cannot be called in another fucntion such as the example above. But the name of the function can be called,
// without the scope, cause add represents the name of callback.
// So this will print: Result from the two numbers: 3+hh=3hh

// 3)
// Look in the callback method, it shoould work :)

// 4)
// Mul
var mul = function (n1, n2) {
    return n1 * n2;
}
//console.log(cb(10,10,mul));
// Result from the two numbers: 10+10=100

// 5)
//console.log(cb(10,10,function(n1,n2){
//    return n1/n2;
//}))
// expected output: Result from the two numbers: 10+10=1

//1)
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Paul", "Hans"];
//console.log(names.join());

// 3)
var newlinenames = names.map(name => "<li>" + name + "</li>");
newlinenames.unshift("<ul>")
newlinenames.push("</ul>")
//console.log(newlinenames.join("\n"));
//console.log(newlinenames.join(""));

// 2)
var bigNames = names.map(name => name.toUpperCase())

var namefilter = names.filter(name => name.length <= 3);
//console.log(namefilter.join());
/*
names.forEach(element => {
    console.log(element);
})
namefilter.forEach(element => {
    console.log(element);
})*/

//4)  Given this JavaScript array

var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

//console.log("Cars newer than 1999")
var newerthan1999 = cars.filter(car => car.year > 1999)
//newerthan1999.forEach(car => console.log(car))

//console.log("Volvo Cars")
//cars.filter(car => car.make === "Volvo").forEach(car => console.log(car))

//console.log("All cars with a price below 5000")
//cars.filter(car => car.price < 5000).forEach(car => console.log(car))

//       Can you refactor this into three methods, that takes the filter text as an argument.
function newerThan(year) {
    return cars.filter(car => car.year > year)
}

function carMake(make) {
    return cars.filter(car => car.make === make)
}

function lessThanPrice(price) {
    return cars.filter(car => car.price < price)
}

//       Can you refactor this into one method, that takes the filter text, and type, as arguments
function oneForAll(type, filter) {
    return cars.filter(type => filter)
}

//4a)      Use map, join + just a little bit more to implement a function, that ,
// given the cars array used above, will create, and return a string with valid SQL statements to '
// insert the data into a table with matching column names (id, year, make, model, price) as sketched below:

//INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );

var SQLString = cars.map(car => "INSERT INTO cars (id,year,make,model,price) VALUES (" + car.id + "," + car.year + "," + car.make + "," + car.model + "," + car.price + ");");
// console.log(SQLString) 

// 1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
// aaaaaaaa
// dddddddd
// ffffffff
// eeeeeeee
// bbbbbbbb
// var msgPrinter = function(msg,delay){
//     setTimeout(function(){
//       console.log(msg);
//     },delay);
//   };
//   console.log("aaaaaaaaaa");
//   msgPrinter ("bbbbbbbbbb",2000);
//   console.log("dddddddddd");
//   msgPrinter ("eeeeeeeeee",1000);
//   console.log("ffffffffff");
// Result:
//aaaaaaaaaa
//dddddddddd
//ffffffffff
//eeeeeeeeee
//bbbbbbbbbb

// 1) Add this code, 

// function Person(name) {
//     this.name = name;
//     var self = this;
//     console.log("Name: " + this.name);
//     setTimeout(function () {
//         console.log("Hi  " + self.name);  //Explain this - this looks at one scope out. So that means the function Person. But that used this. too. So that named the global this. so Person doesnt have a name. So it is undefined when called from the internal function. 
//     }.bind(this), 2000);
// }

//call it like this (do it, even if you know it’s silly ;-)
// Person("Kurt Wonnegut");  //This calls the function - This constructor function may be converted to a class declaration.ts(80002)
// console.log("I'm global: "+ name);  //Explain this - It looks at the global name, which was set in the function with this.name

//var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
//console.log("I'm global: "+ name);  //What’s different ?
// Now the Person is a variable. Before it was on global this. Different scopes now. 

// var greeter = function () {
//     console.log(this.message);
// };
// var comp1 = { message: "Hello World" };
// var comp2 = { message: "Hi" };

// var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
// var g2 = greeter.bind(comp2);//And here another “this”
// setTimeout(g1, 500);
// setTimeout(g2, 1000);

var testObject = {color:"Red", speed: "Fast", power: 1000}

var loopObject = function (obj) {
    for (prop in obj) {
        console.log(prop, obj[prop]);
    }
}
console.log("all 3");
loopObject(testObject)
console.log("No color");
delete testObject.color
loopObject(testObject)
console.log("name JoJo")
testObject.name="JoJo"
loopObject(testObject)


class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get details() {
        for (prop in Person) {
            console.log(prop, obj[prop]);
        }
    }
}








