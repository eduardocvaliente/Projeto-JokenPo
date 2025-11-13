const result = document.querySelector('.resultado')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const resetGame = document.querySelector('.reset')

let humanScoreNumber = 0
let machineScoreNumber = 0

function soltarConfete() { //efeito confete
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]

}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = '🥲 Empatou!'
    } else if (human === 'paper' && machine === 'rock' || 
        human === 'rock' && machine === 'scissors' || 
        human === 'scissors' && machine === 'paper') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = '🥳 Você ganhou!'
        soltarConfete() //efeito
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = '🫣 Você perdeu!'
    }

    
}

function reset() {
    resetGame.classList.add('girar')

    setTimeout(() => {
        resetGame.classList.remove('girar');
        humanScoreNumber = 0
        machineScoreNumber = 0
        humanScore.innerHTML = humanScoreNumber
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = ''

    }, 500)
}
