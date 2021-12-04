const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');
const mail = document.getElementById('mail');

const form =document.getElementById('form-rehber');
const kisiListesi = document.querySelector('.kisi-listesi')
//Tüm kişiler için dizi
const tumKisiler=[];
let secilenSatir = undefined;
//Eventler
form.addEventListener('submit',kaydet);
kisiListesi.addEventListener('click',kisiIslemleriniYap);

function kisiIslemleriniYap(event){
    
    if(event.target.classList.contains('btn--delete')){
        const silinecekTR = event.target.parentElement.parentElement;
        const silinecekMail = event.target.parentElement.previousElementSibling.textContent;
        rehberdenSil(event.target.parentElement.parentElement,silinecekMail);
    }else if (event.target.classList.contains('btn--edit')){
        document.querySelector('.kaydetGuncelle').value="Güncelle";
        const secilenTR = event.target.parentElement.parentElement;
        const guncellenecekMail=secilenTR.cells[2].textContent;
        ad.value=secilenTR.cells[0].textContent;
        soyad.value=secilenTR.cells[1].textContent;
        mail.value=secilenTR.cells[2].textContent;
        secilenSatir=secilenTR;
    }

}
function rehberdenSil(silinicekTr,silinecekMail){
    silinicekTr.remove();

    //Maile göre silme işlemi
    tumKisiler.forEach((kisi,index)=>{
        if(kisi.mail ===silinecekMail){
            tumKisiler.splice(index,1);
        }
    })
    //Aynı İşlemin Filter İle Kodlanması
    /*
    const silinmeyecekler = tumKisiler.filter(function(kisi,index){
        return kisi.mail !== silinecekMail;
    });  
    tumKisiler.length=0;
    tumKisiler.push(...silinmeyecekler);
    */
   alanlariTemizle();
   document.querySelector('.kaydetGuncelle').value="Kaydet";
}

function kaydet(e){
    e.preventDefault();
    const eklenecekKisi = {
        ad: ad.value,
        soyad: soyad.value,
        mail: mail.value
    }
    const sonuc = verileriKontrolEt(eklenecekKisi);
    if(sonuc.durum){
        if(secilenSatir){
            
            kisiyiGuncelle(eklenecekKisi);
        }
        else{
            kisiyiEkle(eklenecekKisi)
        }
        
        
        console.log("Sorun Yok");
    }else{
        bilgiOlustur(sonuc.mesaj,sonuc.durum)
        console.log(sonuc.mesaj);
    }
    //console.log(eklenecekKisi);
}
function kisiyiGuncelle(kisi){
    for(let i=0;i<tumKisiler.length;i++){
        if(tumKisiler[i].mail === secilenSatir.cells[2].textContent){
            tumKisilerDizisi[i] = kisi;
            break;
        }
    }

    //kişi parametresinde seçilen kişinin yeni değerleri vardır.
    secilenSatir.cells[0].textContent = kisi.ad;
    secilenSatir.cells[1].textContent = kisi.soyad;
    secilenSatir.cells[2].textContent = kisi.mail;
    console.log(kisi.mail);
    document.querySelector('.kaydetGuncelle').value='Kaydet'
    secilenSatir=undefined;
}

function verileriKontrolEt(kisi){
    //objelerde in kullanımı
    for(const deger in kisi){
        if(kisi[deger]){
            //console.log(kisi[deger]);
        }
        else{
            return {
                durum:false,
                mesaj: "Lütfen Tüm Alanları Doldurunuz"
            }
            
        }
    }
    alanlariTemizle();
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
    //setTimeOut, setInterval
    setTimeout(() =>{ 
        const silinecekDiv = document.querySelector('.bilgi');
        if(silinecekDiv){
            silinecekDiv.remove();
        }
    },2000)
}

function alanlariTemizle(){
    ad.value='';
    soyad.value='';
    mail.value='';
}
function kisiyiEkle(eklenecekKisi){
    const olusturulanTr= document.createElement('tr');
    olusturulanTr.innerHTML = `<td>${eklenecekKisi.ad} </td>
    <td>${eklenecekKisi.soyad}</td>
    <td>${eklenecekKisi.mail}</td>
    <td>
        <button class="btn btn--edit"><i class="fas fa-edit"></i></button>
        <button class="btn btn--delete"><i class="fas fa-trash"></i></button>          
    </td>`;
    kisiListesi.appendChild(olusturulanTr);
    tumKisiler.push(eklenecekKisi)
    bilgiOlustur('Kisi Rehbere Kaydedildi',true);
}