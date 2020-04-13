let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const message_id = document.getElementById('action-message');

const getComputerChoice = () => {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

const convertToWord = (letter) => {
    if (letter === 'r') {
        return 'Rock';
    }
    if (letter === 'p') {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}

const win = (userChoice, computerChoice) => {
    const smallUserWord = 'player'.fontsize(3).sub();
    const smallCompWord = 'computer'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`
    userChoice_div.classList.add('green-glow')
    setTimeout( () => userChoice_div.classList.remove('green-glow'), 300)
    if(userScore === 5) {
        message_id.innerHTML = 'You won the game! Select rock, paper, or scissors to play again!'
        userScore = 0;
        computerScore = 0;
        }
}

const lose = (userChoice, computerChoice) => {
    const smallUserWord = 'player'.fontsize(3).sub();
    const smallCompWord = 'computer'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lose!`
    userChoice_div.classList.add('red-glow')
    setTimeout( () => userChoice_div.classList.remove('red-glow'), 300)
    if(computerScore === 5) {
        message_id.innerHTML = 'You lost the game! Select rock, paper, or scissors to play again!'
        userScore = 0;
        computerScore = 0;
        }
}

const draw = (userChoice, computerChoice) => {
    const smallUserWord = 'player'.fontsize(3).sub();
    const smallCompWord = 'computer'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`
    userChoice_div.classList.add('grey-glow')
    setTimeout( () => userChoice_div.classList.remove('grey-glow'), 300)
}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

const main = () => {
    rock_div.addEventListener('click', (e) => {
       game('r');
    })
    paper_div.addEventListener('click', (e) => {
       game('p');
    })
    scissors_div.addEventListener('click', (e) => {
       game('s');
    })
}

main();

