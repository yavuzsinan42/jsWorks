
class Kisi {
    constructor(ad, soyad, mail) {
        this.ad = ad;
        this.soyad = soyad;
        this.mail = mail;
    }
}
class Util {
    static bosAlanKontrolEt(...alanlar) {
        let sonuc = true;
        alanlar.forEach(alan => {
            if (alan.length === 0) {
                sonuc = false;
                return sonuc;
            }
        });
        return sonuc;
    }
    static emailGecerliMi(email){
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        
        return pattern.test(String(email).toLowerCase());
        
    }
}
class Ekran {
    constructor() {
        this.ad = document.getElementById('ad');
        this.soyad = document.getElementById('soyad');
        this.mail = document.getElementById('mail');
        this.ekleGuncelleButon = document.querySelector('.kaydetGuncelle');
        this.form = document.getElementById('form-rehber');
        this.form.addEventListener('submit', this.kaydetGuncelle.bind(this));
        this.kisiListesi = document.querySelector('.kisi-listesi');
        this.kisiListesi.addEventListener('click', this.guncelleVeyaSil.bind(this));
        this.secilenSatir = undefined;
        this.depo = new Depo();
        this.kisileriEkranaYazdir();
    }
    alanlariTemizle() {
        this.ad.value = '';
        this.soyad.value = '';
        this.mail.value = '';

    }
    guncelleVeyaSil(e) {
        const tiklanmaYeri = e.target;
        if (tiklanmaYeri.classList.contains('btn--delete')) {
            this.secilenSatir = tiklanmaYeri.parentElement.parentElement;
            this.kisiyiEkrandanSil();
        }
        else if (tiklanmaYeri.classList.contains('btn--edit')) {
            this.secilenSatir = tiklanmaYeri.parentElement.parentElement;
            this.ekleGuncelleButon.value = 'Guncelle';
            this.ad.value = this.secilenSatir.cells[0].textContent;
            this.soyad.value = this.secilenSatir.cells[1].textContent;
            this.mail.value = this.secilenSatir.cells[2].textContent;
            
        }
    }
    kisiyiEkrandaGuncelle(kisi) {
        this.depo.kisiGuncelle(kisi, this.secilenSatir.cells[2].textContent)
        this.secilenSatir.cells[0].textContent= kisi.ad;
        this.secilenSatir.cells[1].textContent= kisi.soyad;
        this.secilenSatir.cells[2].textContent= kisi.mail;

        this.depo.kisiGuncelle(kisi, this.secilenSatir.cells[2].textContent)
        this.alanlariTemizle();
        this.secilenSatir = undefined;
        this.ekleGuncelleButon.value='Kaydet';
        this.bilgiOlustur('Kişi Güncellendi!',true);
    }
    kisiyiEkrandanSil() {
        this.secilenSatir.remove();
        this.depo.kisiSil(this.secilenSatir.cells[2].textContent);
        this.alanlariTemizle();
        this.secilenSatir = undefined;
        this.bilgiOlustur('Kişi Rehberden Silindi',true);
    }
    kisileriEkranaYazdir() {
        this.depo.tumKisiler.forEach(kisi => {
            this.kisiyiEkranaEkle(kisi);
        })
    }
    kisiyiEkranaEkle(kisi) {
        const olusturulanTR = document.createElement('tr');
        olusturulanTR.innerHTML = `<td>${kisi.ad} </td>
        <td>${kisi.soyad}</td>
        <td>${kisi.mail}</td>
        <td>
        <button class="btn btn--edit"><i class="fas fa-edit"></i></button>
        <button class="btn btn--delete"><i class="fas fa-trash"></i></button>          
        </td>`;
        this.kisiListesi.appendChild(olusturulanTR);
        
    }
    bilgiOlustur(mesaj,durum){
        const olusturulanBilgi = document.querySelector('.bilgi');
    olusturulanBilgi.innerHTML=mesaj;
    
    if(durum){
        olusturulanBilgi.classList.add('bilgi--success');
    }
    else{
        olusturulanBilgi.classList.add('bilgi--error')
    }
    //Kısa Hali
    //olusturulanBilgi.classList.add(durum ? 'bilgi--success' : 'bilgi--error')
    document.querySelector('.container').insertBefore(olusturulanBilgi,this.form);
    //setTimeOut, setInterval
    setTimeout(() =>{ 
        const silinecekDiv = document.querySelector('.bilgi');
        if(silinecekDiv){
            silinecekDiv.remove();
        }
    },2000)
    }
    kaydetGuncelle(e) {
        e.preventDefault();
        const kisi = new Kisi(this.ad.value, this.soyad.value, this.mail.value);
        const sonuc = Util.bosAlanKontrolEt(kisi.ad, kisi.soyad, kisi.mail);
        const emailGecerliMi = Util.emailGecerliMi(this.mail.value);
        
        if (sonuc) {
            if(!emailGecerliMi){
                this.bilgiOlustur('Geçerli bir Mail Yaınız',false);
                return;
            }
            if (this.secilenSatir) {
                //seçilen satir undefined değilse güncellenir.
                this.kisiyiEkrandaGuncelle(kisi);

            }
            else {
                this.bilgiOlustur("İşlem Başarılı",true);
                //Yeni Kişiyi Ekrana Ekler
                this.kisiyiEkranaEkle(kisi);
                //LocalStorage'a Ekler
                this.depo.kisiEkle(kisi);
            }


            this.alanlariTemizle();
        }
        else {
            console.log("Boş Alan Var");
        }
    }
}

class Depo {
    //uygulama ilk açıldığında verileri getirir.
    constructor() {
        this.tumKisiler = this.verileriGetir();
    }
    verileriGetir() {
        let tumKisilerLocal;
        if (localStorage.getItem('tumKisiler') === null) {
            tumKisilerLocal = [];
        } else {
            tumKisilerLocal = JSON.parse(localStorage.getItem('tumKisiler'));
        }
        this.tumKisiler = tumKisilerLocal;
        return tumKisilerLocal;
    }
    kisiEkle(kisi) {
        this.tumKisiler.push(kisi); //class içindeki fonksiyonu çağırdığımız için this kullanıldı.
        localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));

    }
    kisiSil(mail) {
        this.tumKisiler.forEach((kisi, index) => {
            if (kisi.mail === mail) {
                this.tumKisiler.splice(index, 1);
            }
        });
        localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));
    }
    kisiGuncelle(guncelKisi, mail) {
        this.tumKisiler.forEach((kisi, index) => {
            if (kisi.mail === mail) {
                this.tumKisiler[index] = guncelKisi;
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', function (e) {
    const ekran = new Ekran();
})