import Header from '../components/header'

// import Header from '../components/header';


export default function Contact(){
    return(
      <Header>
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
           </Header>       
    );
  }