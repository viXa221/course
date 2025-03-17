// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p style={{color:'red'}}>Моля, въведете name и pass долу:</p>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <p>
         </p>
        <form>
          <label id='nameRegister()'>Enter your name:
            <input type="text"/>
          </label>
        </form>
        <br></br>
        <form>
          <label id='passRegister()'>Enter your password:
            <input type="text"/>
          </label>
          </form>
        <br></br>
        <div style={{ display: 'flex', gap: '10px'}}>
        <button onclick="SignIn()" type="button" placeholder="">Sign In!</button>
        <p style={{ fontSize: '20px'}}>or</p>
        <button onclick="LogIn()" type="button" placeholder="">Log In!</button>
        </div>
      <a 
      className="App-link"
      href="mailto:someone@example.com">      
                <p>Мейл за въпроси!</p>
                </a>
        <a
          className="App-link"
          href="https://support.google.com/accounts/troubleshooter/2402620?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>При проблем, натисни тук</p>

         </a>
      </header>
    </div>
  );
}

export default App;
