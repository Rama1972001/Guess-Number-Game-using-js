# Number Guessing Game using js

## Try it: https://guess-number-created-by-rama1092022.netlify.app

This is a simple number guessing game built with JavaScript and the DOM API. The game generates a random number between 1 and 20 and prompts the user to guess the number. The user can input their guess and click a "check" button to see if their guess is correct or not. If the guess is correct, the user wins and the correct number is displayed. If the guess is incorrect, the user loses a point and is prompted to guess again until they run out of points or correctly guess the number. The code also includes a feature to keep track of the user's high score, and a button to start a new game.

## Features
* Random number generation: The code uses the Math.random() function to generate a random number between 1 and 20, which is the number that the user will have to guess.
* User input: The user can input their guess through a text field and submit it by clicking the check button.
* Feedback: The code provides feedback on whether the user's guess is correct or not. If the guess is correct, the user wins and the correct number is displayed. If the guess is incorrect, the user loses a point and is prompted to guess again.
* Score tracking: The code keeps track of the user's score, which starts at 20 and decreases by 1 for each incorrect guess. The score is displayed on the page.
* High score: The code keeps track of the user's high score and displays it on the page.
* New game button: The code includes a button that allows the user to start a new game, which generates a new random number and resets the score and high score.

## Technologies

* JavaScript: The game logic and functionality is implemented using JavaScript.
* DOM API: The code uses the DOM API to manipulate the HTML and CSS of the page, update the content and handle user input.
* HTML & CSS: The code uses HTML and CSS to create the layout and design of the page.
## Usage
1. Open the index.html file in a web browser.
2. Input your guess in the text field and click the check button.
3. Continue guessing until you correctly guess the number or run out of points.
4. Click the "play again" button to start a new game.
## Customization
* Number range: You can customize the number range by changing the value of the number variable in the code.
* Maximum number of guesses: You can customize the maximum number of guesses by changing the value of the score variable in the code.
* Visual appearance of the game can be customized by editing the CSS file.
## Note
* This code is a simple game that demonstrates basic JavaScript and DOM manipulation skills.
* The code uses event listeners to handle user input, arrow function and ternary operator (instead of if else) in some places and also refactoring technique to make the code more readable, efficient and get rid of the duplicated code.
## Enjoy Guessing!
