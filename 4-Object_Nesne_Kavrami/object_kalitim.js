function Person(ad,soyad){
    this.ad = ad;
    this.soyad = soyad;
}

Person.prototype.selamVer = function (){
    return `Merhaba ben ${this.ad}  ${this.soyad}`;
}
Ogrenci.prototype = Object.create(Person.prototype);
Ogrenci.prototype.constructor = Ogrenci;
function Ogrenci(ad, soyad, yas, sinif){
    //this.ad = ad;
    //this.soyad = soyad;
    Person.call(this,ad,soyad) //Person kurucu metodundaki 2 değişkeni kalıttık
    this.yas = yas;
    this.sinif = sinif;
}

const yavuz = new Person("Yavuz Sinan", "Aydemir");
console.log(yavuz.selamVer());

const fatma = new Ogrenci('ayse','fatma',21,9);
console.log(fatma.selamVer());

function MyArray() {

}
//Burada Kendimiz oluşturduğum boş bir kurucu metod ile oluşturulan nesneye Array sınıfının 
//prototype değişkenlerini atayarak orada tanımlanan fonksiyonları kalıtmış olduk.
MyArray.prototype = Object.create(Array.prototype);

const myArray = new MyArray();
console.log(myArray.constructor.prototype);


const dizi = [1,2,3];

const yeniDizi = dizi.map(function (sayi){
    return sayi+2;
});
//Dizileri maplemek için kendi fonksiyonumuzu nasıl yazarız.
Array.prototype.kendiMapYapim = function (islem){
    const yeniDizi = [];
    for (let i =0; i<this.length;i++){
        yeniDizi.push(islem(this[i],i));
    }
    return yeniDizi;
}

const myYeniDizi = dizi.kendiMapYapim(function (sayi) {
    return sayi +2;
})
console.log(myYeniDizi);