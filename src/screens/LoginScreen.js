import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img 
                className='loginScreen__logo'
                src='https://imgs.search.brave.com/n3sLYiMh3B3K2yWETMHO_QUUmaDnDfidiPyu03vr5q8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n'
                alt=''
            />
            <button onClick={()=> setSignIn(true)}
            className='loginScreen__button'>
                Sign In
            </button>

            <div className='loginScreen__gradient' />
        </div>
        <div className='loginScreen__body'>
            {signIn ? (
                <SignUpScreen />
            ) : (
                <>
                    <h1>Unlimited movies, TV shows, and more</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    
                    <div className='loginScreen__input'>
                        <form>
                            <input type='email' placeholder='Email Address'/>
                            <button 
                            onClick={()=> setSignIn(true)}
                            className='loginScreen__getStarted'>GET STARTED</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default LoginScreen