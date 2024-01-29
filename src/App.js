import { Link } from 'react-router-dom'
import React from 'react'
import MyRouter from './router/index.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      
    <Navbar />

   
    <MyRouter />

    <Footer/>

    </div>
    

  );
}



export default App;
