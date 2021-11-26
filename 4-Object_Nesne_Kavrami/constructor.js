//1-İlkel Yöntem - Factory Fonksiyon
const sinan = createOgrenci('sinan',23,false,'Selçuk Üniversitesi');
const mert = createOgrenci('mert',23,true,'Akdeniz Üniversitesi');

function createOgrenci(ad, yas, evliMi, okul){ //Factory Fonksiyon olarak bilinir.
    return { //Obje üretimi için kullanılır.
        isim: ad,
        yas: yas,
        evliMi: evliMi,
        okuduguOkul: okul,
    }
};
const ogrenciler = [mert,sinan];

//2-Constructor Fonksiyon
// 
/* 
İlk harf büyük dikkat et
*/
function Ogrenci(ad, yas, evliMi, okul){
    this.ad = ad;
    this.yas = yas;
    this.evliMi = evliMi;
    this.okul=okul;
    this.bilgilerimiGoster = function () {
        return `ismim ${this.ad} yaşım ${this.yas}`;
    }
    console.log(this); // Burada this new kulladnığımız için  o nesnenin içindekileri belirtir.
}
//New kullanılmazsa hata alırız.
//New ile yeni bir obje oluşturulur.
//New ile return etmeye gerek kalmaz.
//New this kelimesini o an oluşturulan nesneye bağlar.
const yunus = new Ogrenci('Kerim','25',false,'Selçuk Üniversitesi')

//Tüm objeler onu oluşturan constructor fonksiyonuna erişebilir.
console.log(yunus.constructor);

const dizi = [];
console.log(dizi.constructor);

const fonk = function (){};
console.log(fonk.constructor);

//Jsdeki tüm objeler onu oluşturan constructor foknsiyonuna erişebilir.
//js ile beraber gelen built in constructyor fonksiyonlar vardır.