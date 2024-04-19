let nextTurn = document.getElementById("currentTurn")
let winnerText = document.getElementById("winner")
let docWinnerX = document.getElementById("winnerX")
let docWinnerY = document.getElementById("winnerY")
let winnerX = 0
let winnerO = 0

//setting storage


//set boolean for segments of the game
let newGame = true
let gameWinner = false
//set initial turn variable
let turn = 1;
//set the array to find the result of the fame
let resultArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//switch between x and o everything should be null at the start of the game
let markXorO = {
    '1': 'X',
    '-1': 'O',
    'null': ''
}
// find a way to assign an index to the target.id to a variable in the resultArray
let squareAssign  = {
    cell0:0, 
    cell1:1, 
    cell2:2,
    cell3:3,
    cell4:4,
    cell5:5,
    cell6:6,
    cell7:7,
    cell8:8,
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
    
//randomize the first mark played
function firstMark(){
    if(Math.random() > .5){
        turn = 1;
    } else {
        turn = -1;
    }
    console.log("FirstMark turn: "+ turn)
    return turn
}
//get a list of all the squares clicked add event listener
const squaresClicked = document.getElementsByClassName("square")

for (const square of squaresClicked){
    square.addEventListener("click", addMarkToBox)
}


function addMarkToBox(e){
    let square = e.target
    console.log(square.id)
    square.classList.add("noClick")
    square.classList.add("opacityStyle")
    //remember to remove noclick after reset
    if (newGame === true){
        firstMark()
        handleMove(square)
        //resultArray[squareAssign[square.id]] = markXorO[turn]
        square.textContent = markXorO[turn]
        newGame = false
        console.log(resultArray)
        
        //turn *= -1
    } else if(gameWinner === false) {
        handleMove(square)
        //resultArray[squareAssign[square.id]] = markXorO[turn]
        square.textContent = markXorO[turn]
        console.log(resultArray)
        console.log('newgame: ', newGame)
        console.log('turn: ', turn)
        //turn *= -1;
    }
}


// Update all impacted state, then call render()
function handleMove(square) {
    // obtain index of square
    const idx = parseInt(square.id.replace('cell', ''));
    //const idx = parseInt(squareAssign.input)
    console.log('idx: ', idx)
    if (resultArray[idx] === 0 && gameWinner === false){
        resultArray[idx] = turn;
        nextTurn.textContent = `Next Turn, ${markXorO[turn]}`
        console.log('Current Turn ', markXorO[turn])
        turn *= -1;
        getWinner()
        console.log('AGW ', markXorO[turn])
        localStorage.setItem('result array', JSON.stringify({resultArray}))
        //JSON.parse(localStorage.getItem('data'))
    }
  }

function scoreBoard(){

console.log('scoreboard ',markXorO[turn])
if(markXorO[turn] === 'X'){
    winnerX++
    }else{
    winnerO++
    }

if(winnerX>=1){
    docWinnerX.textContent = winnerX
} 
if(winnerO>=1){
    docWinnerY.textContent = winnerO
}
console.log("scoreboard triggered")
}

function catGame(a, obj) {
    var i = resultArray.length-1;
    while (i--) {
       if (a[i] === 0) {
            true;
       }
    }
    return false;
}

function getWinner() {
for (let i = 0; i < winningCombos.length; i++) {
        //console.log("testing if 3", (Math.abs(resultArray[winningCombos[i][0]] + resultArray[winningCombos[i][1]] + resultArray[winningCombos[i][2]])))
    if (Math.abs(resultArray[winningCombos[i][0]] + resultArray[winningCombos[i][1]] + resultArray[winningCombos[i][2]]) === 3)
        {
        console.log('getWinner: ', resultArray[winningCombos[i][0]])
        console.log('Winner is: ', markXorO[turn])
        scoreBoard()
        winnerText.textContent = `The winner is ${markXorO[turn]}`
        gameWinner = true
        console.log(gameWinner)
        //return resultArray[winningCombos[i][0]];
        }
    }
    if(resultArray.includes(0)){
        console.log("good to go")
    } else {
        console.log("cat")
        winnerText.textContent = "No winners, Cat game"
    }
}

const resetButton = document.getElementById("resetGame")
resetButton.addEventListener("click", resetFunction)

function resetFunction(){
    let removeClass = document.getElementsByClassName("square")
    console.log(removeClass)
    for (const square of removeClass){
        square.classList.remove("noClick")
        square.classList.remove("opacityStyle")
        square.textContent = ""
        console.log('square ', square)
    }
    
    console.log(removeClass.classList)
    resultArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    newGame = true
    gameWinner = false
    console.log(resultArray)
    turn = 1
    nextTurn.textContent = ''
}