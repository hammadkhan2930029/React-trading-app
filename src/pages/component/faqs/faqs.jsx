
import React, { useState } from 'react';
import './faqs.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { motion, useInView } from "framer-motion";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import purs from '../../assets/purs.png';

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


                    <h2 className='faqs_h2'>Frequently Asked Questions</h2>
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
                                <p className='text' style={{ color: select_drop == 1 ? '#fff' : null }}> How to buy the products? </p>
                            </motion.div>

                        </motion.div>
                        {select_drop == 1 ? (
                            <motion.div >
                                <p className='para_text'>Browse our latest collection online. Choose the design and color that suits you best. Securely place your order with a few clicks.</p>
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
                                <p className='text' style={{ color: select_drop == 2 ? '#fff' : null }}> What payment methods do you accept for purchases? </p>
                            </motion.div>

                        </motion.div>
                        {select_drop == 2 ? (
                            <motion.div >
                                <p className='para_text'>Pay through your preferred method (Credit/Debit Card, Bank Transfer, etc.).</p>
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
                                <p className='text' style={{ color: select_drop == 3 ? '#fff' : null }}> How long does delivery take? </p>
                            </motion.div>

                        </motion.div>
                        {select_drop == 3 ? (
                            <motion.div >
                                <p className='para_text'>Delivery time depends on your location. Typically, orders are processed within 24 hours and delivered within 3-7 business days.</p>
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
                        <img className='Faqs_headphone2' src={purs} alt="Headphone" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
