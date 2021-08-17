export const rpsfunctions = (user, comp) => {
    if (user === "Rock"){
        if (comp === "Sissors")
            return 'Win'
    }else if (comp === "Paper"){
        return "Lose"
    }else if (comp === "Rock"){
        return 'Draw'
    }
    if (user === "Sissors"){
        if (comp === "Sissors")
            return 'Draw'
    }else if (comp === "Paper"){
        return "Win"
    }else if (comp === "Rock"){
        return 'Lose'
    }
    if (user === "Paper"){
        if (comp === "Sissors")
            return 'Lose'
    }else if (comp === "Paper"){
        return "Draw"
    }else if (comp === "Rock"){
        return 'Win'
    }
}
