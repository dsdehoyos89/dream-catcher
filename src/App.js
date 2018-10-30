import React, { Component } from 'react';

import './App.css';
import routes from './routes';
import { Link } from 'react-router-dom';
import Header from './components/header/Header'
import ListIcon from './components/listIcon/ListIcon'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Link to='/'> Landing </Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/public'>Public Dreams</Link>
        <Link to='/intro'>Intro</Link>
        <Link to='input'>Input Dreams</Link>
        {routes}

      </div>
    );
  }
}

export default App;
