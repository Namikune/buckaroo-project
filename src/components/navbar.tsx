import react from 'react';

export default function NavBar() {
  return(
    <nav className="nav" color="white">
      <a href="/" className="site-title"> Site Name</a>
      <ul className="list" align-items="center">
        <li>
          <a href="/pricing">About</a>
          </li>
          <li>
          <a href="/products">Products</a>
        </li>
      </ul>
      
      </nav>
  );
}
