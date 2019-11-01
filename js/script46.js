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

    

    

function randomInteger() {
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    
    let rand = min + Math.random() * (max + 1 - min);
    let g = Math.floor(rand);
    document.getElementById('vivodres3').innerHTML = g;
    console.log(min)
    console.log(max)
    console.log(rand)
    console.log(g)
  }
  
  document.getElementById('getres2').onclick = randomInteger;


