
//set classname variable
let newGame = true
//set initial turn variable
let turn = 1;
//set the array to find the result of the fame
let resultArray = [null, null, null, null, null, null, null, null, null];
//switch between x and o everything should be null at the start of the game
let markXorO = {
    '1': 'X',
    '-1': '0',
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
//randomize the first mark played
function firstMark(){
    if(Math.random > .5){
        turn = 1;
    } else {
        turn = -1;
    }
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
    let currentMark = document.getElementById(square.id)
    //square.classList.add("noClick")
    //remember to remove noclick after reset
    if (newGame === true){
        firstMark()
        handleMove(square)
        resultArray[squareAssign[square.id]] = markXorO[turn]
        currentMark.textContent = markXorO[turn]
        newGame = false
        turn *= -1;
        console.log(resultArray)
    } else {
        currentMark.textContent = markXorO[turn]
        console.log(resultArray)
        turn *= 1;
    }
}


// Update all impacted state, then call render()
function handleMove(square) {
    // obtain index of square
    const idx = parseInt(square.id.replace('cell', ''));
    if (
      // Square already taken
      resultArray[idx] ||
      // Game over
      winner
    ) return;
    // Update state (board, turn, winner)
    resultArray[idx] = turn;
    turn *= -1;
    winner = getWinner();
    // Render updated state
    //render();
  }


  function getWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
      if (Math.abs(resultArray[winningCombos[i][0]] + resultArray[winningCombos[i][1]] + resultArray[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]];
    }
    if (resultArray.includes(null)) return null;
    return 'cat';
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
