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

//the index: starts at 0, so Joe is 0, Henry is 1, etc.
var names = ["Joe", "Henry", "William", "Niles"]

//THIS GIVES A RANDOM NUMBER FROM 0 TO O.9999999999
var randomNum = Math.random()
console.log(randomNum)

//names length is how many items are in the names var
var numTimesLength = randomNum * names.length
console.log(numTimesLength)

//this method will round a number down
var roundDown = Math.floor()
console.log (roundDown)
console.log(names[roundDown])


//the above starting at var names is how to get a random number/selection, can consolidate, see below
//this below, read from the inside out!!!!! so start with the yellow parantheses
console.log(names[Math.floor(Math.random()*names.length)])