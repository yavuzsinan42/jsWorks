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


const isim = 'Yavuz';
console.log(typeof isim);
console.log(isim instanceof Object);

console.log(isim.toUpperCase());
console.log(isim instanceof Object);
//Primitive bir değişkene obje gibi davranıp fonksiyonlarını kullanırsak sarmalayıcı objeden gerekli
// olan yapıları kullanmamıza olanak tanır. 
//Örneğin string değişken üzerinde charAt gibi fonksiyonları kullanmamızı sağlayan yapı String sarma-
//layıcı sınıfında tanımlanmıştır.
console.log(isim.constructor.prototype);
const renk = new String('kirmizi'); //Bu şekilde wrapper sınıftan nesne olarak üretirsek obje türünde
//değişken oluşturulur.
console.log(typeof renk);

const dogumYili = new Number(1998);
console.log(typeof dogumYili);

//Obje türünden tanım yaptığımız için ek alan eklemesi yapabiliriz.
dogumYili.ay = "Ocak";
console.log(dogumYili.ay);

const sehirler = new Array('ysa','my','ma','mat');
console.log(sehirler);