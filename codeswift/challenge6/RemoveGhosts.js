function removeGhost(str){
    if(!(/\s+/.test(str))){
    return "You just wanted my autograph didn't you?"
    }
    else{
    return str.replace(/\s+/g,'');
    }
}
console.log(removeGhost("Sky scra per"));
console.log(removeGhost("Thisisjavascript"))