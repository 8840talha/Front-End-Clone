import React, { Component } from 'react';
import logo from './logo.svg';

import CompanyLogo from './Components/CompanyLogo/CompanyLogo'
import './App.css';
import Toolbar from './Components/Navigation/Toolbar/toolbar';
import SideBAr from './Components/Navigation/SideBAR/SideBAr';
import Main from './Components/Content/Main/Main'
class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Main />
        <CompanyLogo />
      </div>
    );
  }
}

export default App;
