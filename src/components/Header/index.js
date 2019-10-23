import React, { Component } from 'react';
import './style.css';
import logo from '../../assets/logo.png'
import MaterialIcon from 'material-icons-react';

class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <div className="content">
          <img src={logo}></img>
          <div className="profile-menu">
            Meu Perfil
            <MaterialIcon icon="account_circle" color="#FFF" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;