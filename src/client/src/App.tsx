import React from 'react';
import './App.css';
import { Footer } from 'components/Footer';
import {Header} from 'components/Header'
import { Hello } from 'containers/Hello';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hello/>
       <Footer/>
   </div>
  );
}

export default App;
