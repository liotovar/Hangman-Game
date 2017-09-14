window.onload = function () {

  var word = prompt("In lowercase, type a word to be guessed.");
  var guess ;
  var guesses = [ ];
  var lives = 10;
  var counter = 0;
  var space = 0;  
  var showLives = document.getElementById("mylives");
  var showGuesses = document.getElementById("guessing");

  function result() {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'myWord');
      guess = document.createElement('li');
      guess.id = 'letter';
      guess.innerHTML = guesses[i];
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space +=1;
      }

      else if (word[i] === " "){
        guess.innerHTML = " ";
        space +=1;
      }
      else {
        guess.innerHTML = "_"
      }
      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  function comments() {
    showLives.innerHTML = "you have " + lives + " lives";
    
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      var replay = confirm("Better luck next time. do you want to play again?");
          if(replay){
            location.reload();
            } else {
              alert("Thank you for playing!");
            }
    }

      if (counter + space >= guesses.length) {
        showLives.innerHTML = "You Win!";
        var winReplay = confirm("Congrats! You Won! Do you want to play")
            if(winReplay){
            location.reload();
            } else {
              alert("Thank you for playing");
            }
      //I was not able to add the win count. 
      }
  }

  function check() {
      var guessedLetters = [];

      document.onkeyup = function() {
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      console.log(userGuess);
      guessedLetters.push(userGuess);
      console.log(guessedLetters);
      for(var i = 0; i < word.length; i++)
      {

        if(userGuess === word[i]) {
          guesses[i].innerHTML = userGuess;
          counter++;
          console.log(counter);
        } 
     }

     var j = (word.indexOf(userGuess));
     if (j === -1) {
      lives -=1;
      comments();
     }
     showGuesses.innerHTML = "<p> Guesses so far </p>" + guessedLetters;
      
    }
  }

function play() {
  result();
  comments();
  check();
  console.log("play function works");
}

play();
}
