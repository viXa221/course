// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo"></img>

function Register(){
    return(
<div className="Registration">
    <header className="Registration-header">
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
export default Register;

