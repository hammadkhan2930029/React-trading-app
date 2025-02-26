import React from 'react'
import { motion, useInView } from "framer-motion";
import one from '../../../images/one.jpg'
import './register.css'
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import Button from '@mui/material/Button';
export const Register = () => {
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    return (
        <motion.div className='R_main'>
            <motion.div
                className='register_main'
            >
                <motion.div
                    className='image_div'
                    ref={refOne}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .7 }}>
                    <img src={one} className='image' />
                </motion.div>
                <motion.div
                    className='register_form'
                    ref={refTwo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .7 }}>
                    <Formik
                        initialValues={{
                            fullName: '',
                            email: '',
                            contact: '',
                            number: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        onSubmit={(values) => {
                            console.log(values)
                        }}>
                        {({ handleBlur, handleChange, handleSubmit, values }) => (

                            <div className='form'>
                                <span className='h6'>Registration From</span>
                                <TextField
                                    id="outlined-required"
                                    label="Full Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fullName}
                                    className='r_input'
                                    placeholder='full name'
                                    name='fullName'
                                    type='text'
                                />
                                <TextField
                                    placeholder='email'
                                    name='email'
                                    id="outlined-required"
                                    label="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className='r_input'
                                    type='text'

                                />
                                <TextField
                                   placeholder='Number'
                                    name='number'
                                    id="outlined-required"
                                    label="Conatct"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.number}
                                    className='r_input'
                                    type='number'

                                />
                                <TextField
                                   placeholder='password'
                                    name='password'
                                    id="outlined-required"
                                    label="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className='r_input'
                                    type='password'

                                />
                                <TextField
                                    placeholder='confirm password'
                                    name='confirmPassword'
                                    id="outlined-required"
                                    label="Confirm password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    className='r_input'
                                    type='password'

                                />
                                <Button variant="contained" disableElevation className='btn' onClick={handleSubmit}>
                                    Register
                                </Button>
                            </div>
                        )}

                    </Formik>

                </motion.div>

            </motion.div>
        </motion.div>
    )
}
