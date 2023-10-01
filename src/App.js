import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'; 
import LoginScreen from './screens/LoginScreen';
import{
  Routes,
  // BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { auth } from './firebase';


function App() {
  const user = null;

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((userAuth)=> {
      if (userAuth) {
        //Logged in
        console.log(userAuth)
      } else {
        //Logged out
      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />

        </Routes>
      )}

    </div>
  );
}

export default App;
