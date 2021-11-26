const sayilar = [1,2,3,4,5];

const yeniSayilar= sayilar.map(function (sayi){
    return sayi*2;
})
sayilar.push(7);
console.log(sayilar);
console.log(yeniSayilar);

const kitaplar = [
    {adi:'1', sayfaSayisi: 30},
    {adi:'2', sayfaSayisi: 40},
    {adi:'3', sayfaSayisi: 50}

    
];

const sayfaSayilari=kitaplar.map(function(kitap){
    return kitap.sayfaSayisi;
})

console.log(sayfaSayilari);

const kisiler = [
    {adi:'Beren', soyadi: "Tunçbilek"},
    {adi:'Yamaç', soyadi: "Altın"},
    {adi:'Veli', soyadi: "Yalçın"}

    
];

const yeniIsımler = kisiler.map((kisi) => kisi.adi+" "+kisi.soyadi);
console.log(yeniIsımler);


function kendiMapYapim(dizi,islem){
    const yeniDizi = [];
    for(let i=0;i<dizi.length;i++){
        yeniDizi.push(islem(dizi[i],i));
    }

    return yeniDizi;
}

const olusanYeniDizi = kendiMapYapim(sayilar, function (sayi,index){
    console.log(index);
    return sayi*5;
});
console.log(olusanYeniDizi);