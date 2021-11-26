let myDizi = [1,2,3];
const ikiIleCarp = function (sayi){
    return sayi*2;
}
const ikiIleBol = function (sayi){
    return sayi/2;
}
const ikiIleTopla = function (sayi){
    return sayi+2;
}


const diziIslemleri = function (dizi,islem){
    let geciciDizi = [];
    for(let i =0; i<dizi.length; i++){
        geciciDizi[i] = islem(dizi[i]);

    }
    console.log(geciciDizi);
}

diziIslemleri(myDizi, ikiIleCarp);
diziIslemleri(myDizi, ikiIleBol);
diziIslemleri(myDizi, ikiIleTopla);

function adimiSoyle(ad,soyad){
    console.log("Merhaba: "+ad+" "+soyad);
}

function adimiBagir(ad,soyad, callback){
    const mesaj= "MERHABA: "+ad.toUpperCase()+" "+ soyad.toUpperCase();
    callback(mesaj);
}

adimiBagir("Yavuz","Sinan",function(msj){console.log(msj);})


