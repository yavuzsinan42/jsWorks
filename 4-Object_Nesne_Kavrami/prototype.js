//Prototype Property
//Miras Modelini Kullanır.
//Bir kurucu method ile oluşturulacak olan nesnelerde aynı değerlerini kullanacak olan değişken ve 
// fonksiyonların tanımı prototype kavramı ile yapılır. Bu sayede o değişkenlere tekrar tekrar değer
//atamaya gerek kalmaz.
//Prototype property'de bir nesne döndürür.

Ogrenci.prototype.okul='Konya Teknik Üniversitesi';
Ogrenci.prototype.bilgilerimiGoster = function () {
    return `ismim ${this.ad} yaşım ${this.yas} okulum ${this.okul}`;
}
Ogrenci.prototype.toString = function () {
    return 'ogrenci yazdirilacak';
}
function Ogrenci(ad, yas, evliMi){
    this.ad = ad;
    this.yas = yas;
    this.evliMi = evliMi;
   
    console.log(this); // Burada this new kulladnığımız için  o nesnenin içindekileri belirtir.
}

const yunus = new Ogrenci('Yunus','25',false,'Selçuk Üniversitesi');
const yavuz = new Ogrenci('Yavuz','23',false,'Konya Teknik Üniversitesi');

console.log(yunus.bilgilerimiGoster());
console.log(yavuz);
console.log(yavuz.constructor.prototype);
console.log(Object.getPrototypeOf(yavuz));

const dizi = [1,2,3];
//Diziler üzerinde işlemler yapmamızı sağlayan pop, push gibi fonksiyonlar prototype olarak tanımlanmıştır.
console.log(dizi.constructor.prototype);

console.log("***"+yavuz);
