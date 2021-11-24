import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
           <div className="navbar">
               <div className="navbar-container container">
                   <Link to='/' className="navbar-logo" onClick=
                    {closeMobileMenu}>
                       <MdFingerprint className="navbar-icon" />
                       GREEN MILE APP
                   </Link>
                   <div className="menu-icon" onClick={handleClick}>
                        { click ? <FaTimes /> : <FaBars />}
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick=
                    {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-links" onClick=
                    {closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/signup' className="btn-link">
                                    <Button buttonStyle='btn--outline'>
                                        Sign up
                                    </Button>
                                </Link>
                            ): (
                                <Link to='/signup' className="btn-link" onClick=
                                {closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'>
                                        Sign up
                                    </Button>
                                </Link>
                            )}
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/login' className="btn-link">
                                    <Button buttonStyle='btn--outline'>
                                        Log in
                                    </Button>
                                </Link>
                            ): (
                                <Link to='/login' className="btn-link" onClick=
                                {closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'>
                                        Log in
                                    </Button>
                                </Link>
                            )}
                        </li>
                   </ul>
               </div>
            </div> 
        </IconContext.Provider>
        </>
    )
}

export default Navbar