

/*
Player wins -
X   player - paper, computer - rock
X   player - rock, computer - scissors
X   player - scissors, computer - paper

Computer wins - 
X   player - paper, computer - scissors
X   player - rock, computer - paper
X   player scissors, computer - rock

Draw - 
X   player - paper, computer - paper
X   player - rock, computer - rock
X   player - scissors, computer - scissors


X   use prompt for input playerMove
X   hard code computerMove as "paper"
X   Call function with inputted player move and "paper" for computer
X   alert result


Task 5

- While loop

- Confirm box


Task 6 

Need 4 variables (games played, wins,losses, draws)
Set all variables to zero
Need another 'if' function to say 
Add count code to function
Edit alert to display these scores after each round


*/


let askAgain = true;

let gamesPlayed = 0;
let wins = 0;
let losses = 0;
let draws = 0;

let playerName = prompt("Please enter your name (Maximum limit 10 characters)");
      while(playerName.length > 10){
         alert("Keep the message length to 10 characters or less")
         playerName = prompt("Please enter your name (Maximum limit 10 characters)");
        }

while (askAgain === true) {

    let playerMove = prompt(`${playerName}, rock, paper or scissors?`);
    let computerOptions = ["rock", "paper", "scissors"]
    const computerMove = computerOptions[Math.floor(Math.random() * computerOptions.length)];

function gameWinner(playerMove, computerMove) {
    if (playerMove === "paper" && computerMove === "rock" || playerMove === "rock" && computerMove === "scissors" || playerMove === "scissors" && computerMove === "paper") { 
        gamesPlayed++
        wins++
        return 1;
    } if (playerMove === "paper" && computerMove === "scissors" || playerMove === "rock" && computerMove === "paper" || playerMove === "scissors" && computerMove === "rock") {
        gamesPlayed++
        losses++
        return -1;
    } if (playerMove === "paper" && computerMove === "paper" || playerMove === "rock" && computerMove === "rock" || playerMove === "scissors" && computerMove === "scissors") {
        gamesPlayed++
        draws++
        return 0;
    }
}



let result = gameWinner(playerMove, computerMove);
alert(`${playerName} game result: ${result}`); 


 if (window.confirm(`games played: ${gamesPlayed} wins: ${wins} draws: ${draws} losses: ${losses} 
 ${playerName} Would you like to play again?`))
{
    askAgain = true;
} else {
    break;
}
}



