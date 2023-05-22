let move = []
let sum= 0

let hasBlackJack = false
let isAlive = false
let message = ""



let messageEl= document.getElementById("message-el")

let sumEl= document.querySelector('#sum-el')
let cardEl= document.querySelector("#cards-el")

let player = {
    name: "Per",
    chips: 145

}



let playerEl = document.querySelector("#player-el")

playerEl.textContent= player.name + ": $" + player.chips
function getRandomCard(){
    let randomNess = Math.floor(Math.random() * 13) + 1
    if (randomNess >10){
        return 10
    }
    else if (randomNess === 1){
        return 11
    }
    else{
        return randomNess
    }
}

function startGame(){
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    move = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
    sumEl.textContent = "Sum: " + sum

    cardEl.textContent= "Cards: "

    for (let w=0; w<move.length; w++){
        cardEl.textContent += move[w] + " "
    }


    if (sum < 21){
        message= "Do you want to draw a new card?"

    }
    else if (sum === 21){
        message= "You've got Blackjack!"
        hasBlackJack = true
        
    }
    else{
        message= "You are out of the Game!"
        isAlive = false
    }

    messageEl.textContent= message
}

function newCard(){

    if (isAlive=== true && hasBlackJack=== false){
        console.log("Drawing a new Card")
        let card = getRandomCard()
        sum += card
    
        move.push(card)
        console.log(move)
        
    
        renderGame()
        
    }
}