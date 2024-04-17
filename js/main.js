// // Select all elements with the same first three letters
// const elements = document.querySelectorAll('[data-name^="cell"]');

// // Loop through the selected elements and add an event listener to each one
// elements.forEach(element => {
//   element.addEventListener('click', () => {
//     // Do something when the element is clicked
//   });
// });
/*-

// Select all elements with the same first three letters
const cellClicked = document.querySelectorAll('[data-name^="cell"]');

// Loop through the selected elements and add an event listener to each one
cellClicked.forEach(element => {
  element.addEventListener('click', () => {
    console.log("test tclick")
    // Do something when the element is clicked
  });
});
console.log(cellClicked)

-*/

//get by classnane
let newGame = true;
let turn = 0;
let markXorO = ['X', 'O', 'X', 'O', 'X', 'O' , 'X', 'O', 'X']

const squaresClicked = document.getElementsByClassName("square")

for (const square of squaresClicked){
    square.addEventListener("click", addMarkToBox)
}

function addMarkToBox(e){
    let square = e.target
    console.log(square.id)
    let currentMark = document.getElementById(square.id)
    square.classList.add("noClick")
    //remember to remove noclick after reset
    if (newGame === true){
        turn = Math.round(Math.random())
        currentMark.textContent = markXorO[turn]
        newGame = false
        turn++;

    } else {
        currentMark.textContent = markXorO[turn]
        turn++;
    }
}


//document.getElementById('board').addEventListener('click', handleMove);
//playAgainBtn.addEventListener('click', initialize);

function userIsX(){}

function checkWinningCombos(){}

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


// let currentTable = [
//     [null],[],[],

// ]

const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
