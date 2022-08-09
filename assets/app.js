// // refactor this code later
// function getHistory() {
//   return document.getElementById("history-value").innerText;
// }
// function printHistory(num) {
//   document.getElementById("history-value").innerText = num;
// }

// function getOutPut() {
//   return document.getElementById("output-value").innerText;
// }

// function printOutPut(num) {
//   // check if output is empty
//   if (num == "") {
//     document.getElementById("output-value").innerText = num;
//   }
//   document.getElementById("output-value").innerText = formatOutPutValue(num);
// }

// // function to separete values with coma for readability
// function formatOutPutValue(num) {
//   var n = Number(num);
//   var value = n.toLocaleString("en");
//   return value;
// }

// //  why are we reversing or removing the comma?
// function reverseOutPutValue(num) {
//   return Number(num.replace(/,/g, ""));
// }

// // alert(reverseOutPutValue(getOutPut()))
// // operations uising operatore class
// var operatore = document.getElementsByClassName("operator");
// for (let index = 0; index < operatore.length; index++) {
//   // const element = operatore[index];
//   operatore[index].addEventListener("click", function () {
//     //clear button logic
//     if (this.id == "clear") {
//       printHistory("");
//       printOutPut("");
//     }
//     // backspace logic 

//   });
// }

// // numbers logic
// var number = document.getElementsByClassName("number");
// for (let index = 0; index < number.length; index++) {
//   // const element = operatore[index];
//   number[index].addEventListener("click", function () {
//     //  reverse number to original format
//     var output = reverseOutPutValue(getOutPut());
//     if (output != NaN) {
//       //if out is a number
//       output = output + this.id;
//       printOutPut(output);
//     }
//   });
// }
