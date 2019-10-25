let arr1 = [1, 25, 'itsstr', true, false];

console.log('Задача 1:', arr1);

a3 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
    };

    for (let key in a3) {
        if (key.length>4) {
            console.log('Задача 2:',a3[key]);
        }
    }

let a7 = {
    'name': 'Petya',
    'age': '23',
    'country': 'Russia',
}

function addtoarr(){
let first = document.getElementById(['u7-key__input']).value;
let second = document.getElementById(['u7-value__input']).value;
a7[first] = second;
console.log('Задача 3:', a7);
}


document.getElementById('u7__button').onclick = addtoarr;
console.log(a7);

const a = ['Tor', 'Lokki', 'Odin', 34, 'privet'];

for (i=0; i<a.length; i++) {
    console.log('Задание 4:', a.length)
}


d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78]

console.log('Задание 5:', d);

let a1 = [];
let a2 = [];

for (let i=0; i<d.length; i++) {
    if (d[i] % 2 == 0 && d[i] != 0) {
        a1.push(d[i]);
    } else if (d[i] != 0) {
        a2.push(d[i]);
    }
}

console.log('Четные:', a1);
console.log('Нечетные:', a2);

let max = d[0];
for (let i=0; i<d.length; i++) {
    if (d[i]>max) {
        max = d[i];
    }
}

console.log('Задание 6:', max);