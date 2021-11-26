const sayilar = [1,2,3,4,5,6,7,8,9];

const yeniDizi = sayilar.filter(function(sayi){
    return (sayi%2)!=0
});
console.log(yeniDizi);

const yeniDiziKare = yeniDizi.map(function(sayi){
    return sayi*sayi;
})
console.log(yeniDiziKare);

const yeniDiziBuyuk = yeniDiziKare.reduce(function(pre,curr,index){
    if(curr>=10){
        pre = pre+curr;
        return pre;
    }
    return pre;
},0)
console.log(yeniDiziBuyuk);


function kisaVersiyon(sayilar){
    return sayilar.filter(sayi => sayi%2 !==0).map(sayi=>sayi*sayi).reduce((genelToplam, sayi) => sayi>10 ? genelToplam+=sayi : genelToplam, 0);
}
console.log(kisaVersiyon(sayilar));