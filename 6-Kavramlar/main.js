/*function a(){
    console.log(arguments);
}

a();*/
//Scope Chain 
/*
Değişkenlerin tanımlı olduğu ortamların birbirine bağlanmasını ifade eder.
Örneğin: 
bir js dosyası içerisinde tanımlanan bir değişken aynı dosyada tanımlanan
fonksiyon içerisinde kullanılırsa ve orada sıfırdan tanım yapılmamışsa
global context'de yer alan değişken değeri fonksiyon içerisinde kulllanılır.
Bu durum içe içe yazılan fonksiyonlar içinde geçerli lexical olarak değişkenin değerini
buluna kadar parent'a gidilir.

*/
var sayi=10;
function a(){
    function b() {
        function c(){
            console.log(sayi);
        }
        c();
    }
    b();
}

a();

// Let ve const ile oluşturulan değişkenler block scope'dur.
// var ile oluşturulan değişkenler function scope olduğu için her yerden ulaşılabildiği için sıkıntı 



(function () {
    let isim="Yavuz";
    const yas=24;
    console.log(isim + yas);
})();

//THİS TERİMİ
//1 Implicit Binding ==> Fonksiyonun çağrıldığı noktanın solunda
//ne varsa this onu temsil eder.

const ogrenci = {
    ad: 'Yavuz',
    yas: 42,
    adimiSoyle: function (){
        console.log(this);
        console.log(this.ad);
    },
    yasimiSoyle(){
        console.log(this);
        console.log(this.yas);
    },
    sevgili: {
        ad: 'büşra',
        sevgiliAdiniSoyle(){
            console.log(this);
            console.log(this.ad);
        }
    }
}
ogrenci.adimiSoyle();// Adimi söyle fonksiyonundaki kullanılan this'in değeri
//noktanın solundaki değişkenden alınır.
ogrenci.yasimiSoyle();
console.log("-----------------------------");
const adSoyle = ogrenci.adimiSoyle; //Burada fonksiyon kodlarını farklı bir değişkene
// atadağımız için this parametresinin değeri değişir ve mevcut fonksiyondan alınır.
adSoyle();
ogrenci.sevgili.sevgiliAdiniSoyle();


// 2 Exclicit Binding ==> 
//call,bind,apply
/*
const yavuz = {
    ad: 'yavuz',
    yas: 23,
    okul: 'ktun'
}


const busra = {
    ad: 'büşra',
    yas: 22,
    okul: 'ktun'
}

const bilgilerimiYazdir = function (renk1,renk2){
    console.log(this);
    console.log(`benim adım ${this.ad} yaşım ${this.yas} okulum ${this.okul}`);
    console.log(`sevdigim renkler ${renk1}, ${renk2}`);
}

bilgilerimiYazdir.call(yavuz,"mavi","krem");
//call fonksiyonu this'e değer atamamızı sağlar. İlk parametre this'in alacağı değerdir.
//Sonrakiler ise fnk. parametreleridir.

bilgilerimiYazdir.apply(yavuz,["mavi","krem"]);
//apply fonk. da aynı görevi görür. Tek farkı fonksiyon parametrelerini dizi olarak alır.

const cagir = bilgilerimiYazdir.bind(busra,"mavi","krem")
//bind fonksiyonuda diğerleriyle aynı görevi görür ancak fonksiyonu çağırmaz.
//yalnızca verilen parametleri uygular ve bunu değişken içerisine alarak çalıştırabilirsin.
cagir();


// new Binding

const Araba = function (renk, model){
    this.renk = "benim rengim "+renk;
    this.model = model;
    this.bilgiler = function(){
        console.log(this);
        console.log(renk);
        console.log(this.renk);

    }
}
const honda = new Araba('kırmızı','civic');
//aynı
const test = {
    renk: 'kırmızı',
    model: 'civic'
}

honda.bilgiler();
*/

//Arrow Function

//arrow fonk.larda aslında this bulunmaz.
//kendini çağıran parent scope'daki this değerini kullanır.
// ek olarak arrow fonksiyon olarak tanımlanan fonksiyonlardan exlicit apply,bind,call methodları 
// kullanılamaz.
/*
const fonksiyon = () =>{
    console.log(this);
}
fonksiyon();

yavuz = {
    isim: "Yavuz",
    soyisim: "Aydemir",
    fonk: () => {
        console.log(this);
    },
};

yavuz.fonk();
*/

const okul = {
    isimler: ['yavuz','sinan','salih'],
    idler: [1552,2543,3422],
    ogrencileriYazdir(){
        that = this;
        this.isimler.forEach(function (isim,index){
            console.log(that);
            console.log(isim,that.idler[index]);
        });
    },
    idleriYazdir(){
        this.idler.forEach(function(id,index){
            console.log(id);
            console.log(this);
        }.bind(this));
    },
    ogrenciSayisiniVer(){
        setTimeout(() => {
            console.log("toplam ogrenci sayisi:"+this.isimler.lenght);
        },2000);
    }
}
function callback(isim,index){
    
}
/*
okul.ogrencileriYazdir();
okul.idleriYazdir();
okul.ogrenciSayisiniVer();
*/

class Ekran{
    constructor(){
        this.baslik1 = document.querySelector('h1');
        this.baslik2 = document.querySelector('h2');
        this.baslik3 = document.querySelector('h3');
        this.sayi = 12;
        this.baslik1.addEventListener('click', this.baslikTiklandi.bind(this));
        this.baslik2.addEventListener('click', ()=>this.baslik2Tiklandi());
        this.baslik3.addEventListener('click', function(){
            console.log(this);
        });
    
    }
    baslikTiklandi(){
        console.log('calisti');
        console.log(this);
        console.log(this.sayi);
    }
    baslik2Tiklandi(){
        console.log('calisti');
        console.log(this);
        console.log(this.sayi);
    }
}

const ekran = new Ekran();
/*
const baslik1 = document.querySelector('h1');
const baslik2 = document.querySelector('h2');
const baslik3 = document.querySelector('h3');

baslik1.addEventListener('click', function(e){
    console.log(this);
});

baslik2.addEventListener('click', baslikTiklandi);

function baslikTiklandi(e){
    console.log(e.target);
    console.log(this);
}*/


//Closure Kavramı (Önemli)

//Bir fonksiyonda bulunan lokal değişkenlerin fonksiyon return edilse bile saklanması olayıdır.
/*

const ikiyleCarp = sayi => sayi*2;

const s1 = ikiyleCarp(5);
const s2 = ikiyleCarp(9);
console.log(s1,s2);
*/
/*
const dis = () => {
    let sayac =0;
    const arttir = () => {
        sayac++;
        console.log(sayac);
    }
    return arttir;
}

const sonuc = dis();
const s2 = sonuc();
sonuc()
sonuc()
console.log(s2);*/

//CLOSURE ORNEK 1


/*
const sayilariTopla= () => {
    console.log("Calisti");
    const a = 20, b=30;
    const topla = ()=> {
        console.log("toplam " + (a+b));
    }
    setTimeout(topla,6000);
    console.log("fonks. bitti");
    
}

//sayilariTopla()(); return edilen fonk.'u çalıştırdık

sayilariTopla()
*/

//CLOSURE ORNEK 2


/*
const sayacIslemleri = ()=> {
    console.log("fonksiyon başladı");
    let sayac =0;
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');

    h1.addEventListener('click', ()=>{
        sayac++;
        console.log("arttır: "+sayac);
    });
    h2.addEventListener("click",()=>{
        sayac--;
        console.log("azalt: "+sayac);
    });
    console.log("fonksiyon bitti");
}

sayacIslemleri()
*/

//CLOSURE ORNEK 3

/*
const hesapMakinesi = (s1,s2) => {
    function topla(){
        console.log("toplam: "+(s1+s2));
    }
    function carp() {
        console.log("carpım: "+(s1*s2));
    }
    return {
        topla,
        carp: carp
    }
}

const uygulama = hesapMakinesi(2,3);
uygulama.topla();
uygulama.carp();
console.log(uygulama);
*/


//CLOSURE ORNEK 4


/*
function kronometre(){
    let baslangicZamani = Date.now();
    function neKadarSurdu(){
        let gecenZaman = Date.now() - baslangicZamani;
        console.log("Şimdi Geçen Süre: "+gecenZaman);
    }
    return neKadarSurdu
}
const zaman = kronometre();
zaman();
for(let i=0;i<9999999999;i++){

}
zaman();
*/
/*
function ogrenciyiBul(id){
    const ogrenciDizisi = new Array(10).fill({ad:'', id: 0})
    .map(function(ogr,index){
        return {
            ad: 'ogrenci'+index,
            id:index
        }
    })
    console.log(ogrenciDizisi);
    return ogrenciDizisi[id];
}
ogrenciyiBul(5);
console.log(ogrenciyiBul(5));
function ogrenciIslemleri(){
    const ogrenciDizisi = new Array(10).fill({ad:'', id: 0})
    .map(function(ogr,index){
        return {
            ad: 'ogrenci'+index,
            id:index
        }
    })
    console.log(ogrenciDizisi);
    function ogrenciyiBul(id){
        return ogrenciDizisi[id];
    }
    function ogrenciyiSil(id){
        return ogrenciDizisi[id];
    }
    function ogrenciyiGuncelle(id){
        return ogrenciDizisi[id];
    }
    return {
        bul: ogrenciyiBul,
        guncelle: ogrenciyiGuncelle,
        sil: ogrenciyiSil
    };
}
const islemler = ogrenciIslemleri();
console.log(islemler.bul(5));
console.log(islemler.sil(3));
console.log(islemler.guncelle(1));
*/
let db;
function birKereCalistir(){
    let counter=0;
    
    return function(){
        if(counter >0){
            console.log("DB Bağlantısı Zaten Yapıldı");
            return;
        }
        else{
            counter++;
            db ="baglanildi"; 
            console.log("DB Bağlantısı Yapıldı");
        }
    }
}
const initialize = birKereCalistir();
initialize();
initialize();