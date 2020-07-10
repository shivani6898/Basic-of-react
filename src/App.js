import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/"> Shivi  </NavbarBrand>

          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>About us</li>
          </ul>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
