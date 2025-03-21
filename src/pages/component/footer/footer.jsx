
import React from 'react';
import { motion, useInView } from "framer-motion";
import logo_f from '../../assets/logo-f.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


import './footer.css';

export const Footer = () => {
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    return (
        <div className='f_main'>
            <motion.div
                className='footer_bg'
                ref={refOne}
                initial={{ opacity: 0, y: 100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}>
                    
                <motion.div className='footer_main'>

                    <motion.div className='footer_logo' ref={refOne}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: .8 }}>
                        <img src={logo_f} className='logo' />

                    </motion.div>
                   

                    <motion.div
                        className='footer_icons'
                        ref={refOne}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: .8 }}>
                        <div className='f_shap_one'>
                            <div className='f_shap_two'>
                                <div className='f_shap_three'>
                                    <FacebookIcon className='footer_social_icon' />


                                </div>

                            </div>
                        </div>
                        <div className='f_shap_one'>
                            <div className='f_shap_two'>
                                <div className='f_shap_three'>
                                    <TwitterIcon className='footer_social_icon' />


                                </div>

                            </div>
                        </div>
                        <div className='f_shap_one'>
                            <div className='f_shap_two'>
                                <div className='f_shap_three'>
                                    <LinkedInIcon className='footer_social_icon' />


                                </div>

                            </div>
                        </div>
                        <div className='f_shap_one'>
                            <div className='f_shap_two'>
                                <div className='f_shap_three'>
                                    <YouTubeIcon className='footer_social_icon' />


                                </div>

                            </div>
                        </div>

                    </motion.div>
                    <motion.span className='copy'
                        ref={refOne}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: .8 }}>
                       Designed & Developed by Cogent Devs © 2025
                    </motion.span>
                </motion.div>

            </motion.div>
        </div>
    )
}
