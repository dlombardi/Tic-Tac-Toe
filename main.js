'use strict'

$(document).ready(init);

var ref = new Firebase('https://tic-tac-toed.firebaseio.com');
var player1Data = ref.child('player1');
var player2Data = ref.child('player2');

function init() {
  gameReset();
  player1Data.set(player1);
  player2Data.set(player2);
  $("td").on('click', gameMove)
}

var turn = false;
var turns = [];
var player1Array = [];
var player1 = {
  u:  0,
  c:  0,
  b:  0,
  l:  0,
  m:  0,
  r:  0,
  dl: 0,
  dr: 0
};
var player2Array=[];
var player2 = {
  u:  0,
  c:  0,
  b:  0,
  l:  0,
  m:  0,
  r:  0,
  dl: 0,
  dr: 0
};

function gameReset(){
  ref.remove();
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
      player1Data.update(player1);
      player1Data.on('value', function(snapshot){
        var data = snapshot.val();
        checkWin(data, "player 1");
      });
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
      player2Data.update(player2);
      player2Data.on('value', function(snapshot){
        var data = snapshot.val();
        checkWin(data, "player 2");
      });
    }
  }
}


function gamePieceParse(player, string){
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

function checkWin(data, playerString){
  for(var prop in data){
    if(data[prop] === 3){
      alert(playerString +  " wins");
    }
  }
}
