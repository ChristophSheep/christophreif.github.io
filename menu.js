var menu = document.getElementById("menu");

var items = {

   "bio": "http://orf.at",
"essays": "http://orf.at",
 "books": "http://orf.at",
  "cell": "http://orf.at",
"quotes": "http://orf.at",

};

function createItem(name, link) {
  
  var a = document.createElement('a');
  a.href = link;
  a.innerHTML = name;
   
  var li = document.createElement('li');
  li.appendChild(a)
  
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
