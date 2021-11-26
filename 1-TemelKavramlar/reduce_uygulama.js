

function parantezlerDengeliMi(kelime){
    const parantezler = kelime.split("");
    const sonuc= parantezler.reduce(function(pre,curr,index){
        if(curr=="("){
            pre.push(curr);
            return pre;
        }
        else if(curr==")"){
            let gecici = pre.pop();
            if(gecici!=="("){
                pre.push(gecici);
            }
            return pre;
        }
        return pre;
    },[]);
    
    if(sonuc.length==0){
    console.log("Dengeli");
    }
    else{
        console.log("Dengesiz");
    }
}

parantezlerDengeliMi("((")