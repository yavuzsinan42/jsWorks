let deger ;

const myListe = document.querySelector('ul.liste');
console.log(myListe);

deger = myListe.childNodes;
console.log(deger);

deger=myListe.childNodes[6].nodeType; //1 Elementler
console.log(deger);

deger = myListe.firstChild;
deger = myListe.firstElementChild;

deger = myListe.lastChild;
deger = myListe.lastElementChild;

//parent element
deger = myListe.parentNode;
deger = myListe.parentElement.parentElement;

console.log(deger);

const myInput = document.querySelector('input');
console.log(myInput.parentElement);

deger = document.querySelector('li').nextElementSibling;
console.log(deger);
deger = document.querySelector('li').nextElementSibling.previousElementSibling;
console.log(deger);