var menu = document.getElementById("menu");

var items = {

   "bio": "http://orf.at",
"essays": "http://orf.at",
 "books": "http://orf.at",
  "cell": "http://orf.at",
"quotes": "http://orf.at",

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
