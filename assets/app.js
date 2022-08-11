// refactor this code later
function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getOutPut() {
  return document.getElementById("output-value").innerText;
}

function printOutPut(num) {
  // check if output is empty
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  }
  document.getElementById("output-value").innerText = formatOutPutValue(num);
}

// function to separete values with coma for readability
function formatOutPutValue(num) {
  // fix NaN value when back pace is click with a negative number
  if (num == "-") {
    //   needs more fixing
    return "";
  }
  //   --------------
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

//  why are we reversing or removing the comma?
function reverseOutPutValue(num) {
  return Number(num.replace(/,/g, ""));
}

// alert(reverseOutPutValue(getOutPut()))
// operations uising operatore class
var operatore = document.getElementsByClassName("operator");
for (let index = 0; index < operatore.length; index++) {
  // const element = operatore[index];
  operatore[index].addEventListener("click", function () {
    //clear button logic
    if (this.id == "clear") {
      printHistory("");
      printOutPut("");
    }
    // backspace logic
    else if (this.id == "backsapce") {
      var output = reverseOutPutValue(getOutPut()).toString();

      if (output) {
        //   if output has a value
        output = output.substr(0, output.length - 1);
        printOutPut(output);
      }
    } else {
      var output = getOutPut();
      var history = getHistory();
      //   to finish up let add the logic to be able to change operaror sign
      if (output == "" && history != "") {
        //    check if last charceter is a operator
        if (isNaN(history[history.length - 1])) {
          // remove last operator
          history = history.substr(0, history.length - 1);
        }
      }

      // ---------------------------
      // make sure output is not empty (if output empty, operator sholudnt work)
    //   add  || history so if output or history is not empty then the condition
      if (output != "") {
        output = reverseOutPutValue(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutPut(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutPut("");
        }
      }
    }
  });
}

// numbers logic
var number = document.getElementsByClassName("number");
for (let index = 0; index < number.length; index++) {
  // const element = operatore[index];
  number[index].addEventListener("click", function () {
    //  reverse number to original format
    var output = reverseOutPutValue(getOutPut());
    if (output != NaN) {
      //if out is a number
      output = output + this.id;
      printOutPut(output);
    }
  });
}
