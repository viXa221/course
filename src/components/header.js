import Home from '../pages/home';
import Contact from '../pages/Contact';
import About from '../pages/About';


export default function Header({children}){
    return(
        <div className='header'>
        <p style={{color:'red'}} className='MainText'>Най-добрият сайт за хранителни добавки!</p>
        {children} {/* Добавил съм го, за да може да съдържа вложени елемнти*/}
        </div>
    )
}