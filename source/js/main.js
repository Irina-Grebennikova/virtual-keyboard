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
}

createKey('~', '`', 'Ё', 'ё', firstRow, 'key');
createKey('!', '1', '!', '1', firstRow, 'key');
createKey('@', '2', '"', '2', firstRow, 'key');
createKey('#', '3', '№', '3', firstRow, 'key');
createKey('$', '4', ';', '4', firstRow, 'key');
createKey('%', '5', '%', '5', firstRow, 'key');
createKey('^', '6', ':', '6', firstRow, 'key');
createKey('&', '7', '?', '7', firstRow, 'key');
createKey('*', '8', '*', '8', firstRow, 'key');
createKey('(', '9', '(', '9', firstRow, 'key');
createKey(')', '0', ')', '0', firstRow, 'key');
createKey('_', '-', '_', '-', firstRow, 'key');
createKey('+', '=', '+', '=', firstRow, 'key');
createElem('div', 'Backspace', firstRow, 'key', 'backspace', 'modifier-key');

createElem('div', 'Tab', secondRow, 'key', 'tab', 'modifier-key');
createKey('Q', 'q', 'Й', 'й', secondRow, 'key');
createKey('W', 'w', 'Ц', 'ц', secondRow, 'key');
createKey('E', 'e', 'У', 'у', secondRow, 'key');
createKey('R', 'r', 'К', 'к', secondRow, 'key');
createKey('T', 't', 'Е', 'е', secondRow, 'key');
createKey('Y', 'y', 'Н', 'н', secondRow, 'key');
createKey('U', 'u', 'Г', 'г', secondRow, 'key');
createKey('I', 'i', 'Ш', 'ш', secondRow, 'key');
createKey('O', 'o', 'Щ', 'щ', secondRow, 'key');
createKey('P', 'p', 'З', 'з', secondRow, 'key');
createKey('Q', 'q', 'Й', 'й', secondRow, 'key');
createKey('{', '[', 'Х', 'х', secondRow, 'key');
createKey('}', ']', 'Ъ', 'ъ', secondRow, 'key');
createElem('div', 'Del', secondRow, 'key', 'modifier-key');

createElem('div', 'Caps-lock', thirdRow, 'key', 'caps-lock', 'modifier-key');
createKey('A', 'a', 'Ф', 'ф', thirdRow, 'key');
createKey('S', 's', 'Ы', 'ы', thirdRow, 'key');
createKey('D', 'd', 'В', 'в', thirdRow, 'key');
createKey('F', 'f', 'А', 'а', thirdRow, 'key');
createKey('G', 'g', 'П', 'п', thirdRow, 'key');
createKey('H', 'h', 'Р', 'р', thirdRow, 'key');
createKey('J', 'j', 'О', 'о', thirdRow, 'key');
createKey('K', 'k', 'Л', 'л', thirdRow, 'key');
createKey('L', 'l', 'Д', 'д', thirdRow, 'key');
createKey(':', ';', 'Ж', 'ж', thirdRow, 'key');
createKey('\"', '\'', 'Э', 'э', thirdRow, 'key');
createElem('div', 'Enter', thirdRow, 'key', 'enter', 'modifier-key');

createElem('div', 'Shift', fourthRow, 'key', 'shift', 'modifier-key');
createKey('Z', 'z', 'Я', 'я', fourthRow, 'key');
createKey('X', 'x', 'Ч', 'ч', fourthRow, 'key');
createKey('C', 'c', 'С', 'с', fourthRow, 'key');
createKey('V', 'v', 'М', 'м', fourthRow, 'key');
createKey('B', 'b', 'И', 'и', fourthRow, 'key');
createKey('N', 'n', 'Т', 'т', fourthRow, 'key');
createKey('M', 'm', 'Ь', 'ь', fourthRow, 'key');
createKey('<', ',', 'Б', 'б', fourthRow, 'key');
createKey('>', '.', 'Ю', 'ю', fourthRow, 'key');
createKey('?', '/', ',', '.', fourthRow, 'key');
const arrowTop = createElem('div', '', fourthRow, 'key');
createElem('span', '', arrowTop, 'arrow');
createElem('div', 'Shift', fourthRow, 'key', 'shift', 'modifier-key');

createElem('div', 'Ctrl', fifthRow, 'key', 'ctrl', 'modifier-key');
const win = createElem('div', '', fifthRow, 'key');
win.innerHTML = '<svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#fff" d="M13.821 15.761h-9.038v-7.747l9.038-1.291zM27.217 15.761h-12.185v-9.198l12.185-1.777zM13.821 16.81h-9.038v7.747l9.038 1.291zM27.217 16.81h-12.185v9.198l12.185 1.777z"></path> </g></svg>';
createElem('div', 'Alt', fifthRow, 'key', 'modifier-key');
createElem('div', '', fifthRow, 'key', 'space');
createElem('div', 'Alt', fifthRow, 'key', 'modifier-key');
const arrowLeft = createElem('div', '', fifthRow, 'key');
createElem('span', '', arrowLeft, 'arrow', 'arrow-left');
const arrowBottom = createElem('div', '', fifthRow, 'key');
createElem('span', '', arrowBottom, 'arrow', 'arrow-bottom');
const arrowRight = createElem('div', '', fifthRow, 'key');
createElem('span', '', arrowRight, 'arrow', 'arrow-right');
createElem('div', 'Ctrl', fifthRow, 'key', 'ctrl', 'modifier-key');

const charKeys = Array.from(keyboard.querySelectorAll('.key')).filter(key => key.hasAttribute('data-big-eng'));

function generateKeyText(dataAttr) {
    charKeys.forEach(key => {
        key.textContent = key.dataset[dataAttr];
    })
}

generateKeyText('lowEng');
















createElem('div', '', main, 'info');
const info = document.querySelector('.info');

createElem('p', 'Клавиатура создана в операционной системе Windows', info, '');

// const keybindingInfo = createElem('p', '', info, '');
// keybindingInfo.innerHTML = 'Для переключения языка комбинация: левыe <b>ctrl</b> + <b>shift</b>';






