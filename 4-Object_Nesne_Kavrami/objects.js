const yavuz = {
    ad: 'yavuz',
    yas:23,
    sevdigiRenkler: ['mavi','siyah'],
    adres: {
        il: 'Ankara',
        plakaKodu: 42,
    },
    bilgileriSoyle: function () {
        return 'benim adim yavuz'
    },
    ['full-name']:'Yavuz Sinan Aydemir', //Eğer değişken isminde - vs varsa bu şekilde-
    //string olarak tanımlanmalıdır.
};

yavuz.okul = "Konya Teknik Üniversitesi"; //obje içerisine tanımlanmamış bir alanıda sonradan-
//eklemek mümkündür. Ancak tercih edilmez.
const sahin = {
    ad: 'Şahin',
    yas:23,
    sevdigiRenkler: ['mavi','siyah'],
    adres: {
        il: 'Ankara',
        plakaKodu: 06,
    },
    bilgileriSoyle: function () {
        return "Benim Adım "+this.ad;
    },
    ['full-name'] : 'Şahin Ayırt', //Eğer değişken isminde - vs varsa bu şekilde-
    //string olarak tanımlanmalıdır.
};

console.log(yavuz.bilgileriSoyle());
console.log(yavuz['sevdigiRenkler']);
console.log(sahin.bilgileriSoyle());


const sinan = createOgrenci('sinan',23,false,'Selçuk Üniversitesi');
const mert = createOgrenci('mert',23,true,'Akdeniz Üniversitesi');

function createOgrenci(ad, yas, evliMi, okul){ //Factory Fonksiyon olarak bilinir.
    return { //Obje üretimi için kullanılır.
        isim: ad,
        yas: yas,
        evliMi: evliMi,
        okuduguOkul: okul,
    }
}
console.log(mert);