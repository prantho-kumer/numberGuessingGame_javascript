let playerOneInput_label = document.querySelector(".playerOneInput_label");
var playerOneInput = document.getElementsByClassName('playerOneInput')[0];
let playerTwoInput_label = document.querySelector(".playerTwoInput_label");
let playerTwoInput = document.querySelector('.playerTwoInput');

let playerOneValue;

var playerOneBtn = document.getElementsByClassName('playerOneBtn')[0];
var playerTwoBtn = document.querySelector('.playerTwoBtn');
let startOver = document.querySelector(".startOver");


var showError = document.getElementById('error');
let gameResult = document.querySelector("#gameResult");

var countBtnClick = 0;
var totalAttempt = 5;
var attemptLeft = 5;





playerOneBtn.addEventListener('click', function () {
  // if empty
  if (playerOneInput.value == "") {
    showError.innerHTML = "Please enter a valid number."
  } else if (playerOneInput.value > 10 || playerOneInput.value < 1) {
    // if not empty and not between 1-10
    showError.innerHTML = "Please enter a number between 1-10"
    playerOneInput.value = "";
  } else {

    // if between 1-10 and number
    if (playerOneInput.value - 100) {
    //  if value is a number (start game)
        // hide error
      showError.innerHTML = "";
      // store player 1 value in a var
      playerOneValue = playerOneInput.value
      console.log(playerOneValue);
      // hide player 1 ui and show player 2 UI
    playerOneInput_label.style.display = "none";
     playerOneInput.style.display = "none";
     playerTwoInput.style.display = "block";
     
    playerTwoInput_label.style.display = "block";
    playerOneBtn.style.display = "none";
    playerTwoBtn.style.display = "block";
      

      playerTwoBtn.addEventListener('click', function () {
        if (playerOneValue == playerTwoInput.value) {
          // if both value match
          gameResult.innerHTML = "Congratulations!! You Won!!!";
          gameResult.style.color = "green";

          // hide second player button and show start over button
          playerTwoBtn.style.display = "none";
          startOver.style.display = "block";

          // reload if startover button is pressed
          startOver.addEventListener("click", () => {
            location.reload();
          });
        }
        else {
          // if both value doesn't match
          attemptLeft = attemptLeft - 1;
          if (attemptLeft == 0) {
            gameResult.style.color = "red";
            gameResult.innerHTML = "You Lose!!" + "No more life left";
            playerTwoBtn.style.display = "none";
            startOver.style.display = "block";
            
            // reload if startover button is pressed
            startOver.addEventListener('click', () => {
              location.reload();
            })
          } else {
             
            gameResult.style.color = "red";
            gameResult.innerHTML = "You Lose!!" + "Life Left " + attemptLeft;
            playerTwoBtn.innerHTML = "Try Again";
          }
       
        }
    })
      

    } else {
      // if value is text
     console.log('text');
      showError.innerHTML = "This is a text. Please enter a valid number.";
      playerOneInput.value = "";
      }
  }

})
