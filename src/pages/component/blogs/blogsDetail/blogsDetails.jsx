import React, { useEffect, useState } from 'react'
import { useLocation, } from 'react-router-dom';
import './blogsDetails.css'

import { motion, useInView } from "framer-motion";
import { Nav } from '../../nav/nav';
import { Footer } from '../../footer/footer';


export const BlogsDetails = () => {

    const location = useLocation();
    const { title, image, description ,description2} = location.state || {};
    console.log('blog details page', title)

    // ----------------------------------------------------------
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    return (
        <div>
            <motion.div initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}>

                <Nav />
            </motion.div>

            <motion.div ref={refOne}
                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}
                className='blogs_main'>
                <div className='blogImg_div'>

                    <img src={image} className='blogImg' />
                    <div className='text_div'>

                        <span className='blogs_heading'>{title}</span>
                        <span className='blogs_detail'>{description}</span>
                        <span className='blogs_detail'>{description2}</span>

                    </div>
                </div>


            </motion.div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
