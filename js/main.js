function createElem(tag, text, parent, ...classes) {
    const elem = document.createElement(tag);
    elem.textContent = text;
    if (classes[0]) classes.forEach((c) => elem.classList.add(c));
    parent.append(elem);
    return elem;
}

createElem('div', '', document.body, 'wrapper');
const wrapper = document.querySelector('.wrapper');

createElem('main', '', wrapper, '');
const main = document.querySelector('main');

createElem('h1', 'RSS Виртуальная клавиатура', main, 'title');
const input = createElem('textarea', '', main, 'input');

createElem('div', '', main, 'keyboard');
const keyboard = document.querySelector('.keyboard');

for (let i = 0; i < 5; i++) {
    createElem('div', '', keyboard, 'row');
}

const rows = document.querySelectorAll('.row');

const firstRow = rows[0];
const secondRow = rows[1];
const thirdRow = rows[2];
const fourthRow = rows[3];
const fifthRow = rows[4];

function createKey(bigEng, lowEng, bigRu, lowRu, parent, ...classes) {
    const key = createElem('div', '', parent, ...classes);
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
createElem('div', '▲', fourthRow, 'key').codeKey = 'ArrowUp';

createElem('div', 'Shift', fourthRow, 'key', 'shift', 'modifier-key').codeKey = 'ShiftRight';

createElem('div', 'Ctrl', fifthRow, 'key', 'ctrl', 'modifier-key').codeKey = 'ControlLeft';
const win = createElem('div', '', fifthRow, 'key');
win.innerHTML = '<svg width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#fff" d="M13.821 15.761h-9.038v-7.747l9.038-1.291zM27.217 15.761h-12.185v-9.198l12.185-1.777zM13.821 16.81h-9.038v7.747l9.038 1.291zM27.217 16.81h-12.185v9.198l12.185 1.777z"></path> </g></svg>';
win.codeKey = 'MetaLeft';
createElem('div', 'Alt', fifthRow, 'key', 'modifier-key').codeKey = 'AltLeft';
createElem('div', '', fifthRow, 'key', 'space').codeKey = 'Space';
createElem('div', 'Alt', fifthRow, 'key', 'modifier-key').codeKey = 'AltRight';
createElem('div', '◄', fifthRow, 'key').codeKey = 'ArrowLeft';
createElem('div', '▼', fifthRow, 'key').codeKey = 'ArrowDown';
createElem('div', '►', fifthRow, 'key').codeKey = 'ArrowRight';
createElem('div', 'Ctrl', fifthRow, 'key', 'ctrl', 'modifier-key').codeKey = 'ControlRight';

const info = createElem('div', '', main, 'info');
createElem('p', 'Клавиатура создана в операционной системе Windows', info, '');

const keybindingInfo = createElem('p', '', info, '');
keybindingInfo.innerHTML = 'Для переключения языка комбинация: левыe <b>ctrl</b> + <b>shift</b>';

const arrowKeys = Array.from(keyboard.querySelectorAll('.key')).filter((key) => key.codeKey.includes('Arrow'));

const charKeys = Array.from(keyboard.querySelectorAll('.key')).filter((key) => key.hasAttribute('data-big-eng'));

function generateKeyText(keys, dataAttr) {
    keys.forEach((key) => {
        key.textContent = key.dataset[dataAttr];
    });
}

if (sessionStorage.lang === 'ru') {
    generateKeyText(charKeys, 'lowRu');
} else {
    generateKeyText(charKeys, 'lowEng');
}

const pressedKeys = [];

document.addEventListener('keydown', (event) => {
    if (event.repeat) return;

    const allKeys = Array.from(keyboard.querySelectorAll('.key'));

    for (const key of allKeys) {
        if (key.codeKey === event.code) {
            key.classList.add('active');
            pressedKeys.push(key);
        }
    }

    for (const key of charKeys) {
        if (key.codeKey === event.code) {
            input.value += key.textContent;
        }
    }

    if ((event.ctrlKey || event.metaKey) && event.shiftKey) {
        changeLang();
    } else if (event.shiftKey) {
        changeRegister(event);
    } else if (event.key === 'CapsLock') {
        changeLetterCase(event);
    } else if (event.code === 'Space') {
        input.value += ' ';
    } else if (event.key === 'Tab') {
        input.value += '    ';
    } else if (event.key === 'Enter') {
        input.value += '\n';
    } else if (event.key.includes('Arrow')) {
        let key;
        arrowKeys.forEach((el) => {
            if (el.codeKey === event.code) {
                key = el;
            }
        });
        input.value += key.textContent;
    } else if (event.key === 'Delete') {
        const tmp = input.selectionStart;
        input.value = input.value.slice(0, tmp) + input.value.slice(tmp + 1);
        input.selectionEnd = tmp;
    } else if (event.key === 'Backspace') {
        input.value = input.value.slice(0, -1);
    }
    event.preventDefault();
});

document.addEventListener('keyup', (event) => {
    pressedKeys.forEach((key, i) => {
        if (key.codeKey === event.code) {
            key.classList.remove('active');
            pressedKeys.splice(i, 1);
        }
    });

    if (event.key === 'Shift' && sessionStorage.lang === 'ru') {
        generateKeyText(charKeys, 'lowRu');
    } else if (event.key === 'Shift') {
        generateKeyText(charKeys, 'lowEng');
    }
    event.preventDefault();
});

keyboard.addEventListener('mousedown', (event) => {
    const key = event.target.closest('.key');
    if (!key) return;

    if (charKeys.includes(key)) {
        input.value += key.textContent;
    } else if (key.codeKey === 'CapsLock') {
        changeLetterCase(event);
    } else if (key.codeKey.includes('Shift')) {
        changeRegister(event);
    } else if (key.codeKey.includes('Arrow')) {
        input.value += key.textContent;
    } else if (event.target.closest('.key') && event.target.closest('.key').textContent === 'Del') {
        const tmp = input.selectionStart;
        input.value = input.value.slice(0, tmp) + input.value.slice(tmp + 1);
        input.selectionEnd = tmp;
    } else if (key.codeKey === 'Backspace') {
        input.value = input.value.slice(0, -1);
    }
});

keyboard.addEventListener('mouseup', (event) => {
    const key = event.target.closest('.key');
    if (!key) return;

    if (key.codeKey.includes('Shift') && sessionStorage.lang === 'ru') {
        generateKeyText(charKeys, 'lowRu');
    } else if (key.codeKey.includes('Shift')) {
        generateKeyText(charKeys, 'lowEng');
    } else if (key.codeKey === 'Space') {
        input.value += ' ';
    } else if (key.codeKey === 'Tab') {
        input.value += '    ';
    } else if (key.codeKey === 'Enter') {
        input.value += '\n';
    }
});

function changeLang() {
    if (charKeys[0].textContent === charKeys[0].dataset.lowEng) {
        generateKeyText(charKeys, 'lowRu');
        sessionStorage.setItem('lang', 'ru');
    } else {
        generateKeyText(charKeys, 'lowEng');
        sessionStorage.setItem('lang', 'eng');
    }
}

function changeRegister(event) {
    if (event.repeat) return;

    if (charKeys[0].textContent === 'ё') {
        generateKeyText(charKeys, 'bigRu');
    } else if ((charKeys[0].textContent === '`')) {
        generateKeyText(charKeys, 'bigEng');
    }
}

function changeLetterCase(event) {
    if (event.repeat) return;

    const letterKeys = charKeys.filter((key) => key.textContent.match(/[a-zа-яё]/i));

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
