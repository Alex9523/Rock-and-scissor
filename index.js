const player = document.querySelector('.player')
const computer = document.querySelector('.computer')
let playerScore = document.querySelector('.playe_score')
let computerScore = document.querySelector('.computer_score')
let game = document.querySelector('h1')
const paperImg = '<img src="img/papir.png" alt="paper">'
const rockImg = '<img src="img/Rock.png" alt="rock">'
const scissorsImg = '<img src="img/scissors.png" alt="scissors">'

function playerRand() {
    const playerArr = [paperImg, rockImg, scissorsImg]
    let rand = Math.floor(Math.random() * 3)
    computer.innerHTML = playerArr[rand]
}

function paper() {
    player.innerHTML = paperImg
    playerRand()
    score()
}

function rock() {
    player.innerHTML = rockImg
    playerRand()
    score()
}

function scissors() {
    player.innerHTML = scissorsImg
    playerRand()
    score()
}

function score() {
    let playerImg = document.querySelector('.player > img').getAttribute('Alt')
    let computerImg = document.querySelector('.computer > img').getAttribute('Alt')

    if (playerImg == computerImg) {
        game.innerHTML = "Нічия"
        game.style = 'color: blue'
    }
    else if (playerImg == "scissors" && computerImg == "rock" ||
        playerImg == "rock" && computerImg == "paper" ||
        playerImg == "paper" && computerImg == "scissors") {
        game.innerHTML = "Ти програв"
        game.style = 'color: red'
        computerScore.innerHTML = +computerScore.textContent + 1
    }
    else {
        game.innerHTML = "Ти виграв"
        game.style = 'color: green'
        playerScore.innerHTML = +playerScore.textContent + 1
    }
}

function clearScore() {
    playerScore.innerHTML = "0"
    computerScore.innerHTML = "0"
}