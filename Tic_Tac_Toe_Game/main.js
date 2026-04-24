let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let player1 = true; // true = X , false = O

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

//CLICK LOGIC

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    console.log("Box was clicked");

    if(player1){
      box.textContent = "X";
      player1 = false;
    } else {
      box.textContent = "O";
      player1 = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

//SHOW WINNER

const showWinner = (winner) => {
  msg.textContent = `Congratulations ${winner} wins!`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
// DISABLE BOARD 

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
//ENABLE BOARD 

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.textContent = "";
  });
};
//RESET GAME

const resetGame = () => {
  player1 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
//CHECK WINNER

const checkWinner = () => {
  for(let pattern of winPatterns){
    const [a,b,c] = pattern;

    if(
      boxes[a].textContent &&
      boxes[a].textContent === boxes[b].textContent &&
      boxes[a].textContent === boxes[c].textContent
    ){
      showWinner(boxes[a].textContent);
      return;
    }
  }
// Draw Condition
  if([...boxes].every(box => box.textContent !== "")){
    msg.textContent = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
};
//BUTTON EVENTS

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);