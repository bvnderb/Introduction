console.log("Hello World");
alert("Hello World");
prompt("Hello World");

let dateObject = new Date(); // LET <- schuif maken
console.log(dateObject);

// common practice to first assign an id to a variable
// aka we make a drawer and put multiple things in it
let dateresult = document.getElementById('dateresult');
dateresult.style.color = "red";
dateresult.style.fontSize = "50px";
dateresult.innerHTML = dateObject;

// HOW IT WORKS BUT NOT RECOMMENDED
document.getElementById('dateresult').style.color = "red";
document.getElementById('dateresult').style.fontsize = "50px";
document.getElementById('dateresult').style.innerHTML = "dataObject";


// concatenation method
dateresult.innerHTML = 'Yay we zitten nu al in maand' + month + ', en dat is fijn!';

// template literal method
dateresult.innerHTML = `Yay we zitten nu al in maand ${month}, en dat is fijn!`;

dateresult.innerHTML = `
<h1>${dateresult}</h1>
<hr>
<div class="btn-group" role="group" `


// Script to check performance 

function testPerformance() {
    const targetNumber = 100000000 // The larger the number, the longer it takes.
    const startTime = performance.now()
    // Simple loop to simulate workload
    for (let i = 0; i < targetNumber; i++) {
        // The loop does nothing except counting
    }
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;

    // display the result
    document.body.innerHTML = `
    <h1>Performance Test Result</h1>
    <p>counting to ${targetNumber} took <strong>${elapsedTime.toFixed(2)}</strong> milliseconds:`;
    console.log(`Counting to ${targetNumber} took ${elapsedTime.toFixed(2)} milliseconds.`)
}

// Run the test
testPerformance();


// make objects from input and button
let myvalue = document.getElementById('myvalue');
let submit = document.getElementById('submit');

submit.addEventListener('click')

// making a simple calculator:

// HTML + variables: 
// <div class="container">
//         <div class="row">
//             <div class="col-12">
//                 <div id="dateresult"></div>

//                 <input id="myfirstvalue" type="text" class="form-control mb-3">
//                 <input id="mysecondvalue" type="text" class="form-control mb-3">
//                 <button id="plus" class="btn btn-danger"> + </button>
//                 <button id="minus" class="btn btn-danger"> - </button>
//                 <button id="multiply" class="btn btn-danger"> * </button>
//                 <button id="divide" class="btn btn-danger"> / </button>

let dateresult = document.getElementById('dateresult');
// make objects from input and button
let myfirstvalue = document.getElementById('myfirstvalue');
let mysecondvalue = document.getElementById('mysecondvalue');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');

// define what happends when the submit buttons are clicked

plus.addEventListener('click', function () {
    dateresult.innerHTML = parseInt(myfirstvalue.value) + parseInt(mysecondvalue.value);
});
minus.addEventListener('click', function () {
    dateresult.innerHTML = parseInt(myfirstvalue.value) - parseInt(mysecondvalue.value);
});
multiply.addEventListener('click', function () {
    dateresult.innerHTML = parseInt(myfirstvalue.value) * parseInt(mysecondvalue.value);
});
divide.addEventListener('click', function () {
    dateresult.innerHTML = parseInt(myfirstvalue.value) / parseInt(mysecondvalue.value);
});

// i don't know what this is...

console.log("hello world");

let dateObject = new Date();

// extract the day of the dateObject
let day = dateObject.getDate();
console.log(day);
// extract the month of the dateObject
let month = dateObject.getMonth();
// modify the month of the dateObject by 1 - human readable month
month = month + 1;
console.log(month);
// extract the year of the dateObject
let year = dateObject.getFullYear();
console.log(year);

// common practice to first assign an id to a variable
// aka we make a drawer and put multiple things in it

dateresult.style.color = "red";
dateresult.style.fontSize = "50px";

// concatenation method
dateresult.innerHTML = 'Yay we zitten nu al in maand ' + month + ', en dat is fijn!';

// template literal method
dateresult.innerHTML = `
<h1>${dateObject}</h1>
<hr>
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
<button type="button" class="btn btn-danger">month</button>
<button type="button" class="btn btn-warning">${day}</button>
<button type="button" class="btn btn-success">${year}</button>
</div>
`;



document.getElementById('dateresult').style.color = "red";
document.getElementById('dateresult').style.fontSize = "50px";
document.getElementById('dateresult').innerHTML = dateObject;
// what if we just went online liner with the date
document.getElementById('dateresult').innerHTML = new Date();