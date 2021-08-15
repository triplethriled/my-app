

import { useSelector } from "react-redux"
const InputBox = ({text,value, onTextChange}) => {
    const {cnt} = useSelector(state => state.user);
    return <div>
        
        <span style={{fontSize:12, fontWeiht: 600,}}>{text}</span>  
        <br/>  
        <input placeholder={text} value={value} onChange={e => onTextChange(e)}
            type ={text === "password" ? "password":""}/>
    </div>  
}

export default InputBox
    