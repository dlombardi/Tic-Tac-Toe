'use strict'

$(document).ready(init);

function init() {
  gameReset();
  $("td").on('click', addClass)
}

var turns = [];
var player1Array = [];
var player1 = {
  u: 0,
  c: 0,
  b: 0,
  l: 0,
  m: 0,
  r: 0
};
var player2Array=[];
var player2 = {
  u: 0,
  c: 0,
  b: 0,
  l: 0,
  m: 0,
  r: 0
};

function gameReset(){
  $("td").removeClass('.ex');
  $("td").removeClass('.oh');
}

function addClass(){
  if(turns.length % 2 === 0){
    if($(this).hasClass('ex') || $(this).hasClass('oh')){
      return;
    } else {
      $(this).addClass('ex');
      turns.push("ex");
      var gamePiece = $(this).attr('class');
      gamePieceParse("player1", gamePiece);
      checkWin("player1");
    }
  } else {
    if($(this).hasClass('ex') || $(this).hasClass('oh')){
      return;
    } else {
      var gamePiece = $(this).attr('id');
      $(this).addClass('oh');
      turns.push("oh");
      var gamePiece = $(this).attr('class');
      gamePieceParse("player2", gamePiece);
      checkWin("player2");
    }
  }
}

function gamePieceParse(player, string){
  var array = string.split(" ");
  if(player === "player1"){
    array.forEach((e) => {
      switch(e){
        case "U":
          player1.u++;
          break;
        case "C":
          player1.c++;
          break;
        case "B":
          player1.b++;
          break;
        case "L":
          player1.l++;
          break;
        case "M":
          player1.m++;
          break;
        case "R":
          player1.r++;
          break;
        }
    });
  } else {
    array.forEach((e) => {
      switch(e){
        case "U":
          player2.u++;
          break;
        case "C":
          player2.c++;
          break;
        case "B":
          player2.b++;
          break;
        case "L":
          player2.l++;
          break;
        case "M":
          player2.m++;
          break;
        case "R":
          player2.r++;
          break;
        }
    });
  }
  console.log(player1);
};

function checkWin(player){
  if(player === "player1"){
    for(var prop in player1){
      if(player1[prop] === 1){
        player1Array.push(player1[prop]);
      }
      console.log(player1Array);
      if(player1[prop] === 3){
        alert("player 1 wins");
      }
    }
    if(player1Array.length > 10){
      alert("player 1 wins");
    }
  } else {
    for(var prop in player2){
      if(player2[prop] === 1){
        player2Array.push(player2[prop]);
      }
      console.log(player2Array);
      if(player2[prop] === 3){
        alert("player 1 wins");
      }
    }
    if(player2Array.length > 10){
      alert("player 2 wins");
    }
  }
}
