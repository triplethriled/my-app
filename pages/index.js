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
      {userState.cnt}
      
      {user ? 
      <div> {user.firstName}
        <br/>  
        <br/>  
        <button onClick={e => logout()}>logout</button>
      </div>
      :
      <div>no user 
        <Link href="/users/login">
          
        <button> login</button>
        </Link>
        
      </div>
      
      
      }
      
      <br/>  
      <button onClick={e => increaseCnt()}>
        +
      </button>
      <button onClick={e => decreaseCnt()}>
        -
      </button>
      <div>Hello</div>
      
    </div>
  )
}
