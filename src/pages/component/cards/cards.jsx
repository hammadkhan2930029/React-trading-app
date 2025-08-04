import React, { forwardRef } from 'react';
import './cards.css';
import { motion, useInView } from "framer-motion";
import stock7 from '../../assets/stock-7.jpg'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
export const Cards = forwardRef((props, ref) => {
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });

    return (
        <div className='mainCards' ref={ref}>


            <div className='section_2'>
                <motion.div className='h_phone_div'
                    ref={refTwo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>
                    <motion.div


                    >
                        <img className='headphone2' src={stock7} alt="Headphone" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className='textSection'
                    viewport={{ once: true }}
                    ref={refOne}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}
                >

                    <span className='first_heading'>Choose Us</span>
                    <div className='lineee'></div>

                    <span className='sec_heading'>Why Should you choose Trading Diary</span>
                    <span className='descriptionn'> Elevate your investment experience with our Portfolio Management Portal – your ultimate companion for tracking and optimizing investments in the Pakistani stock market. Monitor your portfolio, analyze trends with charts, and make informed decisions. 🚀📈 </span>
                    <div className='task_divs'>
                        <div className='task_div'>

                            <TaskAltIcon sx={{ color: 'var(--primary-green)', fontSize: '32px' }} />
                            <span className='task_text'>Elevate your investment experience</span>
                        </div>
                        <div className='task_div'>

                            <TaskAltIcon sx={{ color: 'var(--primary-green)', fontSize: '32px' }} />
                            <span className='task_text'>Elevate your investment experience</span>
                        </div>
                        <div className='task_div'>

                            <TaskAltIcon sx={{ color: 'var(--primary-green)', fontSize: '32px' }} />
                            <span className='task_text'>Elevate your investment experience</span>
                        </div>
                        <div className='task_div'>

                            <TaskAltIcon sx={{ color: 'var(--primary-green)', fontSize: '32px' }} />
                            <span className='task_text'>Elevate your investment experience</span>
                        </div>
                    </div>


                </motion.div>
            </div>
        </div>
    );
})

