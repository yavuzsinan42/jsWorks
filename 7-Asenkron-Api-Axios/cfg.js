let cfgInput="S-->aa|bX|aXX,X-->ab|b";
let cfgList=cfgInput.split(",");
//console.log(cfgList);
let characters=[];
for(let i=0; i<cfgList.length;i++){
    let cfgElementList=cfgList[i].split("-->");
    characters[i]=[];
    characters[i].push(cfgElementList[0]);
    characters[i].push(cfgElementList[1].split("|"));
    
   
    
   
}
console.log(characters[0][1][2]);

function parcala(){
    for(let i=0;i<characters[0][1].length;i++){
        for(let j=0;j<characters[0][1][i].length;j++){
            if(characters[0][1][i].includes("X")){
                let temp = characters[0][1][i].split("");
                for(let z=0;z<characters[0][1][i].length;z++){
                    
                }
    
            }
            
            
        }
    }
}




console.log(characters[0][1][2].length);
