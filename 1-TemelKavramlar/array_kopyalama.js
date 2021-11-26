const isimler = ['yavuz','emre','hasan','ali'];

const sayilar = [1,50,2,41,41,84,8,35,3];

const ogrenciler = [
    {id: 12, isim: 'yavuz', yas:23},
    {id: 63, isim: 'veli', yas:23},
    {id: 42, isim: 'kerim', yas:23},
    {id: 18, isim: 'samet', yas:23},
    {id: 16, isim: 'faysal', yas:23},
    {id: 54, isim: 'kazım', yas:23},
    {id: 8, isim: 'kurtuluş', yas:23},
    {id: 5, isim: 'yamaç', yas:23},

];
let kopya = [];
//Yöntem 1;
for(let isim of isimler){
    kopya.push(isim);
}
console.log(kopya);
kopya = [];
console.log(kopya);

//Yöntem 2;

kopya = Array.from(isimler);
console.log(kopya);
kopya = [];
console.log(kopya);

//Yöntem 3
kopya = [...isimler]; //... spread operator olarak geçer ve dizi elemanlarını parçalar.
console.log(kopya);

let isim = 'Yavuz Sinan Aydemir';
let harflerDizisi = isim.split("");
console.log(harflerDizisi);
harflerDizisi = [];

harflerDizisi = [...isim];
console.log(harflerDizisi);

//Fonksiyona kaç parametre gönderileceğini bilmediğimiz durumlarda

function sayilariTopla (...parametreler){
    let toplam=0;
    for (let index of parametreler){
        toplam+=index;
    }
    console.log("Toplam"+toplam);
}
sayilariTopla(1,2,3,4,5,6,7,8,9,10);
