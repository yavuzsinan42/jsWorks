let isimler = ["yavuz", "hasan","mehmet"];
console.log(isimler.join(" * "));
isimler.push("Ali");
console.log(isimler.join(" * "));
let dizidenCikarilan = isimler.pop(); // diziden son elemanı siler
console.log(isimler.join(" * "));
console.log()
isimler.shift(); //ilk elemanı siler
console.log(isimler.join(" | "));
console.log()
isimler.unshift("Kerim");
console.log(isimler.join(" | "));

delete isimler[1];
console.log(isimler.join(" | "));
let sayilar = [1,2,3,4];
sayilar.splice(4,0,5,6); //ekleme yaptık
console.log(sayilar.toString());

sayilar.splice(0,2); //0'dan başlayıp ilk 2 elemanı sildirdik
console.log(sayilar.toString());
let tekSayilar = [1,3,5];
let ciftSayilar= [2,3,5];
let sayilarim = tekSayilar.concat(ciftSayilar); //2 diziyi birleştirdik
console.log(sayilarim.toString());

let yeniDizi = sayilarim.slice(0,3);

console.log(yeniDizi)