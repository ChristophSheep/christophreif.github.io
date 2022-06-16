var menu = document.getElementById("menu");

var items = {

    "cel": "./cel.html",
    "bio": "./bio.html",
  "books": "./books.html",
 "essays": "./essays.html",
"history": "./hist.html",
 "poeple": "./people.html",
 "quotes": "./quotes.html,
};

function createItem(name, link) {
  var a = document.createElement('a');
  a.innerHTML = name;
  a.href = link;
 
  var li = document.createElement('li');
  li.appendChild(a);
 
  return li
}

function createMenu() {
   Object
      .keys(items)
      .forEach( function(key) { 
         menu.appendChild(createItem(key, items[key]));
      });
}
  
createMenu();
