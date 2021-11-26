const kisiler = [
    {id:11, ad:'yavuz1'},
    {id:11, ad:'yavuz11'},
    {id:11, ad:'yavuz111'},
    {id:1111, ad:'yavuz1111'},
    {id:2, ad:'yavuz2'},
    {id:22, ad:'yavuz22'}

];

const sonuc = kisiler.find(function (kisi){
    return kisi.id === 11
});
console.log(sonuc);


function kendiFind(dizi,aramaSarti){
    let kontrol=1
    let geciciDizi= undefined;
    for(let i=0;i< dizi.length;i++){
        
        const sonuc = aramaSarti(dizi[i]);
        if(sonuc){
            if(kontrol==1){
                geciciDizi = [];
                kontrol=0;
            }
            geciciDizi.push(dizi[i]);
        }
    }
    return geciciDizi;
}

function sorgula(kisi){
    return kisi.id ===1;
}

const kendiSonuc= kendiFind(kisiler,(kisi) => kisi.id ===11);
console.log(kendiSonuc);