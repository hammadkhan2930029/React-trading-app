import React from 'react'
import { motion, useInView } from "framer-motion";
import one from '../../../images/one.jpg'
import './forgot.css'
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
    const navigate = useNavigate();
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    return (
        <motion.div className='R_main'>
            <motion.div
                className='register_login'
               >
                <motion.div
                    className='image_div'
                    ref={refOne}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>
                    <img src={one} className='image_login' />
                </motion.div>
                <motion.div
                    className='register_form'
                    ref={refTwo}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>
                    <Formik
                        initialValues={{
                            email: '',
                            Password: '',
                        }}
                        onSubmit={(values) => {
                            console.log(values)
                        }}>
                        {({ handleBlur, handleChange, handleSubmit, values }) => (

                            <div className='form'>
                                <span className='h6'>Forgot Password</span>
                               
                                <TextField
                                    id="outlined-required"
                                    label="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className='r_input'
                                    placeholder='enter email'
                                    name='email'
                                    type='text'
                                />
                              
                              
                               
                              
                                <Button variant="contained" disableElevation className='btn' onClick={handleSubmit}>
                                    Send
                                </Button>
                                
                            </div>
                        )}

                    </Formik>

                </motion.div>

            </motion.div>
        </motion.div>
    )
}
