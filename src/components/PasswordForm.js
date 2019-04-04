import React, { useState } from 'react';
import { playNotes } from '../utils/utils';

const playBBC = (e) => {
  e.preventDefault();
  playNotes(['B3', 'B3', 'C4'], 500);
}

const playBaggage = (e) => {
  e.preventDefault();
  playNotes(['B4', 'A4', 'G4', 'G4', 'A4', 'G4', 'E4'], 500);
}

const PasswordForm = ({ handleSubmit }) => {
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(password);
  }

  return (
    <>
      <p>
          Thank you for visiting Dinikea - we are delighted that you have chosen us and can't wait
          to serve you. Before we can continue, we first need to validate that you are a customer. 
          Please perform the following steps in order to verify your purchase:
        </p>
        <ul className="site__list">
          <li>Visit
            <button className="site__audio-button" type="button" onClick={playBBC}>
              [TEXT MISSING]
            </button>
          </li>
          <li>Search for 
            <button className="site__audio-button" type="button" onClick={playBaggage}>
              [TEXT MISSING]
            </button>
          </li>
          <li>View information relating to 3 Feb 2014</li>
          <li>Make a note of the 8th word of the description. This is your password</li>
        </ul>
        <form onSubmit={onSubmit}>
          Please enter your password here:{' '}
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />{' '}
          <button type="submit">Submit</button>
        </form>
    </>
  );
}

export default PasswordForm;