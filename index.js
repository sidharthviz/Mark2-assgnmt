var readlineSync = require("readline-sync");
var score = 0;

function Amigo(){
var Username = readlineSync.question("What's Your Name ? ");
console.log("Hey!", Username, "Well, Do you Know Siddharth ?" );
}

var Questions = [{
  question: "Do you Understand Physics ? ",
  answer: "yes",
}, {
  question: "What's the Speed of Light ? ",
  answer: "3*108ms",
}, {
  question: "Have you Ever used Telescope ? ",
  answer: "yes",
}, {
  question: "Do you want to visit Cern or Antimatter Factory ? ",
  answer: "yes",
}, {
  question: "Have you ever heard of Schrodinger's Cat ? ",
  answer: "yes",
}];


var HighScore = [{
 name: "Tubhyam",
 score: "9",
}, {
  name: "Hashim",
  score: "3",
}, {
  name: "Kamal",
  score: "3",
}, {
  name: "Saumya",
  score: "7",
}, {
  name: "Ruchi",
  score: "10",
}];


function Quiz(question,answer){
  var UserAnswer = readlineSync.question(question);

  if(UserAnswer===answer){
    console.log("You're Right!");
    score = score + 2;
  } else {
    console.log("Oops.. Your'e Wrong!");
    score = 0;
  }

  console.log("You Scored: ", score);
  console.log("-------");
}

function game() {
  for(var i=0;i<Questions.length;i++){
    var str = Questions[i];
    Quiz(str.question,str.answer);
  }
}

function Endgame(){
  console.log("Wao! You've Played Well! Your Final Score", score);
  HighScore.map(score => console.log(score.name, " : ", score.score));
  
}


Amigo();
game();
Endgame();

