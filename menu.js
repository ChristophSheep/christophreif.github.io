var menu = document.getElementById("menu");

var items = {

    "cel": "./cel.html",
    "bio": "./bio.html",
  "books": "./books.html",
 "essays": "./essays.html",
"history": "./hist.html",
 "poeple": "./people.html"
 "quotes": "./quotes.html,
};

function createItem(name, link) {
  
  var aa = document.createElement('a');
  var li = document.createElement('li');
   
  li.appendChild(aa);
  
  aa.innerHTML = name;
  aa.href = link;
  
  return li
}

function createMenu() {
   Object
      .keys(items)
      .forEach( function(key) { 
         var item = createItem(key, items[key]);
         menu.appendChild(item);
      });
}
  
createMenu();
