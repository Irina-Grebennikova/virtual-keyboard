function createElem(tag, text, parent, ...classes) {
    let elem = document.createElement(tag);
    elem.textContent = text;
    if (classes[0]) classes.forEach(c => elem.classList.add(c));
    parent.append(elem);
    return elem;
}

createElem('div', '', document.body, 'wrapper');
const wrapper = document.querySelector('.wrapper');

createElem('main', '', wrapper, '');
const main = document.querySelector('main');

createElem('h1', 'RSS Виртуальная клавиатура', main, 'title');
createElem('textarea', '', main, 'input');

createElem('div', '', main, 'keyboard');
const keyboard = document.querySelector('.keyboard');

for (let i = 0; i < 5; i++) {
    createElem('div', '', keyboard, 'row');
}

let rows = document.querySelectorAll('.row');

// function createKeys(indexOfRow, amount) {
//     for (let j = 0; j < amount; j++) {
//         let elem = createElem('div', '', rows[indexOfRow], 'key');
//         if (indexOfRow === 0 && j === 13) {
//             elem.classList.add('backspace', 'modifier-key');
//             elem.textContent = 'Backspace';
//         } else if (indexOfRow === 1 && j === 0) {
//             elem.classList.add('tab', 'modifier-key');
//             elem.textContent = 'Tab';
//         } else if (indexOfRow === 1 && j === 14) {
//             elem.classList.add('modifier-key');
//             elem.textContent = 'Del';
//         } else if (indexOfRow === 2 && j === 0) {
//             elem.classList.add('caps-lock', 'modifier-key');
//             elem.textContent = 'Caps-lock';
//         } else if (indexOfRow === 2 && j === 12) {
//             elem.classList.add('enter', 'modifier-key');
//             elem.textContent = 'Enter';
//         } else if (indexOfRow === 3 && j === 0) {
//             elem.classList.add('shift', 'modifier-key');
//             elem.textContent = 'Shift';
//         } else if (indexOfRow === 3 && j === 11) {
//             createElem('span', '', elem, 'arrow');
//         } else if (indexOfRow === 3 && j === 12) {
//             elem.classList.add('shift', 'modifier-key');
//             elem.textContent = 'Shift';
//         } else if (indexOfRow === 4 && j === 0) {
//             elem.classList.add('ctrl', 'modifier-key');
//             elem.textContent = 'Ctrl';
//         } else if (indexOfRow === 4 && j === 1) {
//             elem.innerHTML = '<svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#fff" d="M13.821 15.761h-9.038v-7.747l9.038-1.291zM27.217 15.761h-12.185v-9.198l12.185-1.777zM13.821 16.81h-9.038v7.747l9.038 1.291zM27.217 16.81h-12.185v9.198l12.185 1.777z"></path> </g></svg>';
//         } else if (indexOfRow === 4 && j === 2) {
//             elem.classList.add('modifier-key');
//             elem.textContent = 'Alt';
//         } else if (indexOfRow === 4 && j === 3) {
//             elem.classList.add('space');
//         } else if (indexOfRow === 4 && j === 4) {
//             elem.classList.add('modifier-key');
//             elem.textContent = 'Alt';
//         } else if (indexOfRow === 4 && j === 5) {
//             createElem('span', '', elem, 'arrow', 'arrow-left');
//         } else if (indexOfRow === 4 && j === 6) {
//             createElem('span', '', elem, 'arrow', 'arrow-bottom');
//         } else if (indexOfRow === 4 && j === 7) {
//             createElem('span', '', elem, 'arrow', 'arrow-right');
//         } else if (indexOfRow === 4 && j === 8) {
//             elem.classList.add('ctrl', 'modifier-key');
//             elem.textContent = 'Ctrl';
//         }
//     }
// }

const firstRow = rows[0];
const secondRow = rows[1];
const thirdRow = rows[2];
const fourthRow = rows[3];
const fifthRow = rows[4];

function createKey(bigEng, lowEng, bigRu, lowRu, parent, ...classes) {
    let key = createElem('div', '', parent, ...classes);
    key.dataset.bigEng = bigEng;
    key.dataset.lowEng = lowEng;
    key.dataset.bigRu = bigRu;
    key.dataset.lowRu = lowRu;
    return key;
}

createKey('~', '`', 'Ё', 'ё', firstRow, 'key').codeKey = 'Backquote';
createKey('!', '1', '!', '1', firstRow, 'key').codeKey = 'Digit1';
createKey('@', '2', '"', '2', firstRow, 'key').codeKey = 'Digit2';
createKey('#', '3', '№', '3', firstRow, 'key').codeKey = 'Digit3';
createKey('$', '4', ';', '4', firstRow, 'key').codeKey = 'Digit4';
createKey('%', '5', '%', '5', firstRow, 'key').codeKey = 'Digit5';
createKey('^', '6', ':', '6', firstRow, 'key').codeKey = 'Digit6';
createKey('&', '7', '?', '7', firstRow, 'key').codeKey = 'Digit7';
createKey('*', '8', '*', '8', firstRow, 'key').codeKey = 'Digit8';
createKey('(', '9', '(', '9', firstRow, 'key').codeKey = 'Digit9';
createKey(')', '0', ')', '0', firstRow, 'key').codeKey = 'Digit0';
createKey('_', '-', '_', '-', firstRow, 'key').codeKey = 'Minus';
createKey('+', '=', '+', '=', firstRow, 'key').codeKey = 'Equal';
createElem('div', 'Backspace', firstRow, 'key', 'backspace', 'modifier-key').codeKey = 'Backspace';

createElem('div', 'Tab', secondRow, 'key', 'tab', 'modifier-key').codeKey = 'Tab';
createKey('Q', 'q', 'Й', 'й', secondRow, 'key').codeKey = 'KeyQ';
createKey('W', 'w', 'Ц', 'ц', secondRow, 'key').codeKey = 'KeyW';
createKey('E', 'e', 'У', 'у', secondRow, 'key').codeKey = 'KeyE';
createKey('R', 'r', 'К', 'к', secondRow, 'key').codeKey = 'KeyR';
createKey('T', 't', 'Е', 'е', secondRow, 'key').codeKey = 'KeyT';
createKey('Y', 'y', 'Н', 'н', secondRow, 'key').codeKey = 'KeyY';
createKey('U', 'u', 'Г', 'г', secondRow, 'key').codeKey = 'KeyU';
createKey('I', 'i', 'Ш', 'ш', secondRow, 'key').codeKey = 'KeyI';
createKey('O', 'o', 'Щ', 'щ', secondRow, 'key').codeKey = 'KeyO';
createKey('P', 'p', 'З', 'з', secondRow, 'key').codeKey = 'KeyP';
createKey('{', '[', 'Х', 'х', secondRow, 'key').codeKey = 'BracketLeft';
createKey('}', ']', 'Ъ', 'ъ', secondRow, 'key').codeKey = 'BracketRight';
createKey('|', '\\', '/', '\\', secondRow, 'key').codeKey = 'Backslash';
createElem('div', 'Del', secondRow, 'key', 'modifier-key').codeKey = 'Delete';

createElem('div', 'Caps-lock', thirdRow, 'key', 'caps-lock', 'modifier-key').codeKey = 'CapsLock';
createKey('A', 'a', 'Ф', 'ф', thirdRow, 'key').codeKey = 'KeyA';
createKey('S', 's', 'Ы', 'ы', thirdRow, 'key').codeKey = 'KeyS';
createKey('D', 'd', 'В', 'в', thirdRow, 'key').codeKey = 'KeyD';
createKey('F', 'f', 'А', 'а', thirdRow, 'key').codeKey = 'KeyF';
createKey('G', 'g', 'П', 'п', thirdRow, 'key').codeKey = 'KeyG';
createKey('H', 'h', 'Р', 'р', thirdRow, 'key').codeKey = 'KeyH';
createKey('J', 'j', 'О', 'о', thirdRow, 'key').codeKey = 'KeyJ';
createKey('K', 'k', 'Л', 'л', thirdRow, 'key').codeKey = 'KeyK';
createKey('L', 'l', 'Д', 'д', thirdRow, 'key').codeKey = 'KeyL';
createKey(':', ';', 'Ж', 'ж', thirdRow, 'key').codeKey = 'Semicolon';
createKey('\"', '\'', 'Э', 'э', thirdRow, 'key').codeKey = 'Quote';
createElem('div', 'Enter', thirdRow, 'key', 'enter', 'modifier-key').codeKey = 'Enter';

createElem('div', 'Shift', fourthRow, 'key', 'shift', 'modifier-key').codeKey = 'ShiftLeft';
createKey('Z', 'z', 'Я', 'я', fourthRow, 'key').codeKey = 'KeyZ';
createKey('X', 'x', 'Ч', 'ч', fourthRow, 'key').codeKey = 'KeyX';
createKey('C', 'c', 'С', 'с', fourthRow, 'key').codeKey = 'KeyC';
createKey('V', 'v', 'М', 'м', fourthRow, 'key').codeKey = 'KeyV';
createKey('B', 'b', 'И', 'и', fourthRow, 'key').codeKey = 'KeyB';
createKey('N', 'n', 'Т', 'т', fourthRow, 'key').codeKey = 'KeyN';
createKey('M', 'm', 'Ь', 'ь', fourthRow, 'key').codeKey = 'KeyM';
createKey('<', ',', 'Б', 'б', fourthRow, 'key').codeKey = 'Comma';
createKey('>', '.', 'Ю', 'ю', fourthRow, 'key').codeKey = 'Period';
createKey('?', '/', ',', '.', fourthRow, 'key').codeKey = 'Slash';
const arrowTop = createElem('div', '', fourthRow, 'key');
createElem('span', '', arrowTop, 'arrow');
arrowTop.codeKey = 'ArrowUp';
createElem('div', 'Shift', fourthRow, 'key', 'shift', 'modifier-key').codeKey = 'ShiftRight';

createElem('div', 'Ctrl', fifthRow, 'key', 'ctrl', 'modifier-key').codeKey = 'ControlLeft';
const win = createElem('div', '', fifthRow, 'key');
win.innerHTML = '<svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#fff" d="M13.821 15.761h-9.038v-7.747l9.038-1.291zM27.217 15.761h-12.185v-9.198l12.185-1.777zM13.821 16.81h-9.038v7.747l9.038 1.291zM27.217 16.81h-12.185v9.198l12.185 1.777z"></path> </g></svg>';
win.codeKey = 'MetaLeft';
createElem('div', 'Alt', fifthRow, 'key', 'modifier-key').codeKey = 'AltLeft';
createElem('div', '', fifthRow, 'key', 'space').codeKey = 'Space';
createElem('div', 'Alt', fifthRow, 'key', 'modifier-key').codeKey = 'AltRight';
const arrowLeft = createElem('div', '', fifthRow, 'key');
createElem('span', '', arrowLeft, 'arrow', 'arrow-left');
arrowLeft.codeKey = 'ArrowLeft';
const arrowBottom = createElem('div', '', fifthRow, 'key');
createElem('span', '', arrowBottom, 'arrow', 'arrow-bottom');
arrowBottom.codeKey = 'ArrowDown';
const arrowRight = createElem('div', '', fifthRow, 'key');
createElem('span', '', arrowRight, 'arrow', 'arrow-right');
arrowRight.codeKey = 'ArrowRight';
createElem('div', 'Ctrl', fifthRow, 'key', 'ctrl', 'modifier-key').codeKey = 'ControlRight';

const charKeys = Array.from(keyboard.querySelectorAll('.key')).filter(key => key.hasAttribute('data-big-eng'));

function generateKeyText(keys, dataAttr) {
    // console.log('generateKeyText');
    keys.forEach(key => {
        key.textContent = key.dataset[dataAttr];
    })
}

if (sessionStorage.lang === 'ru') {
    generateKeyText(charKeys, 'lowRu');
} else {
    generateKeyText(charKeys, 'lowEng');
}

let pressedKey;

document.addEventListener('keydown', (event) => {
    let allKeys = Array.from(keyboard.querySelectorAll('.key'));

    for (let key of allKeys) {
        if (key.codeKey === event.code) {
            key.classList.add('active');
            pressedKey = key; 
        }
    }

    if ((event.ctrlKey || event.metaKey) && event.shiftKey) {
        changeLang();
    } else if (event.shiftKey) {
        changeRegister(event);
    } else if (event.key === 'CapsLock') {
        changeLetterCase(event);
    }
    event.preventDefault();
});

document.addEventListener('keyup', (event) => {
    pressedKey.classList.remove('active');

    if (event.key === 'Shift' && sessionStorage.lang === 'ru') {
        generateKeyText(charKeys, 'lowRu');
    } else if (event.key === 'Shift') {
        generateKeyText(charKeys, 'lowEng');
    }
    event.preventDefault();
});

function changeLang() {
    // console.log('changeLang');
    if (charKeys[0].textContent === charKeys[0].dataset.lowEng) {
        generateKeyText(charKeys, 'lowRu');
        sessionStorage.setItem('lang', 'ru');
    } else {
        generateKeyText(charKeys, 'lowEng');
        sessionStorage.setItem('lang', 'eng');
    }
}

function changeRegister(event) {
    // console.log('changeRegister');
    if (event.repeat) return;

    if (charKeys[0].textContent === 'ё') {
        generateKeyText(charKeys, 'bigRu');
    } else if ((charKeys[0].textContent === '`')) {
        generateKeyText(charKeys, 'bigEng');
    }
}

function changeLetterCase(event) {
    // console.log('changeLetterCase');
    if (event.repeat) return;

    let letterKeys = charKeys.filter(key => key.textContent.match(/[a-zа-яё]/i));

    if (letterKeys[0].textContent === 'ё') {
        generateKeyText(letterKeys, 'bigRu');
    } else if ((letterKeys[0].textContent === 'Ё')) {
        generateKeyText(letterKeys, 'lowRu');
    } else if ((letterKeys[0].textContent === 'q')) {
        generateKeyText(letterKeys, 'bigEng');
    } else {
        generateKeyText(letterKeys, 'lowEng');
    }
}










createElem('div', '', main, 'info');
const info = document.querySelector('.info');

createElem('p', 'Клавиатура создана в операционной системе Windows', info, '');

const keybindingInfo = createElem('p', '', info, '');
keybindingInfo.innerHTML = 'Для переключения языка комбинация: левыe <b>ctrl</b> + <b>shift</b>';






