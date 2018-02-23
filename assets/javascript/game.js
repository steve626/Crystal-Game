//Crystal Collector game

//globals
var wins = 0;
var losses = 0;
var gameArr = [];

// FEEDBACK: maybe it would make sense to hold jewels and their attributes in an object?
var jewelOne = 0;
var jewelTwo = 0;
var jewelThree = 0;
var jewelFour = 0;

// FEEDBACK: can we make this into a function and reuse it whenever we need to reassign crystal value and the target score?
//determine random number btw 19-120 for target number
var targetNum = Math.floor(Math.random() * (120 - 20) + 19);

function startGame() {
  $("#target").html(targetNum);

  var jewelArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // FEEDBACK: Shuffle is very creative!
  //sorts jewelArr to determine value of jewels
  function Shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }

  // try to lowercase function names, as is standard in JavaScript
  gameArr = Shuffle(jewelArr);

  console.log(gameArr);

  jewelOne = gameArr[0];
  jewelTwo = gameArr[1];
  jewelThree = gameArr[2];
  jewelFour = gameArr[3];

  console.log(jewelOne);
  console.log(jewelTwo);
  console.log(jewelThree);
  console.log(jewelFour);

  // FEEDBACK: these were the values that were never changing.
  //           i tried to do the minimum work to get it working,
  //           so I only wrapped this inside a function and made
  //           sure it got recalled on reset (whenever a new game starts)

  $("#jewel-1").attr("value", jewelOne);
  console.log($("#jewel-1").attr("value"));

  $("#jewel-2").attr("value", jewelTwo);
  console.log($("#jewel-2").attr("value"));

  $("#jewel-3").attr("value", jewelThree);
  console.log($("#jewel-3").attr("value"));

  $("#jewel-4").attr("value", jewelFour);
  console.log($("#jewel-4").attr("value"));
}

// FEEDBACK: Initial launch of the game
startGame();

//assign value of crystals, assures no doubles. Just shuffle the array of possible numbers and takes the first four

//attribute value of jewels for upcoming math

// FEEDBACK: I forget what this is for, but it doesn't look like it belongs on global scope...
var playerNum = 0;

//adds value to playerNum when jewels are clicked

$(".jewel").on("click", function() {
  var test1 = parseFloat($(this).attr("value"), 10);
  playerNum = playerNum + test1;
  $("#userScore").html(playerNum);

  console.log(playerNum);

  //win/loss states

  // playerNum == targetNum, game reset, wins++
  if (playerNum === targetNum) {
    wins++;
    document.querySelector("#winCount").innerHTML = wins;
    alert("YOU WIN!");
    reset();
  }

  //go over: lose and everything resets, new numbers get generated
  //playerNum > targetNum, game reset, losses++
  if (playerNum > targetNum) {
    losses++;
    document.querySelector("#lossCount").innerHTML = losses;
    alert("Sorry, you went over");
    reset();
  }

  //game reset
  function reset() {
    gameArr = [];
    playerNum = 0;
    // FEEDBACK: just had to make sure the "value" attributes were refreshed every time,
    //           i just did this by restarting the game, but you can do it differently...
    startGame();
  }
});

// FEEDBACK: Great job! Very original, now just flex your object and function muscles!
