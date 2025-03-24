import header from './header';
import Contact from './Contact';
import About from './About';





export default function Home(){
  // const [nameRegister] = useState(true);
  
    return (
      <div className="home">
        <header className="home-header">
           <div className='navBar'>
           <img src={require('./strong.png')} alt='strong' className='logo'></img>
            </div>
            
  
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
       
        </header>
      </div>
    );
  }

  