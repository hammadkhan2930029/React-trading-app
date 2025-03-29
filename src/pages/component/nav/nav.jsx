import React, { useEffect, useState } from 'react';
import './nav.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { DrawerBar } from '../drawer/drawer';
import logo_t from '../../assets/logo-t.png';
import { motion, useInView } from "framer-motion";



export const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 990);
    const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth < 990);
        };
        const handleScroll = () => {
            if (window.scrollY > 0) {  // 100px threshold better hai
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div  >
            <div className={`nav ${isSticky ? 'sticky-nav-main' : ''}`}>
                <div className="left">
                    <img className='nav_logo' src={logo_t} />
                </div>
                <div className="right">
                    {isMobile ? (
                        <div>

                            <DrawerBar />
                        </div>
                    ) : (


                        <div>

                            <span
                                style={{ color: location.pathname === '/landingPage' ? 'blue' : '#000' }}

                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => { navigate('/landingPage') }}>Home</span>

                            <span

                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                            >About</span>

                            <span
                                style={{ color: location.pathname === '/blogsMultiCards' ? 'blue' : '#000' }}

                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => {
                                    navigate('/blogsMultiCards')

                                }}>Blogs</span>

                            <span

                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                            >Contact</span>

                            <span
                                style={{ color: location.pathname === '/faqMainPage' ? 'blue' : '#000' }}

                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => {

                                    navigate('/faqMainPage')
                                }}>Faqs</span>

                            <span

                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                            >Help</span>
                        </div>
                    )}



                </div>

            </div>
        </div>
    )
}
