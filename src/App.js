// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <p>
         </p>
        <p>Моля, въведете name и pass долу:</p>
        <form>
          <label>Enter your name:
            <input type="text"/>
          </label>
        </form>
        <br></br>
        <form>
          <label>Enter your password:
            <input type="text"/>
          </label>
          </form>
        <br></br>
        <button onclick="clickMe()" type="button" placeholder="">Sign In!</button>

        
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
