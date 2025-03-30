// import Home from '../pages/home';
// import Contact from '../pages/Contact';
// import About from '../pages/About';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <Link to="/">Начало</Link>
            <Link to="/about">За нас</Link>
            <Link to="/contact">Контакти</Link>
            <Link to ='/register'>Регистрация</Link>
        </nav>
    )
}
// export default function Header({children}){
//     return(
//         <div className='header'>
//         <p style={{color:'red'}} className='MainText'>Най-добрият сайт за хранителни добавки!</p>
//         {children} 
//         </div>
//     )
// }

export default Header;