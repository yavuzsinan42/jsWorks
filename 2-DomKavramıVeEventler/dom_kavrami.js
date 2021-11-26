let deger;

deger = window;
deger = document.all;
let dizi = Array.from(deger);
for(index of dizi){
    console.log(index);
}
console.log(deger);

deger = document.head;
deger = document.body;
deger = document.URL;
deger = document.domain;
deger = document.contentType;
deger = document.links[2];
deger = document.links[1].className;
deger = document.links[1].classList; // list olarak döndürür
deger = document.images[0].getAttribute('src');





