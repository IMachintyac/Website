var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
var urlArray = ["./images/dice1.png","./images/dice2.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
randomNumber1=(randomNumber1)*urlArray.length;
randomNumber1=Math.floor(randomNumber1);


randomNumber2=(randomNumber2)*urlArray.length;
randomNumber2=Math.floor(randomNumber2);
function winnerSelector(){
    if (randomNumber1>randomNumber2){
        document.querySelector("#Result").innerHTML="Player 1 Wins";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="Player 2 Wins";
    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }
    }
var imageElement1 = document.querySelectorAll(".img1")[0].setAttribute("src",urlArray[randomNumber1]);
var imageElement2 = document.querySelectorAll(".img1")[1].setAttribute("src",urlArray[randomNumber2]);
winnerSelector();
