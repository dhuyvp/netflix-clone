import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, setShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        }
    }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img
                className='nav__logo'
                src='https://imgs.search.brave.com/n3sLYiMh3B3K2yWETMHO_QUUmaDnDfidiPyu03vr5q8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n'
                alt=''
            />

            <img
                className='nav__avatar'
                src='https://imgs.search.brave.com/g7drpFmm3a4AvIeVnhAiD8DV0tgDsjrmYbsBtGytyjo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9Ud2VVeUlpR2lE/d2h5M3ZCZDJRSHhP/dFNlaVRHWjlQRXJX/QnVfc0ZOR29KeThZ/djY4YmpQb2FNY3Z6/MTZxeFI0MVpvPXcy/NDAtaDQ4MC1ydw'
                alt=''
            />
        </div>

    </div>
  )
}

export default Nav