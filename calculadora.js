function rankPlayer(win, defeat){
    let mmr = win - defeat
    return mmr
}

function getRank(mmr){
    if(mmr <= 10){
    return "Ferro"
    }
    else if(mmr <=20){
    return "Bronze"
    }
    else if(mmr <=50){
    return "Prata"
    }
    else if(mmr <=80){
    return "Ouro"
    }
    else if(mmr <=90){
    return "Diamante"
    } 
    else if(mmr <=100){
    return "Lendário"
    }
    else{
    return "Imortal"
    }
}

function definePlayer(win, defeat){
    let mmr = rankPlayer(win, defeat)
    let rank = getRank(mmr)

    console.log("O jogador tem " + mmr + " de MMR, e está no rank " + rank)
    
    return{
        win: win,
        defeat: defeat,
        mmr: mmr,
        rank: getRank(mmr)
    }
}

let jogador1 = definePlayer(87, 21)
let jogador2 = definePlayer(1200, 1098)