import React from 'react';
import { motion, useInView } from "framer-motion";
import one from '../../assets/onetrade.jpg';
import './register.css';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import Button from '@mui/material/Button';
import axios from 'axios';

export const Register = () => {
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);
    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });

    return (
        <motion.div className='R_main'>
            <motion.div className='register_main'>
                <motion.div
                    className='image_div'
                    ref={refOne}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .7 }}>
                    <img src={one} className='image' alt="Register Illustration" />
                </motion.div>

                <motion.div
                    className='register_form'
                    ref={refTwo}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .7 }}>

                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            number: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            if (values.password !== values.confirmPassword) {
                                alert("❌ Passwords do not match!");
                                setSubmitting(false);
                                return;
                            }

                            try {
                                console.log("📢 Sending Data:", values);
                                const response = await axios.post('http://127.0.0.1:8000/api/accounts/register/', {
                                    name: values.name,  
                                    email: values.email,
                                    number: values.number,  
                                    password: values.password,
                                    confirmPassword: values.confirmPassword  // 👈 Confirm password added
                                });

                                console.log("✅ Response:", response.data);
                                alert(response.data.message || "Registration Successful!");

                            } catch (error) {
                                console.error("❌ Error:", error.response?.data || error.message);
                                alert(error.response?.data.error || "Something went wrong");
                            } finally {
                                setSubmitting(false);
                            }
                        }}>
                        {({ handleBlur, handleChange, handleSubmit, values, isSubmitting }) => (
                            <form onSubmit={handleSubmit} className='form'>
                                <span className='h6'>Registration Form</span>
                                
                                <TextField label="Full Name" name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} className='r_input' required />
                                <TextField label="Email" name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} className='r_input' required />
                                <TextField label="Contact" name='number' onChange={handleChange} onBlur={handleBlur} value={values.number} className='r_input' type='text' required />
                                <TextField label="Password" name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} className='r_input' type='password' required />
                                <TextField label="Confirm Password" name='confirmPassword' onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} className='r_input' type='password' required />

                                <Button variant="contained" disableElevation className='btn' type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Registering..." : "Register"}
                                </Button>
                            </form>
                        )}
                    </Formik>

                </motion.div>
            </motion.div>
        </motion.div>
    );
};
