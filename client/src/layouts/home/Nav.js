import React, { useState, useEffect } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';

const Navbar=()=>{
    const [scrollPosition, setSrollPosition] = useState(0);
    const [isToggle, setIsToggle] = useState(false);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggle=()=>{
        setIsToggle(!isToggle)
    }


    return(
        <nav id="nav" className={`nav ${isToggle? 'open': null} ${scrollPosition>0? 'sticky': null}`}>
            <button className="menu" onClick={toggle}>
                <em className="hamburger"></em>
            </button>
            <div className="brand">
                <Link onClick={()=> scroll.scrollToTop()}>X-Solution</Link>
            </div>
            <ul className="navbar">
                <li>
                   <Link onClick={()=> scroll.scrollToTop()}>Home</Link>
                </li>
                <li>
                   <Link to="about" smooth={true} duration={1000}>About</Link>
                </li>
                <li>
                   <Link to="services" smooth={true} duration={1000}>Services</Link>
                </li>
                <li>
                   <Link to="projects" smooth={true} duration={1000}>Projects</Link>
                </li>
                <li>
                   <Link to="products" smooth={true} duration={1000}>Products</Link>
                </li>
                <li>
                   <Link to="clients" smooth={true} duration={1000}>Our Clients</Link>
                </li>
                <li>
                   <Link to="contact" smooth={true} duration={1000}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;