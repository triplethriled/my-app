import React, {useState, useEffect, setState} from 'react'
import { rpsfunctions } from '../src/rockpapersissors';
const login = () => {

    const [cnt, setCnt] = useState(4);
    const [string, setString] = useState("Pending...");
    const a = ["Rock", "Paper", "Sissors"]
    const [win, setWin] = useState(0);
    const [result, setResult] = useState("");
    const [user,setUser] = useState("");
    const [comp, setComp] = useState("");
    const [round, setRound] = useState(0);
    
    useEffect(()=> {
        setTimeout(()=>{
            setCnt(4)
            setCnt(cnt => cnt -1)
        },1000)
        setTimeout(()=>{
            setCnt(cnt => cnt -1)
        },2000)
        setTimeout(()=>{
            setCnt(cnt => cnt -1)
        },3000)
        setTimeout(()=>{
            setCnt(cnt => cnt -1)
            setString("Timeout")
            setComp(a[Math.floor(Math.random()*a.length)])

        },4000)
       
        
        
        
        
    },[round])
    setTimeout(()=>{
        if (string === "Timeout") {
            if (user === ""){
                setResult("NO INPUT YOU LOSE")
            }else {
                setResult(rpsfunctions(user,comp))
            }
            
        }
    },4001)
    
    
    return (
        <div>
            {string}
            <br/>
            User: {user}
            <br/>
            Computer : {comp}
            <div style={{fontSize: 40}}>{cnt}</div>
    
            
            <button onClick={e => setRound(round => round +1)} >Play Again</button>
            <br/>
            <button onClick={e => setUser("Rock")} >Rock</button>
            <button onClick={e => setUser("Paper")} >Paper</button>
            <button onClick={e => setUser("Sissors")} >Sissors</button>
            <br/>
            {result}

        </div>
    )
}

export default login
