let runningTotal = 0;
let inBuf = "0";
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

function isNumber(value) {
    if (inBuf === "0") {
        inBuf = value;
    } else {
        inBuf += value;
    }
}

function doMath(value) {
    if (inBuf === "0") {
        // no math to perform
        return;
    }

    const bufInts = parseInt(inBuf);
    if (runningTotal === 0) {
        runningTotal = bufInts;
    } else {
        doOperation(bufInts);
    }
    
    lastOperator = value;
    inBuf = "0"
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
            inBuf = "0";
            break;
        case "=":
            if (lastOperator === null) {
                return;
            }
            doOperation(parseInt(inBuf));
            lastOperator = null;
            inBuf = +runningTotal;
            runningTotal = 0;
            break;
        case "←":
            if (inBuf.length === 1) {
                inBuf = "0";
            } else {
                inBuf = inBuf.substr(0, inBuf.length-1);
            }
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            doMath(value);
            break;
    }
}

function updateScreen() {
    screen.innerText = inBuf;
}

function init() {
    document
        .querySelector(".buttons")
        .addEventListener("click", function (event) {
            buttonClick(event.target.innerText);
        });
}

init();
