let films = [
    ['10.00', 'Человек паук', 1],
    ['12.00', 'Собачья жизнь 2', 0],
    ['14.00', 'История игрушек 4', 1],
    ['16.00', 'Люди в черном: Интернешнл', 3]
]

let janrs = ['Фантастика',
            'Боевик',
            'Приключения',
            'Фэнтези',
            'Драма',
            'Комедия',
            'Мультфильм']


let film = [];
    for (i = 0; i < films.length; i++) {
        for (j = 0; j < films[i].length; j++) {
        film.push(films[i][j]);
            console.log(films[i][j]);
        }
    }
    console.log(film);

let element_start_film1 = document.getElementById('start_film1')
let element_name_film1 = document.getElementById('name_film1')
let element_janr_film1 = document.getElementById('janr1')

let element_start_film2 = document.getElementById('start_film2')
let element_name_film2 = document.getElementById('name_film2')
let element_janr_film2 = document.getElementById('janr2')

let element_start_film3 = document.getElementById('start_film3')
let element_name_film3 = document.getElementById('name_film3')
let element_janr_film3 = document.getElementById('janr3')

let element_start_film4 = document.getElementById('start_film4')
let element_name_film4 = document.getElementById('name_film4')
let element_janr_film4 = document.getElementById('janr4')

element_start_film1.innerHTML = film[0];
element_name_film1.innerHTML = film[1];
element_janr_film1.innerHTML = janrs[film[2]];

element_start_film2.innerHTML = film[3];
element_name_film2.innerHTML = film[4];
element_janr_film2.innerHTML = janrs[film[5]];

element_start_film3.innerHTML = film[6];
element_name_film3.innerHTML = film[7];
element_janr_film3.innerHTML = janrs[film[8]];

element_start_film4.innerHTML = film[9];
element_name_film4.innerHTML = film[10];
element_janr_film4.innerHTML = janrs[film[11]];


