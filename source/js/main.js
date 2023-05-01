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

// for (let i = 0; i < rows.length; i++) {
//     switch (i) {
//         case 0:
//             createKeys(i, 14);
//             break;
//         case 1:
//             createKeys(i, 15);
//             break;
//         case 2:
//             createKeys(i, 13);
//             break;
//         case 3:
//             createKeys(i, 13);
//             break;
//         case 4:
//             createKeys(i, 9);
//             break;
//     }
// }

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

function createLetterKey(bigEng, lowEng, bigRu, lowRu, parent, ...classes) {
    let key = createElem('div', '', parent, classes);
    key.dataset.bigEng = bigEng;
    key.dataset.lowEng = lowEng;
    key.dataset.bigRu = bigRu;
    key.dataset.lowRu = lowRu;
}
createElem('div', 'Tab', secondRow, 'key', 'tab', 'modifier-key');
createLetterKey('Q', 'q', 'Й', 'й', secondRow, 'key');
createLetterKey('W', 'w', 'Ц', 'ц', secondRow, 'key');
createLetterKey('E', 'e', 'У', 'у', secondRow, 'key');
createLetterKey('R', 'r', 'К', 'к', secondRow, 'key');
createLetterKey('T', 't', 'Е', 'е', secondRow, 'key');
createLetterKey('Y', 'y', 'Н', 'н', secondRow, 'key');
createLetterKey('U', 'u', 'Г', 'г', secondRow, 'key');
createLetterKey('I', 'i', 'Ш', 'ш', secondRow, 'key');
createLetterKey('O', 'o', 'Щ', 'щ', secondRow, 'key');
createLetterKey('P', 'p', 'З', 'з', secondRow, 'key');
createLetterKey('Q', 'q', 'Й', 'й', secondRow, 'key');
createLetterKey('Q', 'q', 'Й', 'й', secondRow, 'key');


function createCharKey(tag, ) {

}
















createElem('div', '', main, 'info');
const info = document.querySelector('.info');

createElem('p', 'Клавиатура создана в операционной системе Windows', info, '');

const keybindingInfo = createElem('p', '', info, '');
keybindingInfo.innerHTML = 'Для переключения языка комбинация: левыe <b>ctrl</b> + <b>shift</b>';






