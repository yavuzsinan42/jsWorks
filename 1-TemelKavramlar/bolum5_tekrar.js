let person = {
    ad: 'yavuz',
    yas: 23,
    evliMi: false,
};

console.log(person.ad);
console.log(typeof person);
console.log(person instanceof Object); //veri tipini sorguladık
// diziler hem array hemde object
let renkler = ['kırmızı'];
console.log(renkler[0]);
console.log(renkler instanceof Object);
console.log(renkler instanceof Array);

// Fonksiyonlarda hem object hemde fonksiyon olarak geçer
const fonksiyon = function (){
    console.log("Merhaba");
}
fonksiyon();
console.log(typeof fonksiyon);
console.log( fonksiyon instanceof Object);
console.log( fonksiyon instanceof Function);
fonksiyon.test = 'DENEME';
console.log(fonksiyon.test);
fonksiyon();

let sayi=6;
const fonk = function(sayi){
    sayi = sayi*2;
    return sayi;
}

console.log(fonk(sayi));
console.log(sayi);
let myDizi=[1,2,3];

//Referans tipli değişkenler fonksiyona gönderilirken adresleri yollanır.
// Fonksiyon içinde yapılan değişiklikler dışarda tanımlanan değişkeni de etkiler.
const diziElemanlariniIkiyleCarp = function(dizi){
    for(let i=0; i< dizi.length; i++){
        dizi[i]= dizi[i]*2;
    }
    return dizi;
}
diziElemanlariniIkiyleCarp(myDizi);
console.log(myDizi);
const diziElemanlariniIkiyleCarpKorumali = function(dizi){
    let geciciDizi =  [];
    for(let i=0; i< dizi.length; i++){
        geciciDizi[i]= dizi[i]*2;
    }
    return geciciDizi;
}
diziElemanlariniIkiyleCarpKorumali(myDizi);
console.log(myDizi);