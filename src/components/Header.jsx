import {Link} from 'react-router-dom';
import {useState} from 'react';

/* import { Hamburger } from './Hamburger'; */


export function Header() {
    const [hamburgerActive, setHamburgerActive] = useState(false);

    const handleClick = () => {
        setHamburgerActive(!hamburgerActive);
    }


    return (
        <header>
            <nav className="#66bb6a green lighten-1">
                <div className="nav-wrapper ">
                    <Link to='/' className="brand-logo left">React Recipe</Link>
                        <ul id="nav-mobile ul" className="right">
                            <li className='dekstop'><Link to='/contacts'>Contacts</Link></li>
                            <li className='dekstop'><Link to="/about" >About</Link></li>
                            <li className="mobile" onClick={handleClick}>
                                {
                                    !hamburgerActive ? <i className="material-icons">dehaze</i>
                                    : <i className="material-icons">close</i>
                                }
                            </li>
                            
                        </ul>
                        {
                            hamburgerActive ? <div className="collection hamburger">
                            <Link to="/contacts" className="collection-item" onClick={handleClick}>Contact</Link>
                            <Link to="/about" className="collection-item" onClick={handleClick}>About</Link>
                            </div> : null
                        }
                </div>
            </nav>
            
        </header>
    )
}