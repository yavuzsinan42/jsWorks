const isimler = ['yavuz','emre','hasan','ali'];

const sayilar = [1,50,2,41,41,84,8,35,3];

const ogrenciler = [
    {id: 12, isim: 'yavuz', yas:23},
    {id: 63, isim: 'veli', yas:23},
    {id: 42, isim: 'kerim', yas:23},
    {id: 18, isim: 'samet', yas:23},
    {id: 16, isim: 'faysal', yas:23},
    {id: 54, isim: 'kazım', yas:23},
    {id: 8, isim: 'kurtuluş', yas:23},
    {id: 5, isim: 'yamaç', yas:23},

];

const adanZyeSiraliDizi = isimler.sort();
console.log(isimler);
const tersSiraliDizi = adanZyeSiraliDizi.reverse();
console.log(tersSiraliDizi);

const kisa =isimler.sort().reverse();
console.log(kisa);


const sirali = sayilar.sort();
console.log(sirali);

const tamSirali = sayilar.sort(function(a,b){
    return a-b;
});
console.log(tamSirali);

const tersSirali = sayilar.sort(function(a,b){
    return b-a;
});
console.log(tersSirali);

const siraliObje = ogrenciler.sort(function(a,b){
    return a.id-b.id;
})
console.log(siraliObje);
const siraliObjeString = ogrenciler.sort(function(a,b){
    if(a.isim<b.isim){
        return 1;
    }
    else if (a.isim>b.isim){
        return -1;
    }
    else return 0;

    //Ternary Hali
    // return (a.isim <b.isim) ? 1: (a.isim > b.isim ? -1 : 0);
});
console.log(siraliObjeString);

