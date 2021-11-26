//JS'deki class yapısı javadakinden farklı
//JS'de oluşturulan nesneye yönelik programlama mimarisi prototype-based çalışmaktadır.

class Person{
    static sayac =0; //Statik değerlere nesneler üzerinden değil sınıflar üzerinden erişilir.
    constructor(ad, soyad) {
        this.ad=ad;
        this._soyad=soyad; //jsde private kullanım yok. Yazılımcıyı bilgilendirmek _ kullanılır.
        Person.sayac++
    }
    selamVer() {
        return `Merhaba ben ${this.ad + " "+ this._soyad}`
    }
    static test(){
        return 'Merhaba Dünya';
    }
    get soyad(){
        return this._soyad;
    }
    set soyad(yeniDeger){
        this._soyad=yeniDeger
    }
}

const yavuz = new Person('Yavuz Sinan','Aydemir');
const melih = new Person('Melih','Yılmaz');
console.log(yavuz.selamVer());

//Super üst sınıfın constructor methodunu çağırır.
class Ogrenci extends Person{
    constructor(ad,soyad,yas) {
        super(ad,soyad);
        this.yas = yas;
    }
    yasiniSoyle() {
        return `Ben ${this.yas} Yaşındayım`
    }
    selamVer() { //Üst sınıftaki fonksiyonu ezdik
        return `Merhaba  ${this.ad + " "+ this.soyad}`
    }
}

const fatma = new Ogrenci('Fatma','Nankör',21);
console.log(fatma.selamVer());
console.log(fatma.yasiniSoyle());
console.log(Person.sayac);

fatma._soyad = "kamil";
console.log(fatma.selamVer());