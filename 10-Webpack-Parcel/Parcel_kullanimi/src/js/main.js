console.log("main.js çalıştı");
import Ogrenci from "./ogrenci.js";
const yavuz = new Ogrenci("yavuz");
yavuz.adiniSoyle();

//Parcel sayesinde 
//scss dosyaları otomatil olarak css'e dönüştürülür. Tarayıcıların tanıyabilmesi için 
// bu işlem gerçekleştirilir.
//Dönüştürülmüş halleri dist içerisinden otomatik olarak tarayıcıda açılır.

//Daha az yer tutması için boşlukları siler.