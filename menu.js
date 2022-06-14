function menu() {

  function create() {
    var menu = document.getElementById("menu")
    var a = document.createElement('a');
    var text = document.createTextNode("bio");
    a.appendChild(text);
    a.title = "my title text";
    a.href = "http://example.com";
    menu.appendChild(a);
  }
  
}()
