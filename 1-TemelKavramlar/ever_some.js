const sayilar = [1,2,3,4,5,6];

const sonuc = sayilar.every(function (sayi){
    return sayi<5;
})
console.log(sonuc);

const sonucSome = sayilar.some(function (sayi){
    return sayi<3;
})
console.log(sonucSome);
