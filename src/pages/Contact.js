import header from '../components/header'
import home from "./home"
import About from './About';


export default function Contact(){
    return(
      <>
  <header/> 
              <h3>Помощ</h3>
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
      </>
    )
  }