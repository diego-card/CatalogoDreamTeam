import { useState } from "react"
import { Link } from "react-router-dom"
import '../styles/Navbar.css'

const Navbar = () => {
    const [isActive, setIsActive] = useState()

    const toggleBurger = () => {
        setIsActive(!isActive)
    }

    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to={"/"} className="navbar-item has-text-primary has-text-weight-bold">Catálogo DreamTeam</Link>
                <a role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`}
                    onClick={toggleBurger}
                    aria-label="menu"
                    aria-expanded="false"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <Link to={"/colecoes"} className="navbar-item">Coleções</Link>
                    <Link to={"/posicoes"} className="navbar-item">Posições</Link>
                    <Link to={"/times"} className="navbar-item">Times</Link>
                    <Link to={"/paises"} className="navbar-item">Países</Link>
                </div>

                <div className="navbar-end">
                </div>
            </div>
        </nav>
    )
}

export default Navbar