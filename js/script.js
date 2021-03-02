var currentPlayer = "X";
var turns = 0;
var gameOver = false;
var pos = 0;

function elem(str){
  return document.querySelector(str);
}

function performLogic(btnID, tileNum){
  elem(btnID).hide;
  elem(tileNum).innerText = currentPlayer;
}

function changeTurn(){
  if(pos === 0){
    currentPlayer = "X";
    pos++;
  } else {
    currentPlayer = "O";
    pos--;
  }
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
  changeTurn();
});

$("#button2").click(function() {
  changeTurn();
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    //performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    //performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    //performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    //performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    //performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    //performLogic("#button9","#tile9");
});

