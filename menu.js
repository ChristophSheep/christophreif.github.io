var items = {
    "cel": "./cel.html",
    "bio": "./bio.md",
    "books": "./books.md",
    "essays": "./essays.md",
    "history": "./hist.md",
    "poeple": "./heroes.md",
    "quotes": "./quotes.md",
};

let nav = document.getElementById('menu');

function createItem(name, link) {
    var a = document.createElement('a');
    a.innerHTML = name;
    a.href = link;

    var li = document.createElement('li');
    li.appendChild(a);

    return li;
}

function createMenu(nav, items) {

    var ul = document.createElement('ul');
    nav.appendChild(ul);

    Object
        .keys(items)
        .forEach(function(key) {
            ul.appendChild(createItem(key, items[key]));
        });
}

createMenu(nav, items);
