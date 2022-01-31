console.log("basladi");
const dizi = ogrencileriGetir(ogrencileriYazdir);


console.log("bitti");
function ogrencileriGetir(callback){
    setTimeout(function (){
        const dizi = [];
        for (let i=0;i<300;i++){
            dizi.push({ad:"öğrenci"+(i+1), id:i+1});
        }
        callback(dizi) // burada işlem sonucunu bekleyip ona göre diziyi yazdırması için beklemesini
        //sağladık.
    },3000)
}
function ogrencileriYazdir(ogrencilerDizisi){
    console.log(ogrencilerDizisi);
}