console.log("Hi");
var playerDice1, playerDice2;
function player1(){
var randomNumber1=Math.random();
var changeToHoleNumber1=Math.floor(randomNumber1*6)+1;
var str1="./images/dice"
var str2=".png";
var diceImage1=str1.concat(changeToHoleNumber1,str2)
document.querySelector("img#player1").setAttribute("src",diceImage1);
console.log("Value of the changeToHoleNumber",diceImage1);
playerDice1=changeToHoleNumber1;
//winDeclaration()
}
function player2(){
    var randomNumber2=Math.random();
    var changeToHoleNumber2=Math.floor(randomNumber2*6)+1;
    var str1="./images/dice"
    var str2=".png";
    var diceImage2=str1.concat(changeToHoleNumber2,str2)
//    var diceImage2="./images/dice"+changeToHoleNumber2+".png"
    document.querySelector("img#player2").setAttribute("src",diceImage2);
    console.log("Value of the changeToHoleNumber",diceImage2);
    playerDice2=changeToHoleNumber2;
  //  winDeclaration()
}
function winDeclaration(){
   if(playerDice1>playerDice2) {
    document.querySelector("h1").innerHTML="AISHA Win";
   }else if(playerDice1<playerDice2) {
    document.querySelector("h1").innerHTML="AIMAN Win";
   }else{
    document.querySelector("h1").innerHTML="AIMAN & AISHA Wins";
   }
}
player1();
player2();
winDeclaration();