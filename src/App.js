import React, { useState } from 'react';

import Authenticated from './components/Authenticated';
import PasswordForm from './components/PasswordForm';

import logo from './assets/img/logo.jpg';

import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (password) => {
    if (password.toLowerCase().trim() === 'party') {
      setLoggedIn(true);
    } else {
      alert('Nope');
    }
  };
  
  return (
    <div className="site">
      <div className="site__header">
        <img src={logo} alt="Dinikea logo" className="site__logo" />
      </div>
      <div className="site__body">
        { loggedIn ? <Authenticated /> : <PasswordForm handleSubmit={handleSubmit} /> }
      </div>
    </div>
  )
}

export default App;