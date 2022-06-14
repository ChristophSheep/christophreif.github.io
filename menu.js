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
  var anch = document.createElement('a').href = link;
  anch.appendChild(text);
  menu.appendChild(anch);
}

function createMenu() {
   Object
      .keys(items)
      .forEach( function(key) { 
         alert(key); 
      });
}
  
createMenu();
