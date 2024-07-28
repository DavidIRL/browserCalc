let runningTotal = 0;
let inputBuffer = "0";
let lastOperator;
const screen = document.querySelector(".screen");

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        isSymbol(value);
    } else {
        isNumber(value);
    }
    updateScreen();
}

function isNumber(value); {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

function doMath(value) {
    if (buffer === "0") {
        // no math to perform
        return;
    }

    const bufInts = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = bufInts;
    } else {
        doOperation(bufInts);
    }
    
    lastOperator = value;
    buffer = "0"
}

function doOperation(bufInts) {
    if (lastOperator === "+") {
        runningTotal += bufInts;
    } else if (lastOperator === "-") {
        runningTotal -= bufInts;
    } else if (lastOperator === "×") {
        runningTotal *= bufInts;
    } else if (lastOperator === "÷") {
        runningTotal /= bufInts;
    }
}

function isSymbol(value) {
    switch (value) {
        case "C":
            runningTotal = 0;
            inputBuffer = "0";
            break;
        case "=":
            if (lastOperator === null) {
                return;
            }
            
    }
}








