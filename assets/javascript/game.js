//Global Variables
var randomNumber = Math.floor((Math.random() * 100) + 20); //Random number user tries to get too

var randomCrystalOne = Math.floor((Math.random() * 3) + 1);
var randomCrystalTwo = Math.floor((Math.random() * 7) + 1);
var randomCrystalThree = Math.floor((Math.random() * 6) + 1);
var randomCrystalFour = Math.floor((Math.random() * 11) + 1);

var winCount = 0;
var lossCount = 0;

var jewelMeter = 0;

//Functions

$(document).ready(function(){  //Show Random Number for user to get to
    
    $("#randomNumberStart").html(randomNumber);
    $("#wins").html(winCount);
    $("#loses").html(lossCount);
        
});

$("#jewel1").click(function(){  //Makes Jewel 1 button clickable
    
    $("#jewel1").html(randomCrystalOne);
    console.log(randomCrystalOne);
    jewelMeter = randomCrystalOne + jewelMeter;
    $("#score").html(jewelMeter);
    scoreEqualsRandom();
    
})

$("#jewel2").click(function(){  //Makes Jewel 2 button clickable
    
    $("#jewel2").html(randomCrystalTwo);
    console.log(randomCrystalTwo);
    jewelMeter = randomCrystalTwo + jewelMeter;
    $("#score").html(jewelMeter);
    scoreEqualsRandom();
})

$("#jewel3").click(function(){  //Makes Jewel 3 button clickable
    
    $("#jewel3").html(randomCrystalThree);
    console.log(randomCrystalThree);
    jewelMeter = randomCrystalThree + jewelMeter;
    $("#score").html(jewelMeter);
    scoreEqualsRandom();
})

$("#jewel4").click(function(){  //Makes Jewel 4 button clickable
    
    $("#jewel4").html(randomCrystalFour);
    console.log(randomCrystalFour);
    jewelMeter = randomCrystalFour + jewelMeter;
    $("#score").html(jewelMeter);
    scoreEqualsRandom();
})


function scoreEqualsRandom(){
    
    if (randomNumber === jewelMeter){  // Adds one to win count
        
        alert("Yea, you got it!");
        winCount++;
        $("#wins").html(winCount);
        resetFunction();
        
    }else if(randomNumber > jewelMeter){ //Logs to console that user guess is still too low
        
        console.log("Too low..");
        
    }else if (randomNumber < jewelMeter){ // Adds one to loss count
        
        alert("Sorry, try again loser...");
        lossCount++;
        $("#loses").html(lossCount);
        resetFunction();                    //After one game -->  keeps going to this else if 
        
    }else {
        
        resetFunction();
        
    }
    
}

function resetFunction(){

 randomNumber = Math.floor((Math.random() * 100) + 20); //Random number user tries to get too
    
 randomCrystalOne = Math.floor((Math.random() * 3) + 1);
 randomCrystalTwo = Math.floor((Math.random() * 7) + 1); //SCOPE!!! MAKE SURE TO NOT USE VAR TO 
 randomCrystalThree = Math.floor((Math.random() * 6) + 1); // REFERENCE GLOBAL VARIABLES
 randomCrystalFour = Math.floor((Math.random() * 11) + 1);
    
 jewelMeter = 0;
   
$("#randomNumberStart").html(randomNumber);
$("#score").html(jewelMeter);
 
}

resetFunction();