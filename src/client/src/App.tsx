import React from 'react';
import './App.css';
import { Footer } from 'components/Footer';
import {Header} from 'components/Header'
import { Hello } from 'containers/Hello';
import { msalApp } from 'core/auth/authConfig';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{msalApp.logout()}}>Log out</button>
      <Header/>
      <Hello/>
      <Footer/>
   </div>
  );
}

export default App;
