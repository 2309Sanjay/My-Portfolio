import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

// import { FaCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Nav({ theme, setTheme }) {

    const [open, setOpen] = useState(false)

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <nav>
            <div className='theme'>
                <button onClick={toggleTheme} className="theme-btn">
                    {theme === "dark" ? <FaMoon className={`theme-${theme}`} /> : <FaSun className={`theme-${theme}`} />}
                </button>
                <h1>My Portfolio</h1>
            </div>

            <div className="hamburger" onClick={() => setOpen(!open)}>
                <GiHamburgerMenu />
            </div>

            <div className={`nav-bar ${open ? "active" : ""}`}>
                <Link to="/" onClick={() => setOpen(false)}><h3>Home</h3></Link>
                <Link to="/about" onClick={() => setOpen(false)}><h3>About me</h3></Link>
                <Link to="/skills" onClick={() => setOpen(false)}><h3>Skills</h3></Link>
                <Link to="/project" onClick={() => setOpen(false)}><h3>Projects</h3></Link>
                <Link to="/contact" onClick={() => setOpen(false)}><h3>Contact me</h3></Link>
            </div>
        </nav>
    )
}
