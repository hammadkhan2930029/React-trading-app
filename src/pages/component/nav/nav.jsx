import React, { useEffect, useState } from 'react';
import './nav.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { DrawerBar } from '../drawer/drawer';
import logo_t from '../../assets/logo-t.png';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollToSection } from '../Redux/scrollSlice';

export const Nav = ({ chooseUsref }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const scrollToSection = useSelector((state) => state.scroll.scrollToSection);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 990);
    const [isSticky, setIsSticky] = useState(false);

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
                    <img className="nav_logo" src={logo_t} alt="Logo" />
                </div>

                <div className="right">
                    {isMobile ? (
                        <DrawerBar />
                    ) : (
                        <div>
                            <span
                                style={{ color: location.pathname === '/landingPage' ? 'blue' : '#000' }}
                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => navigate('/landingPage')}
                            >
                                Home
                            </span>

                            <span

                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => {
                                    dispatch(setScrollToSection('chooseUs'));
                                }}
                            >
                                About
                            </span>

                            <span
                                style={{ color: location.pathname === '/blogsMultiCards' ? 'blue' : '#000' }}
                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => navigate('/blogsMultiCards')}
                            >
                                Blogs
                            </span>

                            <span
                                style={{ color: location.pathname === '/contactUs' ? 'blue' : '#000' }}
                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => navigate('/contactUs')}
                            >
                                Contact
                            </span>

                            <span
                                style={{ color: location.pathname === '/faqMainPage' ? 'blue' : '#000' }}
                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => navigate('/faqMainPage')}
                            >
                                Faqs
                            </span>

                            <span
                                className={`nav_main ${isSticky ? 'nav_changeColor' : ''}`}
                                onClick={() => {
                                    dispatch(setScrollToSection('login'));
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

