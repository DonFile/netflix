import React,{useState} from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

const LoginScreen = () => {
    const [signIn,setSignIn] =useState();
  return (
      <div className="loginScreen">
          <div className="loginScreen_backround">
              <img className='loginScreen_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Qs7icJ3URyrW3K7AYXds8p8cVDiDbyR99I5x2B1iYoejbZitW1cRnQDjgDnf6OhVlA4&usqp=CAU' alt='' />
              <button onClick={()=>setSignIn(true)} className="logiScreen_button">Sign In</button>
              <div className='loginScreen_gradient' />
              <div className='loginScreen_body'>
                  {signIn ? (<SignupScreen />) : (
                      <>
                  <h1>Unlimited fils,Tv programs and more.</h1>
                  <h2>Watch anywhere. Cancel at anytime</h2>
                  <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                  <div className='loginScreen_input'>
                      <form>
                          <input type='email' placeholder='email address'value={signIn} onChange={()=>setSignIn()} />
                          <button onClick={()=>setSignIn(true)} className='loginScreen_getStarted'>Get started</button>
                      </form>
                      </div>
                      </>
                  )}
                  
              </div>
          </div>
    </div>
  )
}

export default LoginScreen