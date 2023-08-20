import { useState } from 'react'
import './App.css'
import './pages/navbar.tsx'
import { Link} from 'react-router-dom';
import Main from './pages/Main.tsx';



function App() {
  
  return (
  <>
    <div>
      <ul>
        <li><Link to='/bookus'>Book Us</Link></li>
        <li><Link to='/pricing'>Pricing</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/qa'>QA</Link></li>
      </ul>
      <Main />
    </div>
      
     
   </>
    );
  }

export default App
