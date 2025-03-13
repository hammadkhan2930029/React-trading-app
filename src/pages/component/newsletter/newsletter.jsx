
import React from 'react';
import { motion, useInView } from "framer-motion";
import EmailIcon from '@mui/icons-material/Email';

import './newsletter.css';
export const NewsLetter = () => {
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    return (
        <motion.div className='newsletter_bg'>
            <motion.div
                className='newsLetter_main'
                ref={refOne}
                initial={{ opacity: 0, x: -100 }}
                animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: .8 }}>
                <h2 className='newsLetter_h2'>Subscribe to get updates</h2>
                <div className='newsLetter_line'></div>
                <div className='input_div'>
                    <EmailIcon className='email_icon' />
                    <input placeholder='Email address here' className='newsletter_input' />

                    <button className='newsLetter_btn'>Subscribe now</button>
                </div>

            </motion.div>
        </motion.div>
    )
}
