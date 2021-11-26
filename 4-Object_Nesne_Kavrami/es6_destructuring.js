let isim =['Yavuz Sinan','Aydemir'];
const ad = isim[0];
const soyad = isim[1];

const [first,last]=isim;
console.log(first+" "+last);

const renkler = ['mavi','sarı','lacivert','mor'];
const [r1,r2, , r3]=renkler;
console.log(r1,r2,r3);


const [c1,c2,...geriKalanRenkler]=renkler;
console.log(geriKalanRenkler);
//Default değer ataması
const [t1,t2,t3="Tanımlanmadı",t4] = ['FENERBAHÇE','Trabzonspor'];
console.log(t1,t2,t3,t4);

//object destructuring
let ayarlar = {
    baslik: 'JS Harika',
    genislik: '300px',
    yukseklik:'300px'
};

const baslik = ayarlar.baslik;
console.log(baslik);

const {baslik:b="Varsayılan",genislik:g,yukseklik:y} = ayarlar;
console.log(b,g,y);

const il = 'Konya';
const ilce = 'Selcuklu';

//uzun hal
const sehir = {
    il:il,
    ilce:ilce
};

//kısa hal
const sehir2 ={il,ilce};
console.log(sehir2);


const person = {
    ad: 'yavuz',
    yas:23,
    il: 'Konya',
    ilce: 'Karapinar'
};

const {yas,...geriKalanDegerler}= person;
console.log(yas,geriKalanDegerler);

let kisi = {
    ad: {
        firstName: "Yavuz Sinan",
        lastName: "Aydemir"
    },
    sevdigiRenkler: ["sarı","lacivert"],
    yas: 23
};
const {ad: {firstName,lastName}}=kisi;
console.log(firstName,lastName);

const {sevdigiRenkler} = kisi;
console.log(sevdigiRenkler);

const {sevdigiRenkler:[renk1,renk2]} = kisi;
console.log(renk2);