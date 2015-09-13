'use strict'

$(document).ready(init);

function init() {
  gameReset();
  $("td").on('click', gameMove)
}

var turn = false;
var turns = [];
var player1Array = [];
var player1 = {
  u: 0,
  c: 0,
  b: 0,
  l: 0,
  m: 0,
  r: 0,
  dl: 0,
  dr: 0
};
var player2Array=[];
var player2 = {
  u: 0,
  c: 0,
  b: 0,
  l: 0,
  m: 0,
  r: 0,
  dl: 0,
  dr: 0
};

function gameReset(){
  $("td").removeClass('.ex');
  $("td").removeClass('.oh');
}

function gameMove(){
  if(turns.length % 2 === 0){
    if($(this).hasClass('ex') || $(this).hasClass('oh')){
      return;
    } else {
      $(this).addClass('ex');
      turns.push("ex");
      var gamePiece = $(this).attr('class');
      gamePieceParse(player1, gamePiece);
      checkWin(player1, "player 1", player1Array);
    }
  } else {
    if($(this).hasClass('ex') || $(this).hasClass('oh')){
      return;
    } else {
      var gamePiece = $(this).attr('id');
      $(this).addClass('oh');
      turns.push("oh");
      var gamePiece = $(this).attr('class');
      gamePieceParse(player2, gamePiece);
      checkWin(player2, "player 2", player2Array);
    }
  }
}

function gamePieceParse(player, string){
  console.log(string);
  var array = string.split(" ");
  array.forEach((e) => {
    switch(e){
      case "U":
        player.u++;
        break;
      case "C":
        player.c++;
        break;
      case "B":
        player.b++;
        break;
      case "L":
        player.l++;
        break;
      case "M":
        player.m++;
        break;
      case "R":
        player.r++;
        break;
      case "Dur":
        player.dr++;
        break;
      case "Dbl":
        player.dr++;
        break;
      case "Dul":
        player.dl++;
        break;
      case "Dbr":
        player.dl++;
        break;
      case "Dm":
        player.dr++;
        player.dl++;
        break;
    }
  });
};

function checkWin(player, playerString, playerArray){

  console.log(playerString);
  for(var prop in player){
    if(player[prop] === 1 && playerString === "player 1"){
      player1Array.push(player[prop]);
    } else if(player[prop] === 1 && playerString === "player 2") {
      player2Array.push(player[prop]);
    }
    if(player[prop] === 3){
      alert(playerString +  " wins");
    }
  }
  console.log(player);
}
