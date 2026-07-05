import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (

        <nav className="navbar">

            <div className="logo">
                THE ROYAL FORK
            </div>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >

                {menuOpen ? <FaTimes /> : <FaBars />}

            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li>
                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>
                </li>

                <li>
                    <a href="#menu" onClick={closeMenu}>
                        Menu
                    </a>
                </li>

                <li>
                    <a href="#special" onClick={closeMenu}>
                        Chef's Special
                    </a>
                </li>

                <li>
                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>
                </li>

                <li>
                    <a href="#contact" onClick={closeMenu}>
                        Reservations
                    </a>
                </li>

            </ul>

        </nav>

    );

};

export default Navbar;