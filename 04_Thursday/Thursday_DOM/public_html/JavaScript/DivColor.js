/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// a)
function divcolor() {
    let divArray = Array.from(document.getElementsByTagName('div'));
    divArray.forEach(element => {
        element.style.backgroundColor = "blue";
    });
}

// b)
function colorChanger() {
    document.getElementById('div1').style.backgroundColor = "green";
    document.getElementById('div2').style.backgroundColor = "blue";
    document.getElementById('div3').style.backgroundColor = "red";
}
