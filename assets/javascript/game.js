    var choices= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var userguess;
    var computerguess=null;
    var wins =0;
    var losses =0;
    var guessesleft = 9;
    var guessesSofar = []; 

    document.onkeyup = function() {
        var userguess = String.fromCharCode(event.keyCode).toLowerCase(); 
        var computerguess = choices[Math.floor(Math.random()*choices.length)]; 
        var guessesSofar = document.createElement(guessesSofar);
        guessesSofar.innerText = (" "+ userguess);        
        document.getElementById("GSF").appendChild(guessesSofar);         

        if (userguess == computerguess) {
            alert("Winner Winner Chicken Dinner!");
            wins++;
            guessesleft = 9; 
            document.getElementById("GSF").innerText= "Your Guesses so far:";
            document.getElementById("W").innerText= "Wins:  " + wins;
        }
        else if (guessesleft == 0){
            alert("Try again, May the odds be in your favor");
            losses++;
            guessesleft = 9;
            document.getElementById("GSF").innerText= "Your Guesses so far:"; 
            document.getElementById("L").innerText= "Losses:  " + losses;
        }
        else if (userguess !== computerguess){
            document.getElementById("GL").innerText= "Guesses Left: " + guessesleft--;
        } 
    }