import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <p placeholder="">Моля, въведете Username и Password долу:</p>
        <p>Име:</p>
        <button onclick="clickMe()" type="button" placeholder="">въведи!</button>
        <p>Парола:</p>
        <button onclick="clickMe()" type="text" placeholder="">въведи!</button>
        <br></br>
      
        <a
          className="App-link"
          href="https://support.google.com/accounts/troubleshooter/2402620?hl=en"
          href="mailto:someone@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>При проблем, натисни тук</p>
                    <p>Мейл за въпроси!</p>
        </a>
      </header>
    </div>
  );
}

export default App;
