import './App.css';
import React, { useEffect } from 'react';
import Profile from './screens/ProfileScreen';
import Homescreen from './screens/Homescreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { login } from './features/userSlice';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(login({uid:userAuth.uid,email:userAuth.email,}))
      } else{
        // Logged out
        dispatch(logout())
      }
    })
    return () => {
      unsubscribe()
    };
  }, [dispatch]);
  // const user = null;
  return (
    <div className="App"> 
      <Profile/>
      <SignupScreen/> */
      <LoginScreen/>
      <Router>
        {!user ? (<LoginScreen/>):(
      <Switch>
      <Route path='/test'><h1>WOW WHATS UP</h1>
      </Route> 
      <Route path='/users'><Users /></Route> 
      <Route path='/'><Homescreen/></Route> 
       </Switch>
    // </Router>
     
    </div>
  );
}

export default App;
