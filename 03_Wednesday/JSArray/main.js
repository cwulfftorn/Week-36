/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

console.log(boys.concat(girls));
//expected output: Array ['Peter', 'lars', 'Ole', 'Janne', 'hanne', 'Sanne']

//b og c
var all = ["Peter", "lars", "Ole", "Janne", "hanne", "Sanne"];

console.log(all.join(', '));
// expected output: String Peter, lars, Ole, Janne, hanne, Sanne

console.log(all.join('-'));
// expected output: String Peter-lars-Ole-Janne-hanne-Sanne

//d
console.log(all.push("Lone", "Gitte"));
// expected output: 8

console.log(all);
// expected output: [ 'Peter', 'lars', 'Ole', 'Janne', 'hanne', 'Sanne', 'Lone', 'Gitte' ]

//e
console.log(all.unshift("Hans", "Kurt"));
// expected output: 10

console.log(all);
//expected output: [ 'Hans','Kurt','Peter','lars','Ole','Janne','hanne','Sanne','Lone','Gitte' ]

//f
console.log(all.shift());
// expected output: Hans

console.log(all);
// expected output: [ 'Kurt','Peter','lars','Ole','Janne','hanne','Sanne','Lone','Gitte' ]

//g
console.log(all.pop());
// expected output: Gitte

console.log(all);
// expected output: [ 'Kurt', 'Peter', 'lars', 'Ole', 'Janne', 'hanne', 'Sanne', 'Lone' ]

//h
all.splice(3, 2);
// removes Ole and Janne from the array

console.log(all);
// expected output: [ 'Kurt', 'Peter', 'lars', 'hanne', 'Sanne', 'Lone' ]

//i
console.log(all.reverse());
// expected output: [ 'Lone', 'Sanne', 'hanne', 'lars', 'Peter', 'Kurt' ]

//j
console.log(all.sort());
// expected output: [ 'Kurt', 'Lone', 'Peter', 'Sanne', 'hanne', 'lars' ]
// the array has been sorted, so the names with a upper case letter comes first in alphabetical order, 
// then the lower case names after in alphabetical order.

//k
all.sort(function(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if( a == b) return 0;
    return a < b ? -1 : 1;
});
// sort the array in alphabetical order, even if the name is capitalized or not.

console.log(all);
// expected output: [ 'hanne', 'Kurt', 'lars', 'Lone', 'Peter', 'Sanne' ]

//l
all = all.map(function(x){ return x.toUpperCase(); });
// Makes all names to Upper case.

console.log(all);
// expected output: [ 'HANNE', 'KURT', 'LARS', 'LONE', 'PETER', 'SANNE' ]

//m 
var alls = all.filter(name => name.charAt(0) === "l" || name.charAt(0) === "L");
// Makes at new array with the names that start with the letter l or L.

console.log(alls);
//expected output: [ 'LARS', 'LONE' ]




   












