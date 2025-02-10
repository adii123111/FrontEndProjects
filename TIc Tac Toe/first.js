let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");  
let newgamebtn = document.querySelector(".new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(() => {
      splash.classList.add('display')
    }, 2000);
  })
  

let turn0 = true; //playerX, playerY;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetgame = () => {
    let turn0 = true;
enablebtn();
msgcontainer.classList.add("hide");
}

boxes.forEach ((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disabledbtn = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enablebtn = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Winner Winner Chicken Dinner BKL!! ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbtn();
};
const checkwinner = ()  => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showwinner(pos1val);
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click",resetgame);