const yeniListeElemani = document.createElement('li');
console.log(yeniListeElemani);
yeniListeElemani.className='liste-item';
yeniListeElemani.textContent='Konya';
console.log(yeniListeElemani);
yeniListeElemani.setAttribute('deger','yeni-deger'); //bu şekilde istenilen her türlü attribute eklenebilir
//Varolan ul yapısına eleman ekleme
document.querySelector('ul').appendChild(yeniListeElemani);

//Replace yani komple değiştirme

const kucukBaslik = document.createElement('h6');
kucukBaslik.id = 'h6ID';
kucukBaslik.textContent='Yeni h6 Başlık';
const eskiBaslik = document.querySelector('h2');
const baslikParent = document.querySelector('body');
baslikParent.replaceChild(kucukBaslik, eskiBaslik);
console.log(kucukBaslik);
//Koddan da anlaşıldığı gibi bir html etiketinin yerine eleman ekleyebilmek için öncelikle yeni bir başlık değişkeni-
//oluşturulmalı ve sonrasında yerine konulacak olan etiketin tutulduğu bir değişken tanımlanmalı. Son olarak-
//değişikliğin yapılacağı replaceChild değişkeninin çağrılabilmesi için parent etiketi üzerinden bu fonksiyonun-
//çağrılması ve parametre olarak yeni_etiket,eski_etiket olarak node bilgilerinin tutulduğu değişken isimleri-
//gönderilmelidir.

//Remove Kaldırma İşlemi

const listeItem = document.querySelector('li');
listeItem.remove();

document.querySelector('ul').removeChild(document.querySelectorAll('li')[0]); 
//Burada da seçilen ul değişkeninin altında yer alan li'lerden istediğimizi siliyoruz.

document.querySelector('form').removeChild(document.querySelector('input'));

