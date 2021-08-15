import '../styles.css'
import {PersistGate} from 'redux-persist/integration/react';
import {useStore} from 'react-redux'
import {wrapper} from '../src/config/store';
import { ToastContainer } from 'react-toastify';

export default wrapper.withRedux(({Component, pageProps}) => {  
    const isServer = typeof window === 'undefined';
    
    // if (process.env.NODE_ENV !== "development")
    //   console.log = () => {};
  
    if(isServer){
      return <>
      
        <Component {...pageProps} />
        <ToastContainer />
      </>
    }
  
    const store = useStore();
    
    return (
      
      <PersistGate persistor={store.__persistor}>
        <Component {...pageProps} />
        <ToastContainer />
      </PersistGate>
      
    );
  });
