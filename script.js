// console.log("Hello World");
// alert("Hello World");
// prompt("Hello World");

// let dateObject = new Date(); // LET <- schuif maken
// console.log(dateObject);

// // common practice to first assign an id to a variable
// // aka we make a drawer and put multiple things in it
// let dateresult = document.getElementById('dateresult');
// dateresult.style.color = "red";
// dateresult.style.fontSize = "50px";
// dateresult.innerHTML = dateObject;

// // HOW IT WORKS BUT NOT RECOMMENDED
// document.getElementById('dateresult').style.color = "red";
// document.getElementById('dateresult').style.fontsize = "50px";
// document.getElementById('dateresult').style.innerHTML = "dataObject";


// // concatenation method
// dateresult.innerHTML = 'Yay we zitten nu al in maand' + month + ', en dat is fijn!';

// // template literal method
// dateresult.innerHTML = `Yay we zitten nu al in maand ${month}, en dat is fijn!`;

// dateresult.innerHTML = `
// <h1>${dateresult}</h1>
// <hr>
// <div class="btn-group" role="group" `


// // Script to check performance 

// function testPerformance() {
//     const targetNumber = 100000000 // The larger the number, the longer it takes.
//     const startTime = performance.now()
//     // Simple loop to simulate workload
//     for (let i = 0; i < targetNumber; i++) {
//         // The loop does nothing except counting
//     }
//     const endTime = performance.now();
//     const elapsedTime = endTime - startTime;

//     // display the result
//     document.body.innerHTML = `
//     <h1>Performance Test Result</h1>
//     <p>counting to ${targetNumber} took <strong>${elapsedTime.toFixed(2)}</strong> milliseconds:`;
//     console.log(`Counting to ${targetNumber} took ${elapsedTime.toFixed(2)} milliseconds.`)
// }

// // Run the test
// testPerformance();


// // make objects from input and button
// let myvalue = document.getElementById('myvalue');
// let submit = document.getElementById('submit');

// submit.addEventListener('click')