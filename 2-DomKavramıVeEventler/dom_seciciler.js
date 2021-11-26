//console.log(document.getElementById('baslik').className);
console.log(document.getElementById('baslik').id);

const baslik = document.getElementById('baslik');
console.log(baslik.id);

//stili değiştirme

baslik.style.backgroundColor= "red";
baslik.style.color='white';
baslik.style.padding ='2rem';

//içerik düzenleme

baslik.textContent = 'JavaScript Override';

const test = baslik.textContent;

console.log(test);

baslik.innerText = 'JS OverWrite';
//etiket içerisine html öge eklemek için kullanılır.
baslik.innerHTML = '<img src="https://source.unsplash.com/100x100" alt="">';

console.log(document.querySelector('h2'));//etiket seçilebilir
console.log(document.querySelector('#liste'));  //id ile seçim işlemi yapıldı.
console.log(document.querySelector('.liste-item')) //class ile seçim yapıldı.
//quert selector kullanılırken aynı class ismine sahip birden fazla etiket olsa bile sadece-
//ilk bulduğu etiketi geri döndürür.

console.log(document.querySelector('.link.link-facebook')); //birden fazla class'ı aynı anda içeren etiketi yakalamak 
//için kullanıldı.

const myListe = document.querySelector('li');
myListe.style.color = 'orange';
const sira=3;


document.querySelector('li:last-child').style.color="green"; //Son elemanı seçtik
document.querySelector(`li:nth-child(${sira})`).style.color = 'pink'; //nth-child ise istenen sırada olan elemanı seçmeyi sağlar
//nth-child() içerine odd ve even parametreleride verilebilir tek ve çift hanelerin seçilmesini sağlar ancak yine-
//tek eleman seçildiği için ilk 2 elemandan sonrasına etki etmez.
document.querySelector

document.querySelector('.deneme');
console.log(document.querySelector('.deneme'));