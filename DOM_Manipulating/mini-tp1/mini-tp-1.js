//create elements
var div = document.createElement('div');
div.id = "divTP1";

var text1 = document.createTextNode('Le');
var text2 = document.createTextNode('World Wide Web Consortium');
var text3 = document.createTextNode(', abrégé par le sigle ');
var text4 = document.createTextNode('W3C');
var text5 = document.createTextNode(', est un ');
var text6 = document.createTextNode('organisme de standardisation ');
var text7 = document.createTextNode('à but non-lucratif chargé de promouvoir la compatibilité des technologies du ');
var text8 = document.createTextNode('World Wide Web.');

var strong1 = document.createElement('strong');
var strong2 = strong1.cloneNode(true);

var link1 = document.createElement('a');
var link2 = document.createElement('a');

//set attributes
link1.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation";
link1.title = "Organisme de normalisation";
link2.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
link2.title = "World Wide Web";

//append elements to our document

strong1.appendChild(text2);
strong2.appendChild(text4);

link1.appendChild(text6);
link2.appendChild(text8);

div.appendChild(text1);
div.appendChild(strong1);
div.appendChild(text3);
div.appendChild(strong2);
div.appendChild(text5);
div.appendChild(link1);
div.appendChild(text7);
div.appendChild(link2);

document.appendChild(div);