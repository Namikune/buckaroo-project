import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar.tsx';
import Calendar from './components/home/Calendar.tsx';
import Home from './pages/home.tsx';
import BookUs from './pages/book-us.tsx';
import Pricing from './pages/pricing.tsx';
import Contact from './pages/contact.tsx';
import QA from './pages/qa.tsx';
import LogIn from './pages/log-in.tsx';

function App() {
  return (

  <main className="font-sans">
      <div>
      <NavBar />
      </div>
  <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/BookUs' element={<BookUs />} />
      <Route path='/Pricing' element={<Pricing />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/QA' element={<QA />} />
      <Route path='/LogIn' element={<LogIn />} />
    </Routes>
  </div>
      
  </main>

    );
  }

export default App
