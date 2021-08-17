import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { setCnt } from '../src/reducers/user';
import {userLogOut} from '../src/reducers'

export default function Home() {

  const router = useRouter()
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);
  const useruserState = useSelector( state => state.useruser);
  console.log('-----')
  console.log(userState);
  

  const moveTOLogin = (e) => {

    if (3!==5) {
      router.push("/users/login");
    }else{
      alert('3 is not equal to 5')
    }
    
    return false

  }
  const increaseCnt = () => {
    dispatch(setCnt(userState.cnt +1))
  }
  const decreaseCnt = () => {
    dispatch(setCnt(userState.cnt -1))
  }
  const logout = () => {
    dispatch(userLogOut())
  }
  return (
    <div className="container">
      <Head>
        <title>Google Form Page Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      {user ? 
      <div> <div style={{fontSize:30}}>Welcome, {user.firstName}</div>
        <br/>  
        <br/>  
        <button onClick={e => logout()}>logout</button>
      </div>
      :
      <div><div style={{fontSize:30}}>no user</div>
        <br/>
        <br/>
        <Link href="/users/login">
          
        <button style={{fontSize:30}}> login</button>
        </Link>

      </div>
      
      
      
      }
      
      <br/>  
      
      <div>Hello and Welcome</div>
      <br/>
      <button style={{fontSize:50}} onClick={e => alert("Hi")}>MAGICAL BUTTON</button>
      <br/>
      <button style={{fontSize:20}} onClick={e => router.push("/createForm")}>Google Form Page</button>
      <button style={{fontSize:20}} onClick={e => router.push("/rockPaperSissors")}>Rock Paper Sissors game</button>

    </div>
  )
}
