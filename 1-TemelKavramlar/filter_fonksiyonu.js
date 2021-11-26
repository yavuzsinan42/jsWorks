const bitkiler = [
    {ad:'üzüm', tur:'meyve'},
    {ad:'çilek', tur:'meyve'},
    {ad:'muz', tur:'meyve'},
    {ad:'ıspanak', tur:'sebze'},
    {ad:'kereviz', tur:'sebze'},
    {ad:'armut', tur:'meyve'}
];

function meyveleriBul(){
    const geciciDizi =[];
    for(let i=0;i<bitkiler.length;i++){
        if(bitkiler[i].tur==='meyve'){
            geciciDizi.push(bitkiler[i]);
        }
    }
    return geciciDizi;
}

function sebzeleriBul(){
    const geciciDizi =[];
    for(let i=0;i<bitkiler.length;i++){
        if(bitkiler[i].tur==='sebze'){
            geciciDizi.push(bitkiler[i]);
        }
    }
    return geciciDizi;
}
console.log(meyveleriBul());
console.log(sebzeleriBul());


const sebzeler = bitkiler.filter(function(bitki){
    return bitki.tur ==="sebze";
});
const meyveler = bitkiler.filter(function(bitki){
    return bitki.tur ==="meyve";
});
console.log(sebzeler);
console.log(meyveler);

function kenFilterYapim(dizi, filterSartlari){
    const geciciDizi = [];
    for(let i=0;i<dizi.length;i++){
        const sonuc = filterSartlari(dizi[i]);
        if(sonuc){
            geciciDizi.push(dizi[i]);
        }
    }
    return geciciDizi;
}
function filtre(bitki){
    return bitki.tur === 'meyve';
}
//const yeniMeyveler = kenFilterYapim(bitkiler,filtre);
const yeniMeyveler = kenFilterYapim(bitkiler,function (bitki){
    return bitki.tur === 'meyve';
});

//arrow fonksiyon hali
const arrowMeyveler = kenFilterYapim(bitkiler, bitki => bitki.tur ==='meyve')

console.log(yeniMeyveler)
console.log(arrowMeyveler)
