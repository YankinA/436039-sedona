var link = document.querySelector('.open-form');

var serchForm = document.querySelector('.form-index');

var form = document.querySelector('form');
var checkin = document.querySelector('[name=checkin]');
var checkout = document.querySelector('[name=checkout]');
var people = document.querySelector('[name=number-people]');
var child = document.querySelector('[name=number-child]');

var storageChild = localStorage.getItem('child');
var storagePeople = localStorage.getItem('people');
var storageCheckin = localStorage.getItem('checkin');
var storageCheckout = localStorage.getItem('checkout');

// при работе js срабатывает событие по документу и форма закрыта по умолчанию
document.addEventListener('DOMContentLoaded', function ready() {
    serchForm.classList.add('form-show');
});

// ESC
window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (!serchForm.classList.contains('form-show')) {
        serchForm.classList.add('form-show');
        }
    }
});

link.addEventListener('click', function (evt) {
    evt.preventDefault();
    serchForm.classList.toggle('form-show');
    serchForm.classList.add('form-animation');

    if (storageChild || storagePeople || storageCheckin || storageCheckout) {
        child.value  = storageChild;
        people.value = storagePeople;
        checkin.value = storageCheckin;
        checkout.value =  storageCheckout;
    }
});

form.addEventListener('submit', function (evt) {
    if (!child.value || !people.value || !checkin.value || !checkout.value) {
        evt.preventDefault();
        alert('мне нужно больше данных');
    } else {
          localStorage.setItem('child', child.value);
          localStorage.setItem('people', people.value);
          localStorage.setItem('checkin', checkin.value);
          localStorage.setItem('checkout', checkout.value);
    }
});
//в два TABa
