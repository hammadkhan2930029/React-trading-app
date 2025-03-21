import React from 'react'
import { motion, useInView } from "framer-motion";
import './login.css'
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import Button from '@mui/material/Button';
import stock8 from '../../assets/stock-8.jpg';
import { useDispatch } from "react-redux";
import { setForget, setRegister } from "../../home/Redux/loginSlice";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });

    // Backend par login request bhejne ka function
    const handleLogin = async (values, { setSubmitting }) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/accounts/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();
            if (response.ok) {
                alert("Login Successful!");
               
                navigate('/responsiveDrawer');  
            } else {
                alert(data.error || "Login Failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Try again later.");
        }
        setSubmitting(false);
    };

    return (
        <motion.div className='R_main'>
            <motion.div className='register_login'>
                <motion.div
                    className='image_div_login'
                    ref={refOne}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inViewOne ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>
                    <img src={stock8} className='image_login' alt="Login" />
                </motion.div>
                <motion.div
                    className='register_form'
                    ref={refTwo}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .8 }}>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={handleLogin}
                    >
                        {({ handleBlur, handleChange, handleSubmit, values, isSubmitting }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='form'>
                                    <span className='h6'>Login</span>

                                    <TextField
                                        type='email'
                                        id="outlined-required"
                                        label="Email"
                                        placeholder="Enter your email..."
                                        name='email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className='r_input'
                                        required
                                    />

                                    <TextField
                                        type='password'
                                        id="outlined-required"
                                        label="Password"
                                        placeholder="Enter your password..."
                                        name='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        className='r_input'
                                        required
                                    />

                                    <div className='f_div'>
                                        <button className='forgot' onClick={() => dispatch(setForget())}>Forgot Password</button>
                                    </div>

                                    <Button
                                        variant="contained"
                                        disableElevation
                                        className='btn'
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Logging in..." : "Login"}
                                    </Button>

                                  
                                    <p style={{color:'#000',padding:8}} onClick={() => dispatch(setRegister())}>
                                        Don't have an account?
                                        <span style={{ color: "blue", cursor: 'pointer' }}> Sign up now!</span>
                                    </p>

                                </div>
                            </form>
                        )}
                    </Formik>

                </motion.div>
            </motion.div>
        </motion.div>
    )
}
