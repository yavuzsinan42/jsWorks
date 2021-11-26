const yeniGorev = document.querySelector('.input-gorev');
const ekleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');

ekleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSilTamamla);
document.addEventListener('DOMContentLoaded',localStorageOku); //Var olan dom yapısı yüklendikten sonra localstorage
//verilerini çekmek için localStorage oku fonksiyonu tetiklendi.

function gorevEkle(e) {
    e.preventDefault();
    if(yeniGorev.value.length >0){
        gorevItemOlustur(yeniGorev.value);
        localStorageKaydet(yeniGorev.value);
        yeniGorev.value = ''; // Ekleme sonrası input alanı temizlendi
    }
    else{
        alert('Boş Görev Tanımı Yapılamaz');
    }
}

function gorevSilTamamla(e) {
    const clickedButton = e.target;
    if (clickedButton.classList.contains('gorev-btn-tamamlandi')) {
        //toggle metodu varsa siler yoksa ekler.
        clickedButton.parentElement.classList.toggle('gorev-tamamlandi');

    }
    else if (clickedButton.classList.contains('gorev-btn-sil')) {
        if(confirm('Silmek İstediğinize Emin Misiniz?')){ //confirm yapısı silmeden önce onay almak için kullanılıyor
            clickedButton.parentElement.classList.toggle('kaybol');
            const silinecekGorev = clickedButton.parentElement.children[0].innerText;
            
            localStorageSil(silinecekGorev);
            //clickedButton.parentElement.remove();
            clickedButton.parentElement.addEventListener('transitionend', function () {
                clickedButton.parentElement.remove();
            });
        }
        
    }
}

function localStorageKaydet(yeniGorev) {
    let gorevler = localStorageArrayDonustur();
    gorevler.push(yeniGorev);
    localStorage.setItem('gorevler', JSON.stringify(gorevler));
}

function localStorageOku() {
    let gorevler = localStorageArrayDonustur();
    gorevler.forEach(element => {
        gorevItemOlustur(element);
    });
}

function gorevItemOlustur(gorev) {
    //div oluşturma
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    //li oluşturma
    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.textContent = gorev;
    gorevDiv.appendChild(gorevLi);



    //Tamamlandı Butonu Ekleme
    const tamamlandiBtn = document.createElement('button');
    tamamlandiBtn.classList.add('gorev-btn');
    tamamlandiBtn.classList.add('gorev-btn-tamamlandi');
    tamamlandiBtn.innerHTML = '<i class="fas fa-check"></i>';
    gorevDiv.appendChild(tamamlandiBtn);

    //Silindi Butonu Ekleme
    const silBtn = document.createElement('button');
    silBtn.classList.add('gorev-btn');
    silBtn.classList.add('gorev-btn-sil');
    silBtn.innerHTML = '<i class="fas fa-trash"></i>';
    gorevDiv.appendChild(silBtn);

    //ul'ye oluşturulan div'i ekleme
    gorevListesi.appendChild(gorevDiv);
}


function localStorageSil(gorev){
    let gorevler= localStorageArrayDonustur();
   
    //splice ile item silme
    const silinecekElemanIndex = gorevler.indexOf(gorev); //silinecek olan elemanın index değeri bulundu
    gorevler.splice(silinecekElemanIndex,1); //o index değerinden itibaren 1 eleman diziden silindi.
    localStorage.setItem('gorevler',JSON.stringify(gorevler));
}
function localStorageArrayDonustur(){
    let gorevler;
    if(localStorage.getItem('gorevler')===null){
        gorevler = [];
    }
    else{
        gorevler=JSON.parse(localStorage.getItem('gorevler'));
    }
    return gorevler;
}