let sayilar = [1,2,3,4,5,6,7];
/*
for(let item of sayilar){
    console.log(item);
}*/

//Tetiklenen dizideki her eleman için tanımlanan fonksiyonu tetikliyor
sayilar.forEach(function (sayi){
    console.log(sayi);
})


// Kendi foreach fonksiyonumuz
diziYazdir(sayilar,function(deger,index){
    console.log("değer: "+deger+" index "+index);
})
function diziYazdir(dizi,callback){
    for(let i=0;i<dizi.length; i++){
        callback(dizi[i],i)
    }
}