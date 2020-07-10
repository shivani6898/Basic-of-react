import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import './App.css';
import {DISHES} from './shared/dishes'

class  App extends Component {
  constructor (props){
    super(props);
    this.state ={
      Dishes:DISHES
    }
  }
  render(){
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
      <Menu  dishes={this.state.Dishes}/>
    </div>
  );
  }
}

export default App;
