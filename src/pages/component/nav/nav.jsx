import React, { useEffect, useState } from 'react';
import './nav.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { DrawerBar } from '../drawer/drawer';

// import tradingLogo3 from '../../assets/tradingLogo3.png'
import newLogo from '../../assets/newLogo.png'
import { useDispatch } from 'react-redux';
import { setScrollToSection } from '../Redux/scrollSlice';

export const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 990);
    const [isSticky, setIsSticky] = useState(false);
    const [color, setColor] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 990);
        };

        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`nav ${isSticky ? 'sticky-nav-main' : ''}`}>
                <div className="left">
                    <img className="nav_logo" src={newLogo} alt="Logo" />
                </div>

                <div className="right">
                    {isMobile ? (
                        <DrawerBar />
                    ) : (
                        <div>
                            <span
                                style={{ color: location.pathname === '/frontPage' ? 'var(--primary-green)' : '#000'}}
                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => navigate('/frontPage')}
                            >
                                Home
                            </span>

                            <span
                                style={{ color: color == 1 ? 'var(--primary-green)' : '#000' }}

                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => {
                                    // dispatch(setScrollToSection('chooseUs'))
                                    dispatch(setScrollToSection('about'))
                                    navigate('/aboutUs')
                                    setColor(1)
                                }}
                            >
                                About
                            </span>

                            <span
                                style={{ color: color == 2 ? 'var(--primary-green)' : '#000' }}

                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => {
                                    dispatch(setScrollToSection('chooseUs'))

                                    setColor(2)
                                }}
                            >
                                How
                            </span>

                            <span
                                style={{ color: color == 3 || location.pathname === '/blogsMultiCards' ? 'var(--primary-green)' : '#000' }}
                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => {
                                    setColor(3)
                                    dispatch(setScrollToSection('blogs'));

                                }}
                            >
                                Blogs
                            </span>



                            <span
                                style={{ color: color == 4 || location.pathname === '/faqMainPage' ? 'var(--primary-green)' : '#000' }}
                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => {
                                    setColor(4)
                                    dispatch(setScrollToSection('faqs'));

                                }}
                            >
                                FAQs
                            </span>
                            <span
                                style={{ color: location.pathname === '/contactUs' ? '#1BA12E' : '#000' }}
                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => {
                                    setColor(null)
                                    navigate('/contactUs')
                                }}
                            >
                                Contact
                            </span>

                            <span
                                style={{ color: color == 5 ? '#1BA12E' : '#000' }}
                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => {

                                    dispatch(setScrollToSection('login'));
                                    setColor(5)

                                }}
                            >
                                Login
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
