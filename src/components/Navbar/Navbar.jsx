import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import Ham from '../../assets/ham.png'
import {Link} from 'react-scroll';
import './Navbar.css';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='navbar'>
        
        <div className="nav-left">
            <img src={logo} alt="logo" className='logo' />
        </div>

        <div className="nav-mid">
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={800} className="nav-items">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={800} className="nav-items">Skills</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={800} className="nav-items">Projects</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={800} className="nav-items">About</Link>
        </div>

        
        <Link className='contact-btn' to='contact' smooth={true} offset={-150} duration={800}>Contact</Link>
       


          {/* Navigation bar for the phone hamburger menu */}

          
        <img src={Ham} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />

        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={800} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={800} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={800} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={800} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-200} duration={800} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>


    </div>
  );
}

export default Navbar;
