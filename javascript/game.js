// Pseudo Coding

// the game consists of 4 crystals with random results
// Every crystal needs to have a random number between 1 - 12
//The random number generated must be between 19-120
//the random number must reset and be regenerated with every win or loss
//When clicking any crystal, it should be added with the previous result until it equals the total score
//If it is not equal, we lose and increment loss counter then we start over
//If it is equal, we increment a win counter


$(document).ready(function() {
    var yourMatchingNumber = 0;
    var randomNum = randomNumGen();
    
    var wins=0
    var losses=0
    var crystals;
