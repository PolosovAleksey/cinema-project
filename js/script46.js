function itsmyname() {
    let name = document.getElementById('MyName').value;
    let text = name;
    document.getElementById('result').innerHTML = text;
}
document.getElementById('done').onclick = itsmyname;

function numresult() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    if (num1 > num2) {
        res = num1;
    } else if (num1 < num2) {
        res = num2;
    } else if (num1 == num2) {
        res = num1;
    }

    document.getElementById('numres').innerHTML = res;
}
document.getElementById('getres').onclick = numresult;

    
const min = parseInt(prompt('Введите минимальное число'));
const max = parseInt(prompt('Введите максимальное число'));
    

function randomInteger(min, max) {
    
    let rand = min + Math.random() * (max + 1 - min);
    let g = Math.floor(rand);
    document.getElementById('vivodres3').innerHTML = g;
  }
  
randomInteger(min,max);
  

