
import React, {setState, useState, useEffect} from "react"

const rockPaperSissors = () => {
    
    const [input, setInput] = useState("");
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }
    var user = 0
    
    const a = getRandomInt(3)

    
    }
    const setUserSissor = () =>{
        return user = 2
    }
    // setTimeout(() => {
    //     if (a === user) {
    //         alert('Draw')
    //     }
    //     else if ((user===0 && a===2)||(user===1 && a===0)||(user===2 && a===1)){
    //         alert('Win')
            
    //     }
    //     else if ((user===0 && a===1)||(user===1 && a===2)||(user===2 && a===0)){
    //         alert('Lose')
            
    //     }
    // }, 3000);
    useEffect(()=> {

    }, [])
    return (
        <div>
            
            <br/>
            <br/>
            <button onClick={e => {setInput(0);alert(input)}}>Rock</button>
            <button onClick={e => {setInput(e.target.value);alert(input)}}>Paper</button>
            <button onClick={e => setUserSissor()}>Sissor</button>
            
            {a}
            
            
            
        </div>
    )
}

export default rockPaperSissors
