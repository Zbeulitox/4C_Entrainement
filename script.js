// Créer un nouvel élément lorsque qu'on clique sur le bouton "Ajouter"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Champ invalide");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

//Suppresion de la ligne lorsque l'on clique sur le bouton
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Permet de créer un bouton
var liste = document.getElementsByTagName("LI");
var i;
for (i = 0; i < liste.length; i++) {
  var span = document.createElement("SPAN");
  var texte = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(texte);
  liste[i].appendChild(span);
}
