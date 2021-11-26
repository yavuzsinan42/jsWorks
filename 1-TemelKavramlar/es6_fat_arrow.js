function selamVer(){
    console.log("Merhaba");

}
selamVer();

const selamVerDegisken = function (){
    console.log("Merhaba Değişken");
}
selamVerDegisken()

const fatArrow = () => {
    console.log("Merhaba fatarrow")
}
const fatArrow2 = _ => {  //parametre almıyorsa bu şekilde yazılır
    console.log("Merhaba fatarrow")
}

fatArrow();
fatArrow2();

function karesiniAl(sayi) {
    return sayi*sayi;
}
const karesiniAlDegisken = function (sayi) {
    return sayi*sayi;
}
console.log(karesiniAl(5));
console.log(karesiniAlDegisken(7));

const fatArrowParametreli = (sayi) => {
    return sayi * sayi;
};
console.log(fatArrowParametreli(12));
//Tek satır ve tek parametreli fonksiyon tanımmında kullanılabilir.
const fatArrowParametreliKisa = sayi => sayi*sayi;
console.log(fatArrowParametreliKisa(10));