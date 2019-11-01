let tryNumber = 5;

const random = Math.random() * 20;
const number = Math.round(random);
let isUserWin = false;


function tryAgain () {
    const payerChoos = parseInt(prompt('Введите число'));
    tryNumber -=1;

    if (payerChoos < number) {
        console.log('Меньше')
    } else if (payerChoos > (number)) {
        console.log('Больше')
    } else if (payerChoos == (number)) {
        isUserWin = true;
        tryNumber = 0;
    }
    
}

while (tryNumber > 0) {
    tryAgain();
}

if (isUserWin) {
    console.info('YOU WIN');
} else {
    console.log('YOU LOSE')
}
