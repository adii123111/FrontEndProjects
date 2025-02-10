let  userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencomputerchoice = () => {
    const options = ["rock","paper","scissor"];
    const randomIndex = Math.floor(Math.random() *3);
    return options[randomIndex];
};

const drawgame =  () => {
    console.log("Game was draw");
    msg.innerText= "Game was draw, Play again";
    msg.style.backgroundColor = "#081b31";
}


const showwinnner = (userwin , userchoice , compChoice) => {
    if(userwin){
        console.log("you won ");
        userscore++;
        userscorepara.innerText = userscore;


        msg.innerText = `You won!! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
            console.log("you lose");
            compscore++;
            compscorepara.innerText = compscore;
           

            msg.innerText = `You lose!! ${compChoice} beats your ${userchoice}`;
            msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
console.log("userchoice = ",userchoice);
// generate computer choice
const  compChoice = gencomputerchoice();
console.log("comp choice =", compChoice);

if(userchoice === compChoice){
    //draw game
    drawgame();
}else{
    let userwin = true;
    if (userchoice === 'rock') {
        // paper beats rock, rock beats scissors
        userwin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
        // scissors beat paper, paper beats rock
        userwin = compChoice === "scissor" ? false : true;
    } else {
        // rock beats scissors, scissors beat paper
        userwin = compChoice === "rock" ? false : true;
    }
    showwinnner(userwin,userchoice , compChoice);
}

};



choices.forEach((choice) =>{
 
    choice.addEventListener("click", ()  =>{
        const userchoice = choice.getAttribute("id");
      
        playgame(userchoice)
    });
});  