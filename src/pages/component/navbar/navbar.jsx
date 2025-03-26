import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo_t from '../../assets/logo-t.png'
import { DrawerBar } from '../drawer/drawer';
import { motion } from "framer-motion";
import stockreport from '../../assets/stockReport.jpg';
import { useNavigate } from 'react-router-dom';
import { Cards } from '../cards/cards';
import { FullCard } from '../fullCard/fullCard';
import { Faqs } from '../faqs/faqs';
import LoginPage from '../login_singup/login_signup';
import { BlogsCard } from '../blogs/blogsCard';
import { NewsLetter } from '../newsletter/newsletter';
import { Footer } from '../footer/footer';




export const Navbar = () => {
  const navigate = useNavigate();
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

  console.log("Sticky State:", isSticky);

  return (
    <div>
      <div className={`navbar ${isSticky ? 'sticky-navbar-main' : ''}`}>
        <div className="left">
          <img className='logo' src={logo_t} />
        </div>
        <div className="right">
          {isMobile ? (
            <div>

              <DrawerBar />
            </div>
          ) : (


            <div>

              <span className={`navdata_main ${isSticky ? 'changeColor' : ''}`}>Home</span>
              <span className={`navdata_main ${isSticky ? 'changeColor' : ''}`}>About</span>
              <span className={`navdata_main ${isSticky ? 'changeColor' : ''}`} onClick={() => navigate('/blogsMultiCards')}>Blogs</span>
              <span className={`navdata_main ${isSticky ? 'changeColor' : ''}`}>Contact</span>
              <span className={`navdata_main ${isSticky ? 'changeColor' : ''}`}>Help</span>
            </div>
          )}



        </div>

      </div>
      {/* ---------------------------------------------------------- */}
      <div>
        <div className='shap-container'>

          <div className='shaper'>

          </div>
        </div>

        {/* ----------------------------- */}
        <div className='container'>

          <div className='textside'>
            <h1 className='h1'>Track your PSX portfolio comprehensively as a pro!</h1>
            <h4 className='h4'>The actual financial information source you need for your portfolio.</h4>

          </div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="imgDiv"
          >


            <img className='img' src={stockreport} />


          </motion.div>
        </div>
      </div>
    
     

    </div>
  )
}
