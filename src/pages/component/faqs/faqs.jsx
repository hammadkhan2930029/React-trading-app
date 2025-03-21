
import React, { useState } from 'react';
import './faqs.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { motion, useInView } from "framer-motion";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import purs from '../../assets/purs.png';
import stock1 from '../../assets/stock-1.jpg'

export const Faqs = () => {
    const [select_drop, setSelect_drop] = useState(1)
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    return (
        <motion.div className='faqs'>
            <motion.div className='faqs_main'>
                <motion.div className='faqs_left'
                    ref={refOne}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>


                    <h2 className='faqs_h2'>How to Start Investing in Stocks?</h2>
                    <div className='line'></div>
                    <motion.div className='drop' onClick={() => setSelect_drop(1)}
                        ref={refOne}
                        initial={{ opacity: 0, x: -100 }}
                        animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: .8 }}>
                        <motion.div className='drop_style' style={{ backgroundColor: select_drop == 1 ? "#1976D2" : null }}>
                            <motion.div className='drop_icon'>
                                {select_drop == 1 ? (
                                    <RemoveCircleIcon className='icon' />
                                ) : (

                                    <AddCircleIcon className='icon' />
                                )}
                            </motion.div>
                            <motion.div className='drop_text'>
                                <p className='text' style={{ color: select_drop == 1 ? '#fff' : null }}>Explore Market Opportunities </p>
                            </motion.div>

                        </motion.div>
                        {select_drop == 1 ? (
                            <motion.div >
                                <p className='para_text'>Analyze the latest stock trends and find potential investment opportunities.</p>
                            </motion.div>
                        ) : null}


                    </motion.div>

                    <motion.div className='drop' onClick={() => setSelect_drop(2)}>
                        <motion.div className='drop_style' style={{ backgroundColor: select_drop == 2 ? "#1976D2" : null }}>
                            <motion.div className='drop_icon'>
                                {select_drop == 2 ? (
                                    <RemoveCircleIcon className='icon' />
                                ) : (

                                    <AddCircleIcon className='icon' />
                                )}
                            </motion.div>
                            <motion.div className='drop_text'>
                                <p className='text' style={{ color: select_drop == 2 ? '#fff' : null }}> Select the Right Stocks</p>
                            </motion.div>

                        </motion.div>
                        {select_drop == 2 ? (
                            <motion.div >
                                <p className='para_text'>Choose stocks that align with your financial goals and risk appetite.</p>
                            </motion.div>
                        ) : null}


                    </motion.div>

                    <motion.div className='drop' onClick={() => setSelect_drop(3)}>
                        <motion.div className='drop_style' style={{ backgroundColor: select_drop == 3 ? "#1976D2" : null }}>
                            <motion.div className='drop_icon'>
                                {select_drop == 3 ? (
                                    <RemoveCircleIcon className='icon' />
                                ) : (

                                    <AddCircleIcon className='icon' />
                                )}
                            </motion.div>
                            <motion.div className='drop_text'>
                                <p className='text' style={{ color: select_drop == 3 ? '#fff' : null }}> Invest Securely </p>
                            </motion.div>

                        </motion.div>
                        {select_drop == 3 ? (
                            <motion.div >
                                <p className='para_text'>Execute trades with just a few clicks through a trusted brokerage platform.

                                    Start building your wealth today! 📈🚀.</p>
                            </motion.div>
                        ) : null}


                    </motion.div>

                </motion.div>


                <motion.div className='faqs_right'
                    ref={refTwo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <img className='Faqs_headphone2' src={stock1} alt="Headphone" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
