import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';
import Linkedin from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import Insta from '../../assets/insta.png';
import Whatsapp from '../../assets/whatsapp.png';
import Facebook from '../../assets/facebook.png';

function Footer() {
    return (
        <div id='footer' data-aos="fade-up">

            <div className="footer-main" >

                <div className="footer-left">
                    <a href="mailto:psrathore13101@gmail.com">mailto: psrathore13101@gmail.com</a>
                    <a href="tel:+91 8824904588">Call: +91 8824904588</a>
                </div>

                <div className="footer-mid">
                    <h3>Quick Links</h3>

                    <div className="quick-links">
                        <Link className="foot-items" to='home' smooth={true} offset={-100} duration={800} >Home</Link>
                        <Link className="foot-items" to='skills' smooth={true} offset={-100} duration={800} >Skills</Link>
                        <Link className="foot-items" to='project' smooth={true} offset={-100} duration={800} >Projects</Link>
                        <Link className="foot-items" to='about' smooth={true} offset={-100} duration={800} >About</Link>
                    </div>
                </div>

                <div className="footer-right">
                    <h3>Social Links</h3>

                    <div className="social-links">
                        <a href='https://www.linkedin.com/in/pankaj-singh-a92a24226/' target='_blank' className="social-items"><img src={Linkedin} alt="Linkedin" className='social-img' /></a>
                        <a href='https://github.com/PankajSingh1310' target='_blank' className="social-items"><img src={Github} alt="Github" className='social-img' /></a>
                        <a href='https://www.instagram.com/pankajs1310?igsh=ZXE2aGgzdzU0cnc=' target='_blank' className="social-items"><img src={Insta} alt="Insta" className='social-img' /></a>
                        <a href='https://wa.link/edornv' target='_blank' className="social-items"><img src={Whatsapp} alt="Whatsapp" className='social-img' /></a>
                        <a href='https://www.facebook.com/psrcool13' target='_blank' className="social-items"><img src={Facebook} alt="Facebook" className='social-img' /></a>
                    </div>
                </div>

            </div>

            <div className="footer-rights">
                <p>all rights reserved 2024</p>
            </div>

        </div>

    );
}

export default Footer;
