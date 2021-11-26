
/*
document.querySelector('.link').addEventListener('click',function(e){
    let deger;
    deger=e;
    console.log(deger);
    deger=e.target;
    console.log(deger);
    deger=e.target.className;
    console.log(deger);
    e.preventDefault();
})
*/
document.querySelector('.link').addEventListener('click',tiklanma); //tıklanınca tetiklenir
document.querySelector('.link').addEventListener('dblclick',tiklanma); //çift tıklanınca tetiklenir
document.querySelector('.link').addEventListener('mousedown',tiklanma); //tıklanınca basılı dururken  tetiklenir
document.querySelector('.link').addEventListener('mouseup',tiklanma); //tıklanınca basılı dururken çekince  tetiklenir
document.querySelector('.link').addEventListener('mouseenter',tiklanma); //mouse üzerine gelince  tetiklenir
document.querySelector('.link').addEventListener('mouseleave',tiklanma); //mouse üzerinden ayrılınca  tetiklenir

document.querySelector('.link').addEventListener('mouseover',tiklanma); //mouse üzerine gelince tetiklenir
document.querySelector('.link').addEventListener('mouseout',tiklanma); //mouse üzerinden ayrılınca  tetiklenir


//mouseenter ile mouserover'ın farkı mouse over child elementlerin üzerine geçilip tekrar üzerine gelinse bile-
// tetiklenirken mouseenter'ın tetiklenmesi için mouse'ın element alanından komple çıkıp tekrar gelmesi gerekir.
//mouseout ve mouseleave eventleri içinde aynısı gereklidir.


document.querySelector('.container').addEventListener('mousemove', kordinatYazdir);


function tiklanma(e){
    let deger;
    deger=e;
    //console.log(deger);
    deger=e.target;
    //console.log(deger);
    deger=e.type;
    console.log(deger);
    e.preventDefault();
}

function kordinatYazdir(e){
    document.querySelector('.yazi').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
    document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX%255},${e.clientY%255},50)`;
}