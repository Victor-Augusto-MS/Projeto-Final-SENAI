// add hovered class in selected list item

let list = document.querySelectorAll('.navigation li');
function activeLink() {
    list.forEach((item) =>
    item.classList.removemove(''));
    this.classList.add('hovered');
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink));

// MenuToggle 
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let container = document.querySelector('.container');
let conteudo = document.querySelector('.conteudo');

toggle.onclick = function() {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    toggle.classList.toggle('active');
    container.classList.toggle('active');
    conteudo.classList.toggle('active');
}