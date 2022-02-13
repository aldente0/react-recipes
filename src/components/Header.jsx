import {useState} from 'react';
import {Link} from 'react-router-dom';


export function Header() {

    return (
        <header>
              <nav className="#66bb6a green lighten-1">
            <div className="nav-wrapper ">
                <Link to='/' className="brand-logo left">React Recipe</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to='/contacts'>Contacts</Link></li>
                        <li><Link to="/about" >About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}