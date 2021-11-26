//Session storage  ile kaydedilen veriler tarayıcı kapatılınca gider. 
//Local storage ile kaydedilenlerse kapansa dahi silinmez.
/*
localStorage.setItem('ad','Yavuz');
localStorage.setItem('yas','40');
sessionStorage.setItem('il','Konya');

console.log(localStorage.getItem('ad'));

localStorage.removeItem('ad')

//Tüm değerleri silmek için

localStorage.clear();
//Kendi Çözümüm
/*
let counter=1;
document.querySelector('#form').addEventListener('submit', function (e) {
    const yeniIsim = document.querySelector('#isim').value;
    localStorage.setItem(`isim${counter}`,yeniIsim);
    counter++;
    e.preventDefault();
})
*/
document.querySelector('#form').addEventListener('submit', function (e) {
    const yeniIsim = document.querySelector('#isim').value;
    let isimDizisi;
    if(localStorage.getItem('isimler')===null){
        isimDizisi = [];
    }
    else{
        isimDizisi = JSON.parse(localStorage.getItem('isimler')); // json formatındaki diziyi parse ettik
    }
    isimDizisi.push(yeniIsim);

    localStorage.setItem('isimler',JSON.stringify(isimDizisi));
    e.preventDefault();
})



//Burada local storageda bulunan isimler anahtar değerinin valuelerini önce jsondan diziye çevirip sonrasında 
//o dizide gezerek parent olarak alınan ul etiketine li create ederek child eklemesi yaptık.
const ulListesi = document.querySelector('.liste');
const isimDizisi = JSON.parse(localStorage.getItem('isimler'));
if(isimDizisi!=null){
    isimDizisi.forEach(isim => {
        const yeniLi = document.createElement('li');
        yeniLi.textContent=isim;
        ulListesi.appendChild(yeniLi);
    });
}


