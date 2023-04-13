import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Login from './components/Login';

import './App.css';
import { useState } from 'react';
function App() {
  const [cShowLogin,sShowLogin] = useState<boolean>(false)
  return (
   <div className='container'>
    {cShowLogin ? <Login sShowLogin={sShowLogin}/> : null}
    <Header cShowLogin={cShowLogin} sShowLogin={sShowLogin}/>
    <Body/>
    <Footer/>
   </div>
  );
}
export default App;
