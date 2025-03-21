import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo_t from '../../assets/logo-t.png'
import { DrawerBar } from '../drawer/drawer';
import { motion } from "framer-motion";
import stockreport from '../../assets/stockReport.jpg'
export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 990);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 990);
    };
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(isMobile)
  return (
    <div>
      <div className='navbar'>
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

              <span className={`navData ${isSticky ? 'changeColor' : ''}`}>Home</span>
              <span className={`navData ${isSticky ? 'changeColor' : ''}`}>About</span>
              <span className={`navData ${isSticky ? 'changeColor' : ''}`}>Conatct</span>
              <span className={`navData ${isSticky ? 'changeColor' : ''}`}>Help</span>
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
