

export function Footer() {
    return (
        <footer className="page-footer #66bb6a green lighten-1">
        <div className="container">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/aldente0/react-recipes" target='_blank' rel="noreferrer">Repo</a>
            </div>
            </div>
        </div>
        </footer>
    )
}