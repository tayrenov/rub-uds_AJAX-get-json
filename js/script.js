'use strich';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {// эвент изменение value
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); // параметры запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // указываем заголовок и тип передаваемых данных
    request.send(); //отправляем запрос

    request.addEventListener('load', () => {   //эвент загрузки запроса
        if (request.status === 200) { //статус запроса
            const data = JSON.parse(request.response);  // получение данных с json
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //операция
        } else { //если иной статус запроса
            inputUsd.value = "Что-то пошло не так";
        }
    });
});     