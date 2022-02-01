class Ogrenci{
    constructor(ad,id) {
        this.ad = ad;
        this.id = id;
    }
}

const PI =3.14;

function sayilariTopla(s1,s2) {
    console.log(s1+s2);
}

function sayilariCarp(s1,s2){
    console.log(s1*s2);
}

function sayilariBol(s1,s2){
    console.log(s1/s2);
}

function selamVer(adiniz){
    console.log(`Hoşgeldiniz ${adiniz}`);
}

export {
    sayilariTopla,
    sayilariBol
}