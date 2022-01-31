const myPromise = new Promise((resolve,reject)=>{
    //uzun sürecek işlem buraya yazılır
    setTimeout(()=>{
        //resolve("3 saniyelik işlem bitti"); //işlem sonunda dönecek olan şeyi resolve içerisine attık
        reject('internet bağlantısını kontrol edin!');
    },3000);

});

myPromise.then(sonuc=>{
    console.log(sonuc);
}).catch(hata => {console.log(hata);});

function ogrencileriGetir(){

    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const dizi = [];

            for(let i=0; i<30;i++){
                dizi.push({ad: "ogrenci"+(i+1), id:i+1})
            }
            resolve(dizi);
        },2000)
    })
}

function ogrencileriYazdir(dizi){
    console.log(dizi);
}


//reject ile yollanan catch ile resolve ile yollanan ise then ile yakalanır
ogrencileriGetir().then(ogrenciDizisi =>{console.log(ogrenciDizisi);})
ogrencileriGetir().then(ogrenciDizisi =>ogrencileriYazdir(ogrenciDizisi))



const promiseBasarili = Promise.resolve("başarılı promise");
promiseBasarili.then(sonuc => console.log(sonuc))
const promiseHata = Promise.reject("Hata Çıktı");
promiseHata.catch(snc => console.log(snc))


const p1 = new Promise((resolve,reject) =>{
    setTimeout(()=> {
        resolve("3 saniyelik işlem bitti");
    },3000)
});

const p2 = new Promise((resolve,reject) =>{
    setTimeout(()=> {
        resolve("4 saniyelik işlem bitti");
    },4000)
});
//Birden fazla promise'in sonucunu dizi olarak almış olduk
Promise.all([p1,p2]).then(snc=>console.log(snc))
//İlk Biten İşlemin sonucunu bastırır.
Promise.race([p2,p1]).then(sonuc=>console.log(sonuc+" race"))