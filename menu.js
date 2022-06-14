var menu = document.getElementById("menu");

var items = {

   "bio": "http://orf.at",
"essays": "http://orf.at",
 "books": "http://orf.at",
  "cell": "http://orf.at",
"quotes": "http://orf.at",

};

function createItem(name, link) {
  var text = document.createTextNode(name);
  var a = document.createElement('a');
  a.href = link;
  a.appendChild(text);
  menu.appendChild(a);
}

function createMenu() {
   Object
      .keys(items)
      .forEach( function(key) { 
         createItem(key, items[key]); 
      });
}
  
createMenu();
