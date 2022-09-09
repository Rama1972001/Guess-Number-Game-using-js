'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
//trunc remove all  decimals after comma
//let :because we want to re-assign it
//document.querySelector('.number').textContent = number; *** we can remove comment here to show it while developing , put in real it should be hidden!

//let because we will change it later
let score = 20; //state variable
let highScore = 0; // high score initialized

//we created function because we are repeating the same line of code in different places( here function is to avoid duplicating peace of code)
const printMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const printScore = function(score) {
        document.querySelector('.score').textContent = score;
    }
    /************************************* */
    //handling click on button!
document.querySelector('.check').addEventListener('click', function() {


    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    // console.log(typeof guess); ---> this will return string!!, we want to compare guess (string) with random, generated number(number), so we had to convert using Number().

    if (!guess) { //if we click check without enter number(no input)
        printMessage('There is no number!😒');

        //player wins
    } else if (guess === number) {
        printMessage(' ✔ Correct Number 🎉 ');
        document.querySelector('.number').textContent = number; //show the number

        //manipulating style
        document.querySelector('body').style.backgroundColor = '#008000';
        document.querySelector('.number').style.width = '30rem';


        //high score will be compared to score

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //Refactoring .. to get rid of duplicated code ( the duplicated code is bellow commented)
    } else if (guess !== number) {

        if (score > 1) {
            printMessage(guess > number ? 'Too High!📈 ' : 'Too Low!📉'); //similar to if statement
            score--;
            printScore(score); //call function
        } else {
            printMessage('You Lost The game 😥 ');
            printScore(0); //update to zero(lost last score , update from 1 to 0)
        }
    }
});
/************************************** */
//The duplicated code
/*
    } else if (guess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!📈 ';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The game 😥 ';
            document.querySelector('.score').textContent = 0; //update to zero(lost last score , update from 1 to 0)
        }

    } else if (guess < number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!📉';

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The game 😥 ';
            document.querySelector('.score').textContent = 0; //update to zero(lost last score , update from 1 to 0)
        }



    }

});

*/
/***************************************** */
//handling click on button!
document.querySelector('.again').addEventListener('click', function() {

    number = Math.trunc(Math.random() * 20) + 1;
    printMessage('Start guessing...');
    printScore(20);
    document.querySelector('.guess').value = " "; //clear text area
    document.querySelector('.number').textContent = '?';

    //manipulate style
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});