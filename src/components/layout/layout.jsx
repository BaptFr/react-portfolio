import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import './layout.sass';
import logoCopyright from'../../assets/copyright-white.svg';

function Layout({ children }) {

    const location = useLocation();
    return (
        <>
            <header>    
            <div className='header__title'>     
            </div>
            <motion.div
                initial={{ opacity: 0, x: -1300 }}
                animate={{ opacity: 2, x: 0 }}
                transition={{ duration: 1.1}}
            >
            <nav className='navbar'>
                <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
                    <button>Accueil</button>
                </NavLink>
                <NavLink to="/projets" className={location.pathname === "/projets" ? "active" : ""}>
                    <button>Mes projets</button>
                </NavLink>

                    <button>Mon CV</button>
            </nav>
            </motion.div>
            </header>


            <main>
                {children}
            </main>


            <footer>
                <div className='footer__containt'>
                    <p> Tous droits réservés </p> 
                    <p><img src={ logoCopyright } alt="Logo-copyright" /> 2024  </p>
                </div>
            </footer>
        </>
    );
}

export default Layout