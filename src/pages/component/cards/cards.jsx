import React from 'react';
import './cards.css';
import { motion, useInView } from "framer-motion";
import stock7 from '../../assets/stock-7.jpg'

export const Cards = () => {
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });

    return (
        <div className='mainCards'>
            {/* <motion.div
                className='section_1'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                
            >
                <motion.div className='headings'>
                    <motion.span className="outstanding" variants={cardVariants}>
                        Outstanding Features
                    </motion.span>
                    <div className='line'></div>
                </motion.div>

                <div className="smallCards">
                    {[
                        { icon: <ShoppingBagIcon className='small_cardIcon' />, title: "Multi-Compartment Design",text:'Stay organized with multiple pockets and sections.' },
                        { icon: <BusinessCenterIcon className='small_cardIcon' />, title: "Adjustable & Detachable Straps",text:'Easily switch between a handbag, shoulder bag.' },
                        { icon: <WorkIcon className='small_cardIcon' />, title: "Premium Quality Material" ,text:'Crafted from high-quality leather, faux leather, or fabric.'},
                        { icon: <LocalMallIcon className='small_cardIcon' />, title: "Lightweight & Comfortable Carry " ,text:'Designed for everyday use with a lightweight structure.' }
                    ].map((item, index) => (
                        <motion.div
                            className="small_card"
                            key={index}
                            variants={cardVariants}
                        >
                            <div className="shap">
                                {item.icon}
                            </div>
                            <div className='cardText_div'>

                            <span className='h3'>{item.title}</span>
                            <span className="cardText">
                               {item.text}
                            </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div> */}

            <div className='section_2'>
                <motion.div className='h_phone_div'
                 ref={refTwo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}

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
                
                    <span className='sec2_text2'>
                    Manage Your Portfolio With Ease
                    </span>
                    <div className='line'></div>

                    <span className='sec2_text'>
                    Elevate your investment experience with our Portfolio Management Portal – your ultimate companion for tracking and optimizing investments in the Pakistani stock market.
                    Monitor your portfolio, analyze trends with charts, and make informed decisions.  🚀📈
                    </span>
                   
                </motion.div>
            </div>
        </div>
    );
};

