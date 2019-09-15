//Global Variables
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start')
let numClosedDoors = 3;
let currentlyPlaying = true;
let openDoor1;
let openDoor2;
let openDoor3;
//Random Number Generator for the 3 Doors
const randomChoreDoorGenerator = () =>{
  var choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
  else if(choreDoor === 2){
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}
//Checks to see if the door is the bot(aka wrong door) or not
function isBot(door){
  if (door.src === botDoorPath){
    return true;
  }
  else{
    return false;
  }
}
//Called in the onclick function. Provides the conditional for the doors opening.
function isClicked(door){
  if (door.src === closedDoorPath){
    return false;
  }
  else{
    return true;
  }
}
//Decreases number of times the doors are allowed to be opened and determines if the user won or lost
function playDoor(door){
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win')
  }
  else if(isBot(door) === true){
    gameOver('lose')
  }
}
/*Images for the different results of opened doors*/
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
/*When user clicks on door, the door will display the image behind the door*/
doorImage1.onclick = () =>{
  if(currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  };
};
doorImage2.onclick = () =>{
  if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  };
};
doorImage3.onclick = () =>{
  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  };
};
//Starts the next round
startButton.onclick = () =>{
  if (!currentlyPlaying){
    startRound();
  }
};
//Refreshes each round
function startRound(){
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!'
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
/*Prevents user from opening anymore doors, and displays whether they won or loss*/
function gameOver(status){
  if (status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else if (status === 'lose'){
    startButton.innerHTML = 'Game over! Play again?';
  };
   currentlyPlaying = false;
};
startRound();