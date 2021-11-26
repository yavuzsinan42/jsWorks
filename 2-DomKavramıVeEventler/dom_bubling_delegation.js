document.querySelector('.parent').addEventListener('click', e=>{console.log("parent");})
//document.querySelector('.child').addEventListener('click', e=>{console.log("child");})

//Child bir nesneye tıklandığında parentlar üzerinde click eventi tanımlanmışsa onlarda çalışır.

//document.querySelector('.item').addEventListener('click', e=>{console.log("itemmm");})
//class ismi ile seçim işlemi yapıldığında aynı class'ı içeren birden fazla item varsa sadece ilkinde click eventi-
//çalışır. Alttakilerde tetiklenmez.

//Yukardaki sorunu çözmek için bu şekilde parent yapısı üzerinden alttaki itemların kontrolünü yaparak seçim işlemi 
//yapmak daha mantıklıdır.
document.querySelector('.parent').addEventListener('click', (e) => {
    if(e.target.classList.contains('item')){  //(e.target.class == 'item child-item')
        console.log('merhaba tıklandı.');
    }
})