let userScore=0;
let compScore=0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const gameDraw=(userChoice,compChoice)=>{
    console.log("its a draw");
    msg.innerText = `DRAW! Your ${userChoice} IS SAME as ${compChoice}`;
      msg.style.backgroundColor = "black";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };
const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    const compChoice=genCompChoice();
    console.log("compChoice=",compChoice);
    if(userChoice===compChoice){
gameDraw(userChoice,compChoice);
    }
    else{
    let userWin=true;
   if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    };
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
console.log("choice was clicked");
const userChoice = choice.getAttribute("id");
playGame(userChoice);
    }); 
});