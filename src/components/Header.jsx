import {Link} from 'react-router-dom';

export function Header() {
    return (
        <header>
              <nav className="#1a237e indigo darken-4">
            <div className="nav-wrapper ">
                <Link to='/' className="brand-logo">React Movies</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    
                    <li><Link to='/contacts'>Contacts</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><a href="https://github.com/aldente0/react-movies" target='_blank' rel="noreferrer">Repo</a></li>
                </ul>
                </div>
            </nav>
        </header>
    )
}