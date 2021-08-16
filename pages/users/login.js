import React, {setState, useState, useEffect} from "react"
import InputBox from '../../src/components/InputBox';
import { useSelector, useDispatch } from "react-redux";
import {setUser} from '../../src/reducers/user';
import router, { useRouter } from "next/router";
const Login = () => {
    console.log('login component')
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [nickName, setNickname] = useState("");
    const [isAgreeInfo, setIsAgreeInfo] = useState(false);
    const [signupPath, setSignupPath] = useState("");
    const [submitOk, setsubmitOk] = useState(false);
    const userState = useSelector(state => state.user);
    const [cnt, setCnt] = useState(0);

    useEffect(() =>{
        alert(cnt)
    }, [cnt]);

    useEffect(() => {
        console.log('Use effect');
        // if( email.includes('@') ){
        //     alert('over 5');
        // }
    }, [email, pw])
    const login = (e) => {
        setTimeout(() => {
            const _user = {
                email: "triplethriled@gmail.com",
                firstName: email,
            }
            dispatch(setUser(_user));
            router.push("/")

        }, 1000)
    }

    const onEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const updateIsAgreeInfo =() => {
        setIsAgreeInfo(prev => !prev)
        
        

    }
    const onSignupPathChange =(e) => {
        setSignupPath(e.target.value)
    }
    
    const submit = () => {
        
        const payload ={
            email : email, 
            pw: pw,
            nickName: nickName,
            isAgreeInfo : isAgreeInfo,
            signupPath: signupPath,
            submitOk: submitOk

        }
        
        if (Object.values(payload)[0].includes('@')){
            
            setsubmitOk(prev=> !prev)
            
            alert(submitOk);
            
        }
        console.log(payload)
        if (pw.length< 6){
            alert('password too short')
            return

        
        }
        

    }
    return (<div>
        {cnt}
        <InputBox text={"email"} value ={email} onTextChange={e => setEmail(e.target.value)}/>
        <InputBox text={"password"} value= {pw} onTextChange={e => setPw(e.target.value)} />
        <><div onClick={e => {setCnt(cnt => cnt+1)}}>+</div></>
          
        <input checked={isAgreeInfo} type="checkbox" onClick={e => updateIsAgreeInfo()}/>
        <select value={signupPath} onChange={e => onSignupPathChange(e)}>
            <option value={"search"}>search</option>
            <option value={"ads"}>Ads hihi</option>
            <option calue={"etc"}>Etc</option>
        </select>
        <br/>  
        <br/>  
        <button onClick ={submit}>Submission</button>

            
        <br/>  
        <button onClick={e => login(e)}>
            login
        </button>
            
            
            
    </div>
    )
}

export default Login
