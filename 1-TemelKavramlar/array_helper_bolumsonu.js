//Soru 1
let sehirler = [
    {adi:'Konya',plakasi:'42',bolgesi:'İç Anadolu'},
    {adi:'İzmir',plakasi:'34',bolgesi:'Ege'},
    {adi:'Nevşehir',plakasi:'45',bolgesi:'İç Anadolu'},
    {adi:'Ankara',plakasi:'6',bolgesi:'İç Anadolu'},
    {adi:'Adana',plakasi:'1',bolgesi:'Güney Doğu Anadolu'},
];

let siraliSehirler= sehirler.sort(function(a,b){
    if(a.adi<b.adi){
        return -1;
    }
    else if(a.adi>b.adi){
        return 1;
    }
    else return 0;

});
console.log(siraliSehirler);


//Soru 2
/*
function fibonacciHesapla(sayi){
    let geciciDizi=[];
    for(let i=0;i<=sayi;i++)
    geciciDizi.push(i);
    
    geciciDizi.reduce(function(dizininOncekiHali,oAnkiSayi){
        
    },[])
    
}*/

//Soru 3
let ogrenciler = [
    {ad:'Yavuz',soyad:'Bayraktar',id:'1'},
    {ad:'Kamil',soyad:'Şanlı',id:'10'},
    {ad:'Bora',soyad:'Altındiş',id:'8'},
    {ad:'Emir',soyad:'Mezgit',id:'7'},
    {ad:'Cuma',soyad:'Alacalı',id:'2'},

];
let ciftIdler=ogrenciler.filter((ogrenci) => ogrenci.id%2===0
).map((ogrenci) => ogrenci.ad+" "+ogrenci.soyad
).sort(/*function(a,b){
    if(a<b){
        return -1;
    }
    else if(a>b){
        return 1;
    }
    else return 0;
}*/)
console.log(ciftIdler);
