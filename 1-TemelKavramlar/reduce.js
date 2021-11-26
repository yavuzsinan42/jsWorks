const sayilar = [1,2,3,4,5];
/*
sayilar.reduce(function (pre,curr,index){
    console.log(pre,curr,index);
},0);

const sonuc= sayilar.reduce(function (toplam,curr,index){
    return toplam=toplam+curr;
},0);
console.log(sonuc);

const yeniDiziWithReduce = sayilar.reduce(function(dizininOncekiHali, oAnkiSayi){
    dizininOncekiHali.push(oAnkiSayi*2);
    return dizininOncekiHali;

},[]);
console.log(yeniDiziWithReduce);
*/

const yeniDizi = sayilar.filter(function (sayi,index){
    return sayi >3;
});

const yeniDiziWithReduce = sayilar.reduce(function (pre,sayi,index){
    if(sayi>3)
    pre.push(sayi);
    return pre;
},[]);
console.log(yeniDizi);
console.log(yeniDiziWithReduce);

const yeniDiziFind = sayilar.find(function(sayi){
    return sayi==3;
})
const yeniDiziReduce = sayilar.reduce(function (pre,sayi,index){
    console.log("pre "+pre);
    if(sayi===2){
        return sayi;
    
    }
    else{
        return pre;
    }

},undefined);
console.log(yeniDiziFind);
console.log(yeniDiziReduce);