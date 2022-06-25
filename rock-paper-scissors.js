//what do I have to do to play rock, paper, scissors?


//TODO:need to randomly choose computer choice
    //TODO: randomly select either r, p, or s
    //TODO: store in variable
    
//TODO:need to collect users choice (R,P,S)
     //TODO: ask user for r, p, or, s via pop-up
     //TODO: edgecase: something that is outside the normal bounds of the assignment. user doesn't pick r p or s
        //can make them lose automatically or give them an invalid input

//TODO: figure out/generate results
    //TODO: WIN: R:S P:R, S:P
    //TODO: LOSS S:R R:P P:S
    //TODO: TIE S:S R:R P:P

//log stats
    //TODO: create variables for win, loss, and tie
    //TODO: update appropriate variable based on result
    //TODO: display to user

//keep playing until quit


//THIS GIVES A RANDOM NUMBER FROM 0 TO O.9999999999
// var randomNum = Math.random()
// console.log(randomNum)

// //names length is how many items are in the names var
// var numTimesLength = randomNum * names.length
// console.log(numTimesLength)

// //this method will round a number down
// var roundDown = Math.floor()
// console.log (roundDown)
// console.log(names[roundDown])
//the index: starts at 0, so Joe is 0, Henry is 1, etc.






// let initialChoice = ["Y", "N"]

//the above starting at var names is how to get a random number/selection, can consolidate, see below
//this below, read from the inside out!!!!! so start with the yellow parantheses
// console.log(names[Math.floor(Math.random()*names.length)])

// alert("Would you like to play a game?")

var result = ["Congrats! You win!", "Boo. You lose!", "No difference. It's a tie!"]
var choices = ["R", "P", "S"]
var wins = 0
var ties = 0
var losses = 0

function initialChoice() {
    let initialChoice = confirm("Would you like to play a game?");
    if(initialChoice){
       startGame()
    } else{
        alert("Why are you here?")
        initialChoice()
    }
}

function startGame() {
    var userInput = prompt("It is your turn! Select R, P, or S");
    userInput = userInput.toUpperCase()
    checkChoice(userInput)
}
function checkChoice(userInput) {
    console.log(userInput)
    if(userInput == "R" || userInput == "P" || userInput == "S"){
        var compChoice = choices[Math.floor(Math.random()*choices.length)]
    } else{
        alert("Can you read? Invalid choice.")
        startGame()
    }
        if(compChoice == userInput){
            alert("No difference, it's a tie.")
            // ties = ties+1 equivalent below
            ties++
            alert("Stats:\n Wins:" +wins+ "\n Losses:" +losses+ "\n Ties:" +ties+ "\n Keep going!");
            startGame()
        }

        if(userInput == "R") {
            if(compChoice == "S"){
                alert("Who would have thought... You won!")
                wins++
                alert("Stats:\n Wins:" +wins+ "\n Losses:" +losses+ "\n Ties:" +ties+ "\n Keep going!");
                startGame()
            }
            if (compChoice == "P"){
                alert("Ha. You're the loser.")
                losses++
                alert("Stats:\n Wins:" +wins+ "\n Losses:" +losses+ "\n Ties:" +ties+ "\n Keep going!");
                startGame()
            }
        }
        if(userInput == "P") {
            if(compChoice == "R"){
                alert("Look at you. Full of surprises here. You win.")
                wins++
                alert("Stats:\n Wins:" +wins+ "\n Losses:" +losses+ "\n Ties:" +ties+ "\n Keep going!");
                startGame()
            }
            if(compChoice == "S"){
                alert("No surprises here. You lose.")
                losses++
                alert("Stats:\n Wins:" +wins+ "\n Losses:" +losses+ "\n Ties:" +ties+ "\n Keep going!");
                startGame()
            }
        }
        if(userInput == "S") {
            if (compChoice == "P"){
                alert("Are you cheating? You win.")
                wins++
                alert("Stats:\n Wins:" +wins+ "\n Losses:" +losses+ "\n Ties:" +ties+ "\n Keep going!");
                startGame()
            }
            if(compChoice == "R"){
                alert("Frustrated? You've lost.")
                losses++
                alert("Stats:\n Wins:" +wins+ "\n Losses:" +losses+ "\n Ties:" +ties+ "\n Keep going!");
                startGame()
            }
        }
        
    }
initialChoice()

//window.alert for stats
