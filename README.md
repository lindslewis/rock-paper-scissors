# rock-paper-scissors

## description
We all grew up playing "Rock, Paper, Scissors" (or variations of it). This page was created as my first real dive into Java Script, following a mini-project assignment received in my coding bootcamp with the University of Washington. 
Give it a try, hopefully it'll be a good way to pass some time and receive a little sass.

## table-of-contents
1. usage
2. composition
3. lessons-learned
4. credits

 ![rps-webpage](https://user-images.githubusercontent.com/104105172/175758031-b429b149-88fe-4d98-9db1-0f6514c12f24.jpg)
 
## usage
This webpage is very simple in it's usage. You're given a starting prompt in an alert window, asking if you'd like to play a game. If you opt to continue, you are directed to select an option from "R" (for rock), "P" (for paper), or "S" (for scissors). With whatever selection you make, you'll be given feedback on whether you've won the round, lost the round, or tied with the computer. You'll be able to see your stats from previous rounds if you continue to play for several rounds.

## composition
Given this is my first real attempt at creating a webpage utilizing Java Script, I'm still learning more basic .js code, so the functions are not at all compartmentalized like they could be. 

To begin, I declared 5 variables (var) for the game to utilize. These defined the results of the game (win, loss, tie), the choices that the users and computer have to choose from for input, and the stats collections for wins, losses, and ties. 

I began with a function that would begin the game, using a confirm alert for the user to agree to play the game. 

The next major function used (and re-used quite often) was the function that would start the game and bring up the selection alert for the user to choose what move they'd make.  From there, it was a repeated series of choice comparisons using "if" and "else" in order to determine the means for what equated to a win, to a loss, or to a tie. 
Each round of game is followed by an alert that displays the user's stats from their games thus far.

## lessons-learned
Biggest lesson here so far is my need to call my functions after I create them. I very much am beginning to understand the need for consistent naming conventions, especially in order to prevent confusion between my own named functions/variables/elements/etc and actual methods that are used in the language to execute code.

## credits
Information was gleaned from [W3Schools](https://www.w3schools.com/default.asp) for grasping JS syntax and function use.
Was provided with started code for the index.html file from the University of Washington Coding Bootcamp.
Was assisted through the steps that would be needed to begin this project by instructors and TA's via the University of Washington Coding Bootcamp.

