import { useState } from 'react'
import './App.css'
import './pages/navbar.tsx'
import { Link } from 'react-router-dom';
import NavBar from './pages/navbar.tsx';



function App() {
  
  return (

<div className="font-bold">
  <header className="sticky top-0 bg-gradient-to-r from-gray-700 to-black h-16 flex justify-between items-center px-4">
    <div id="img-container" className="flex items-center">
      <Link to='/home'>
      <div className="bg-gradient-to-r from-gray-200 to-black p-2 rounded">
        <img src="assets/Logo.png" alt="Logo" className="h-10"></img>
      </div>
      </Link>
    </div>

    <div className="flex space-x-4 text-center">
      <ul className="flex space-x-4">
        <li><Link to='/bookus' className="font-bold text-gray-100 hover:text-white hover:shadow hover:shadow-md transition">Book Us</Link></li>
        <li><Link to='/pricing' className="font-bold text-gray-100 hover:text-white hover:shadow hover:shadow-md transition">Pricing</Link></li>
        <li><Link to='/contact' className="font-bold text-gray-100 hover:text-white hover:shadow hover:shadow-md transition">Contact</Link></li>
        <li><Link to='/qa' className="font-bold text-gray-100 hover:text-white hover:shadow hover:shadow-md transition">QA</Link></li>
        <li><Link to='/login' className="font-bold text-gray-100 hover:text-white hover:shadow hover:shadow-md transition">Log In</Link></li>
      </ul>
    </div>
  </header>

  <body className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-300 to-gray-600">
    <NavBar />
  </body>
</div>



   
    );
  }

export default App
