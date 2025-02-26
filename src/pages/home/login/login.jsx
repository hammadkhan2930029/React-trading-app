import React from 'react'
import { motion, useInView } from "framer-motion";
import one from '../../../images/one.jpg'
import './login.css'
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
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
                            password: '',
                        }}
                        onSubmit={(values) => {
                            console.log(values)
                        }}>
                        {({ handleBlur, handleChange, handleSubmit, values }) => (

                            <div className='form'>
                                <span className='h6'>Login</span>

                                <TextField
                                    type='text'
                                    id="outlined-required"
                                    label="Email"
                                    placeholder="email..."
                                    name='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className='r_input'
                                />

                                <TextField
                                    type='password'
                                    id="outlined-required"
                                    label="password"
                                    placeholder="password..."
                                    name='password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className='r_input'
                                />
                              
                                <div className='f_div'>
                                    <button className='forgot' onClick={() => navigate('/forgot')}>Forgot Password</button>
                                </div>

                                <Button variant="contained" disableElevation className='btn' onClick={handleSubmit}>
                                    Login
                                </Button>
                                <div className='create_div' onClick={() => navigate('/register')}>
                                    <button className='create'>Create account</button>
                                </div>
                            </div>
                        )}

                    </Formik>

                </motion.div>

            </motion.div>
        </motion.div>
    )
}
