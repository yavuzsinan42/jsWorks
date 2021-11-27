const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');
const mail = document.getElementById('mail');

const form =document.getElementById('form-rehber');

form.addEventListener('submit',kaydet);

function kaydet(e){
    e.preventDefault();
    const eklenecekKisi = {
        ad: ad.value,
        soyad: soyad.value,
        mail: mail.value
    }
    const sonuc = verileriKontrolEt(eklenecekKisi);
    if(sonuc.durum){
        bilgiOlustur(sonuc.mesaj,sonuc.durum)
        console.log("Sorun Yok");
    }else{
        bilgiOlustur(sonuc.mesaj,sonuc.durum)
        console.log(sonuc.mesaj);
    }
    console.log(eklenecekKisi);
}

function verileriKontrolEt(kisi){
    //objelerde in kullanımı
    for(const deger in kisi){
        if(kisi[deger]){
            console.log(kisi[deger]);
        }
        else{
            return {
                durum:false,
                mesaj: "Lütfen Tüm Alanları Doldurunuz"
            }
            
        }
    }
    return{
        durum: true,
        mesaj: "İşlem Başarılı"
    }
}
function bilgiOlustur(mesaj,durum){
    const olusturulanBilgi = document.createElement('div');
    olusturulanBilgi.textContent=mesaj;
    olusturulanBilgi.className="bilgi";
    if(durum){
        olusturulanBilgi.classList.add('bilgi--success');
    }
    else{
        olusturulanBilgi.classList.add('bilgi--error')
    }
    //Kısa Hali
    //olusturulanBilgi.classList.add(durum ? 'bilgi--success' : 'bilgi--error')
    document.querySelector('.container').insertBefore(olusturulanBilgi,form);
}