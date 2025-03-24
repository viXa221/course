import Header from '../components/header';
// import Contact from './Contact';
// import About from './About';
import strongLogo from '../assets/strong.png';

export default function Home(){
  // const [nameRegister] = useState(true);
    return (
      <div className="home">
        <Header className="home-header">
           <div className='navBar'>
            <img src={strongLogo} alt="strong" className="logo" />
            </div>
            
  
          <form>
            <div className="LogInInfo">
            <label id='nameRegister'>Въведи името си тук:
              <input id="infoName"type="text"/>
            </label>
            </div>
          </form>
  
          <br></br>
  
          <form>
          <div className="LogInInfo">
            <label id='passRegister'>Въведи паролата си тук:
              <input id="infoPass" type="text"/>
            </label>
            </div>
            </form>
  
          <br></br>
  
          <div style={{ display: 'flex', gap: '10px'}}>
                  <button id="RegisterIn" type="button" placeholder="info@gmail.com">Регистрирай се! </button>
          <p style={{ fontSize: '20px', color: 'black'}}>или</p>
                  <button id="LogIn" type="button" >Влез си в акаунта! </button>
          </div>
        </Header>
      </div>
    );
  }

  