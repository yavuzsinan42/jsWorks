//Asenkron Çalışma Mantığı
//Asenkron programlamada kodlar yukarıdan aşağı doğru yürütülürken uzun süren işlemleri beklemeden
//yürütmeye devam etme mantığıdır. Uzun süren işlemler bittiğinde onlar sonradan yansıtılır.
//callback-promise-async, await ->asenkron programlamada kullanılan yapılar.
//JS single thread bir dildir. Bu işlemler browserlar sayesinde sağlanır.

console.log('başladı');
setTimeout(function(){
    console.log("5 saniyelik işlem bitti");
},5000);

console.log("bitti");
