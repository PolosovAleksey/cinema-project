let buttomShowModalPresent = document.getElementById('getPresentModal');
let ModalPresentWindow = document.getElementById('modalPresent');
let closePresentWindow = document.getElementById('closeModalPresent');
let sendPresentInfo = document.getElementById('sendPresentInfo');

buttomShowModalPresent.onclick = function () {
    
    ModalPresentWindow.style.display = 'block';
}

closePresentWindow.onclick = function () {
    
    ModalPresentWindow.style.display = 'none';
}

sendPresentInfo.onclick = function () {
    let Guestname = document.getElementById('Guestname');
    let selectGuest = document.getElementById('selectGuest');
    
    if(Guestname.value) {
        console.log('Guestname', Guestname.value);
        Guestname.style.border = '1px solid #bebebe'
    } else {
        Guestname.style.border = '2px solid red'
    }

    if(selectGuest.value !=1) {
        console.log('selectGuest',selectGuest.value);
        selectGuest.style.border = '1px solid #bebebe'
    } else {
        selectGuest.style.border = '2px solid red'
    }
    
    if (selectGuest.value !=1 && Guestname.value) {
        ModalPresentWindow.style.display = 'none'
    }
    
}

let Guestname = document.getElementById('Guestname')
Guestname.onchange = function () {
    console.log('До нажатия отправить: Guestname', Guestname.value)
}

let selectGuest = document.getElementById('selectGuest')
selectGuest.onchange = function () {
    console.log('До нажатия отправить: selectGuest', selectGuest.value)
}
