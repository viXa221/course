// import login from './login.jpg';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
//useState хука ни позвовява в случая, да следим дали 
// потребителя е на логин или регистър страницата
//импортирам userList-a, ама дали е така не знам :)
import './App.css';

function App() {
  const [nameRegister, setIsLogin] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
         <div className='navBar'>
         <img src={require('./strong.png')} alt='strong' className='logo'></img>
          <h3>Начало</h3>
          <h3>Продукти</h3>
          <h3>Стани част от екипа!</h3>
          <h3>Помощ</h3>
          </div>
          

          <p style={{color:'red'}} className='MainText'>Най-добрият сайт за хранителни добавки!</p>
        <form>
          <div className="LogInInfo">
          <label id='nameRegister()'>Въведи името си тук:
            <input id="infoName()"type="text"/>
          </label>
          </div>
        </form>

        <br></br>

        <form>
        <div className="LogInInfo">
          <label id='passRegister()'>Въведи паролата си тук:
            <input id="infoPass()" type="text"/>
          </label>
          </div>
          </form>

        <br></br>

        <div style={{ display: 'flex', gap: '10px'}}>
                <button id="RegisterIn()" type="button" placeholder="">Регистрирай се! </button>
        <p style={{ fontSize: '20px', color: 'black'}}>или</p>
                <button id="LogIn()" type="button" placeholder="">Влез си в акаунта! </button>
        </div>

      <a className="App-link"
      href="mailto:someone@example.com">      
      <p>Мейл за въпроси!</p>
      </a>

        <a className="App-link"
          href="https://support.google.com/accounts/troubleshooter/2402620?hl=en"
          target="_blank"
          rel="noopener noreferrer">
          <p>При проблем, натисни тук!</p>
         </a>     
      </header>
    </div>
  );
}

export default App;
