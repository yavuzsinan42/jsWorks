export default class Ogrenci{
    constructor(ad,id) {
        this.ad = ad;
        this.id = id;
        this.bilgilerimiSoyle();
    }
    bilgilerimiSoyle() {
        console.log(this.ad," ",this.id);
    }
}

const PI =3.14;

function sayilariTopla(s1,s2) {
    console.log(s1+s2);
}

export function sayilariCarp(s1,s2){
    console.log(s1*s2);
}

function sayilariBol(s1,s2){
    console.log(s1/s2);
}
//default kavramı export edilen fonksiyon ismi vermeden import denenirse
//varsayılan olarak import edilecek olan yapıyı belirtir.
//default bir kere kullanılmalıdır.
/*
export default function sayilariCikar(s1,s2){
    console.log(s1-s2);
}
*/
export  function sayilariCikar(s1,s2){
    console.log(s1-s2);
}

function selamVer(adiniz){
    console.log(`Hoşgeldiniz ${adiniz}`);
}

export {
    sayilariTopla,
    sayilariBol
}