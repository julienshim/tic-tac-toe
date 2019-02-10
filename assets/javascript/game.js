// alert("Connected!")
let oBoard;

const winningPositions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

const boxes = document.querySelectorAll(".box");
const restartButton = document.getElementById("restartButton");

restartButton.addEventListener("click", startGame, false);



startGame();

function startGame() {
  oBoard = Array.from(Array(9).keys(), x => x + 1);
  boxes.forEach(function(b){
    b.innerText = "";
    b.addEventListener("click", function(event){
      event.preventDefault();
      b.innerText = event.srcElement.dataset.box;
    }, false)
  })
};