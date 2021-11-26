//Çoklu Element Seçme
const linkler = document.getElementsByClassName('link');
console.log(linkler);
console.log(linkler[0]);
linkler[0].getElementsByClassName.color='red';
console.log(document.querySelector('ul').getElementsByClassName('liste-item')); //ul altında yer alan çoklu elemanları seçtik

const dizi = Array.from(linkler);
dizi.reverse();
console.log(dizi);
dizi.forEach(item => {
    console.log(item);
});

const listeElemanlari = document.getElementsByTagName('li'); //Etiket ismine göre toplu eleman getirme
console.log(listeElemanlari);

const linkListesi = document.querySelectorAll('a'); //Toplu olarak seçmeyi sağlar
console.log(linkListesi);
const sehirler = document.querySelectorAll('li.liste-item');
console.log(sehirler);

const sehirlerTek = document.querySelectorAll('li:nth-child(odd)');
const sehirlerCift = document.querySelectorAll('li:nth-child(even)');
sehirlerTek.forEach(item => {
    item.style.backgroundColor='gray';
    item.style.color='white';
});
sehirlerCift.forEach(item => {
    item.style.backgroundColor='purple';
    item.style.color='white';
});

