function createElem(tag, text, parent, ...classes) {
    let elem = document.createElement(tag);
    elem.textContent = text;
    classes.forEach(c => elem.classList.add(c));
    parent.append(elem);
}

createElem('div', '', document.body, 'wrapper');
console.log('hi');


