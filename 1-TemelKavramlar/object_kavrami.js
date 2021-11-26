let ahmet = {
    adi : 'Ahmet',
    soyAdi: 'Varlı',
    dogumYili: 1988,
    yasiHesapla : function (dogumYili){
        return 2021 -dogumYili;
    },
    yasiHesaplaThis : function (){
        return 2021 - this.dogumYili;
    }
};

let mehmet = {
    adi : 'mehmet',
    soyAdi: 'Varlı',
    dogumYili: 1988,
    yasiHesapla : function (dogumYili){
        return 2021 -dogumYili;
    },
    yasiHesaplaThis : function (){
        return 2021 - this.dogumYili;
    }
};
console.log(ahmet.yasiHesapla(1998));
console.log(ahmet.yasiHesaplaThis());

let ogrenciler = [ahmet, mehmet];
console.log(ogrenciler[0].dogumYili);

ahmet.soyAdi= "Keriz";
console.log(ahmet.soyAdi);
ahmet['soyAdi'] = "Yalçın";
console.log(ahmet.soyAdi);
