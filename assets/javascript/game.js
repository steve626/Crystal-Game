//crystal counting javascript
//globals
var wins = 0;
var losses = 0;
var gameArr = [];
var playerNum = 0;

var jewelOne = 0;
var jewelTwo = 0;
var jewelThree = 0;
var jewelFour = 0;

//generates random number for the target number, btw 19 & 120
function randomNumber(){
    return Math.floor(Math.random()*(120-20)+19);
   }

   //sets the targetNum equal to the random number generated (double step?)
   var targetNum = randomNumber();

   //gameplay for looping
   function startGame(){

    $('#target').html(targetNum);

    
   //crystal numbers (4) btw 1 and 12, should have at least one odd and/or even number and no duplicates
    var jewelArr =[1,2,3,4,5,6,7,8,9,10,11,12];

//sorts jewelArr to determine value of jewels
    function shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    var gameArr = shuffle(jewelArr);

    console.log("gameArr",gameArr);

  //assign value of crystals, assures no doubles. Just shuffle the array of possible numbers (jewelArr) and takes the first four

        jewelOne = gameArr[0];
        jewelTwo = gameArr[1];
        jewelThree = gameArr[2];
        jewelFour = gameArr[3];

    //attribute value of jewels for upcoming math

    $('#jewel-1').attr("value", jewelOne);
        console.log($('#jewel-1').attr("value"));

    $('#jewel-2').attr("value", jewelTwo);
        console.log($('#jewel-2').attr("value"));

    $('#jewel-3').attr("value", jewelThree);
        console.log($('#jewel-3').attr("value"));

    $('#jewel-4').attr("value", jewelFour);
        console.log($('#jewel-4').attr("value"));

          
    //end of startgame fxn
};

//game reset
function reset(){
     gameArr = [];
     playerNum = 0;  
     //sets user score to zero on start of new game. Otherwise starts with end score of previous game and was confusing, had poor optics
     $("#userScore").text("0");
     //only way to get a new target number. Wouldn't look at random number fxn from above
     targetNum = Math.floor(Math.random()*(120-20)+19);
     startGame();
            
};

//adds value to playerNum when jewels are clicked

$('.jewel').on('click', function()
    {
        //parseFloat converts string back to interger for math
        var test1 = parseFloat($(this).attr("value"),10);

        //adds new numbers to previous total
            playerNum = playerNum + test1;
                $('#userScore').html(playerNum);

        //end game states, if target number reached: win, if go over, lose

    if (playerNum === targetNum){
        wins++;
        document.querySelector('#winCount').innerHTML = wins;
        alert("YOU WIN!");
        reset();       
    } else if (playerNum > targetNum){
         losses++;
         document.querySelector('#lossCount').innerHTML = losses;
         alert("Sorry, you went over");
         reset();
    };
});

// starts game play once this page loads. 
startGame();