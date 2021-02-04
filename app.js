  
var read = require("readline-sync")

var chalk = require("chalk")

var name= read.question(chalk.red("enter your name : "))

 var score=0;
 
function play(question,answer){
  var username = readlinesync.question(question);

  if(username === answer){
    console.log("Right");
    score = score + 1;
    console.log("Your score is :" ,score);
    console.log("------------");
  }else{
    console.log("OOps");
    console.log("------------");
  }
}

play("Where do i live :","hyderabad");
play("what do i do :","student");
play("Which Game do i play most :","pubg");
console.log("Thank you! hope you liked it !");
console.log("YAY your total score is :" ,score);