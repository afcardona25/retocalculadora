//Basic variables
let numberBeingEntered = 1
let firstNumber = []
let secondNumber = []
let result = 0
let currentOperation = ""
let resultDisplay = document.getElementById('results')
resultDisplay.innerText = 0
//basic Functions
let clear = () => {
    firstNumber = []
    secondNumber = []
}
function displayNumbers(x){ 
    if(numberBeingEntered===1){
        firstNumber.push(x)
        console.log(firstNumber)
        resultDisplay.innerText = firstNumber.join("")
    } else{
        secondNumber.push(x)
        console.log(secondNumber)
        resultDisplay.innerText = secondNumber.join("")
    }
    
}
function resetNumberinputCount(){
    numberBeingEntered = 1
}
function basicOperationsMiddleStep(a){

}

function performOperation(a){
    let x = firstNumber.join("")
    let y = secondNumber.join("")
    switch(a){
        
        case "%":
            result = x/100
            resultDisplay.innerText = result
            break;
        case "1/x":
            result = 1/x
            resultDisplay.innerText = result
            break;
        case "x2":
            result = x*x
            resultDisplay.innerText = result
            break;
        case "root":
            result = Math.sqrt(x)
            resultDisplay.innerText = result
            break;
        case "/":
            result = x/y
            resultDisplay.innerText = result
            break;
        case "x":
            result = x*y
            resultDisplay.innerText = result
            break;
        case "-":
            result = x-y
            resultDisplay.innerText = result
            break;
        case "+":
            result = parseFloat(x) + parseFloat(y)
            resultDisplay.innerText = result
            break;
        case "CE":
            result = 0
            resultDisplay.innerText = 0
            let clear = ()=> {
                firstNumber = []
                secondNumber = []
            }
            clear()
            break;
        case "C":
            if (numberBeingEntered === 1) {
                    firstNumber =[]
                    resultDisplay.innerText = 0
                } else {
                    secondNumber =[]
                    resultDisplay.innerText = 0
                }
            break;
        case "del":
            if(numberBeingEntered ===1){
                if (firstNumber.length>1) {
                    firstNumber.pop()
                    resultDisplay.innerText = firstNumber.join("")
                } else {
                    resultDisplay.innerText = 0
                }
                
            } else{
                if(secondNumber.length>1){
                    secondNumber.pop()
                    resultDisplay.innerText = secondNumber.join("")
                } else{
                    resultDisplay.innerText = 0
                }
                
            }
            break;
    }
}

//getting number buttons 
let nine = document.getElementById("nineBtn")
nine.addEventListener('click', ()=>{
    let x = 9
    displayNumbers(x)
})
let eight = document.getElementById("eightBtn") 
eight.addEventListener('click', () => {
    let x = 8
    displayNumbers(x)
})
let seven = document.getElementById("sevenBtn")
seven.addEventListener('click', () => {
    let x = 7
    displayNumbers(x)
})
let six = document.getElementById("sixBtn")
six.addEventListener('click', () => {
    let x = 6
    displayNumbers(x)
})
let five = document.getElementById("fiveBtn")
five.addEventListener('click', () => {
    let x = 5
    displayNumbers(x)
})
let four = document.getElementById("fourBtn")
four.addEventListener('click', () => {
    let x = 4
    displayNumbers(x)
})
let three = document.getElementById("threeBtn")
three.addEventListener('click', () => {
    let x = 3
    displayNumbers(x)
})
let two = document.getElementById("twoBtn")
two.addEventListener('click', () => {
    let x = 2
    displayNumbers(x)
})
let one = document.getElementById("oneBtn")
one.addEventListener('click', () => {
    let x = 1
    displayNumbers(x)
})
let zero = document.getElementById("zeroBtn")
zero.addEventListener('click', () => {
    let x = 0
    displayNumbers(x)
})
let numbersBtns = [zero, one, two, three, four, five, six, seven, eight, nine]

// getting other buttons 
let percentage = document.getElementById('percentageBtn')
percentage.addEventListener('click', () => {
    performOperation("%")
})
let cEbtn = document.getElementById('cEbtn')
cEbtn.addEventListener('click', () => {
    performOperation("CE")
    resetNumberinputCount()
})
let cBtn = document.getElementById('cBtn')
cBtn.addEventListener('click', ()=>{
    performOperation("C")
})
let deleteBtn = document.getElementById('deleteBtn')
deleteBtn.addEventListener('click', ()=>{
    performOperation("del")
})
let division = document.getElementById('divisionBtn')
division.addEventListener('click',()=>{
    numberBeingEntered = 2
    currentOperation = "/"
    
})
let multiplication = document.getElementById('multiplicationBtn')
multiplication.addEventListener('click', () => {
    numberBeingEntered = 2
    currentOperation = "x"

})
let substraction = document.getElementById('substractionBtn')
substraction.addEventListener('click', () => {
    numberBeingEntered = 2
    currentOperation = "-"

})
let sum = document.getElementById('additionBtn')
sum.addEventListener('click', () => {
    numberBeingEntered = 2
    currentOperation = "+"

})
let equals = document.getElementById('equalsBtn')
equals.addEventListener('click', ()=>{
    performOperation(currentOperation)
    resetNumberinputCount()
    clear()
})

