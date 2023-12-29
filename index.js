var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
var urlArray = ["./images/dice1.png","./dice2.png","./dice2.png","./dice3.png","./dice4.png","./dice5.png","./dice6.png"];
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
