// import login from './login.jpg';
import { useState } from 'react';
//useState хука ни позвовява в случая, да следим дали 
// потребителя е на логин или регистър страницата
import './App.css';

function App() {
  const [nameRegister, passRegister, setIsLogin] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
      <p style={{color:'red'}}>Моля, въведете име и парола долу:</p>
      {/* <img src={login.jpg} className="App-logo" alt="logo" /> */}
      <img src={require('./login2.jpg')} alt='login' width='100px'></img>

        <p>
         </p>
        <form>
          <label id='nameRegister()'>Въведи името си тук:
            <input type="text"/>
          </label>
        </form>
        <br></br>
        <form>
          <label id='passRegister()'>Въведи паролата си тук:
            <input type="text"/>
          </label>
          </form>
        <br></br>
        <div style={{ display: 'flex', gap: '10px'}}>
        {/* <button onclick="Register()" type="button" placeholder="">Register!</button> */}
        <button id="newRegister()" onClick={() => setIsLogin(! nameRegister)}>
          {nameRegister ? "Нямаш акаунт тук? Регистрирай се!" : "Вече имаш създаден продил? Влез!"}
        </button>
        <p style={{ fontSize: '20px'}}>или</p>
                <button id="LogIn()" type="button" placeholder="">Влез си в акаунта! </button>
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
          <p>При проблем, натисни тук!</p>

         </a>
      </header>
    </div>
  );
}

export default App;
