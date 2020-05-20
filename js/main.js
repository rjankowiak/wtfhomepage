function greetings(name){
    const greetText = `Cześć ${name}!`;
    setText('.header__greetings', greetText);
}

function setText(selector, text){
    console.log(text);
    const box = document.querySelector(selector);
    box.innerHTML = text;
}

//var name = prompt("Podaj imię:");
//greetings(name);
setText('.header__title', 'Witam na mojej stronie podróżniku!');