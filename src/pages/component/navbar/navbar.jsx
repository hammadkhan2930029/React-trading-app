import React, { useState, useEffect } from 'react';
import './navbar.css';
import { motion } from "framer-motion";
import stockreport from '../../assets/stockReport.jpg';
import { Nav } from '../nav/nav';




export const Navbar = () => {
 


  return (
    <div>
      {/* <Nav/> */}
   
      {/* ---------------------------------------------------------- */}
      <div>
        {/* <div className='shap-container'>

          <div className='shaper'>

          </div>
        </div> */}

        {/* ----------------------------- */}
        <div className='container'>

          <div className='textside'>
            <h1 className='h1'>Track your PSX portfolio comprehensively as a pro!</h1>
            <h4 className='h4'>The actual financial information source you need for your portfolio.</h4>

          </div>
         
        </div>
      </div>
    
     

    </div>
  )
}
