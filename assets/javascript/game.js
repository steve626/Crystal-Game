//Crystal Collector game
    //globals

var wins = 0;
var losses = 0;
var gameArr =[];




   // $(document).ready(function())

   //determine random number btw 19-120 for target number

var targetNum = (Math.floor(Math.random()*(120-20)+19));


    console.log(targetNum);

    $('#target').html(targetNum);



   //crystal numbers (4) btw 1 and 12, should have at least one odd and/or even number and no duplicates (multiply lowest number by 1.5 to get one odd or even number?)
        //var randomNumber = Math.Floor(math.random () * (maxNum - MinNum +1 ())+ minNum)

    var jewelArr =[1,2,3,4,5,6,7,8,9,10,11,12];


//sorts jewelArr to determine value of jewels
    function Shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    var gameArr = Shuffle(jewelArr);

    console.log(gameArr);




  //assign value of crystals, assures no doubles. Just shuffle the array of possible numbers and takes the first four

    var jewelOne = gameArr[0];
    var jewelTwo = gameArr[1];
    var jewelThree = gameArr[2];
    var jewelFour = gameArr[3];

    console.log(jewelOne);
    console.log(jewelTwo);
    console.log(jewelThree);
    console.log(jewelFour);

    //attribute value of jewels for upcoming math


    $('#jewel-1').attr("value", jewelOne);
        console.log($('#jewel-1').attr("value"));

    $('#jewel-2').attr("value", jewelTwo);
        console.log($('#jewel-2').attr("value"));

    $('#jewel-3').attr("value", jewelThree);
        console.log($('#jewel-3').attr("value"));

    $('#jewel-4').attr("value", jewelFour);
        console.log($('#jewel-4').attr("value"));


var playerNum = 0;

//adds value to playerNum when jewels are clicked

$('.jewel').on('click', function()
    {
        var test1 = parseFloat($(this).attr("value"),10);
            playerNum = playerNum + test1;
                $('#userScore').html(playerNum);

                console.log(playerNum)

            
//win/loss states

//while (playerNum < targetNum){
   
   // playerNum == targetNum, game reset, wins++
   if (playerNum === targetNum){
       wins++;
       document.querySelector('#winCount').innerHTML = wins;
       alert("YOU WIN!");
       reset();
       
   };


   //go over: lose and everything resets, new numbers get generated
        //playerNum > targetNum, game reset, losses++
    if (playerNum > targetNum){
        losses++;
        document.querySelector('#lossCount').innerHTML = losses;
        alert("Sorry, you went over");
        reset();
       
    };
 
     //game reset
function reset(){
     gameArr =[];
     playerNum = 0;  
   
};

});






