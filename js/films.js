const janr1 = 'Фантастика'
const janr2 = 'Боевик'
const janr3 = 'Приключения'
const janr4 = 'Фэнтези'
const janr5 = 'Драма'
const janr6 = 'Комедия'
const janr7 = 'Мультфильм'

let start_film1 = '10.00'
let start_film2 = '12.00'
let start_film3 = '14.00'
let start_film4 = '16.00'

let name_film1 = 'Человек-паук'
let name_film2 = 'Собачья жизнь 2'
let name_film3 = 'История игрушек 4'
let name_film4 = 'Люди в черном: Интернешнл'

let janr_film1 = janr1+', '+janr2+', '+janr3
let janr_film2 = janr4+', '+janr5+', '+janr6
let janr_film3 = janr7+', '+janr4+', '+janr6
let janr_film4 = janr1+', '+janr2+', '+janr6


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

element_start_film1.innerHTML = start_film1
element_name_film1.innerHTML = name_film1
element_janr_film1.innerHTML = janr_film1

element_start_film2.innerHTML = start_film2
element_name_film2.innerHTML = name_film2
element_janr_film2.innerHTML = janr_film2

element_start_film3.innerHTML = start_film3
element_name_film3.innerHTML = name_film3
element_janr_film3.innerHTML = janr_film3

element_start_film4.innerHTML = start_film4
element_name_film4.innerHTML = name_film4
element_janr_film4.innerHTML = janr_film4
