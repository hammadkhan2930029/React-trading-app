import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./contactUs.css"
import "react-datepicker/dist/react-datepicker.css";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Autocomplete } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { Nav } from '../nav/nav';
import { Subject } from '@mui/icons-material';
import { Navbar2 } from '../nav/navebar2';
import { Footer } from '../footer/footer';
// import { setDividen_list } from "../Redux/profileSlice";
// import { useDispatch } from "react-redux";

const stockName = [
    {
        value: '1',
        label: 'stock one',
    },
    {
        value: '2',
        label: 'stock two',
    },
    {
        value: '3',
        label: 'stock three',
    },
    {
        value: '4',
        label: 'stock four',
    },
];
const tax = [
    {
        value: '1',
        label: 'tax 1',
    },
    {
        value: '2',
        label: 'tax 2',
    },
    {
        value: '3',
        label: 'tax 3',
    },
    {
        value: '4',
        label: 'tax 4',
    },
];

export const ContactUs = () => {
    // const dispatch = useDispatch();
    const [selectedStock, setSelectedStock] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    const refOne = React.useRef(null);


    const inViewOne = useInView(refOne, { triggerOnce: true });
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <motion.div
                ref={refOne}

                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}>
                <Navbar2 />
            </motion.div>

            <motion.div

                ref={refOne}
                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        contact: '',
                        subject: '',
                        msg: ''
                    }}
                    onSubmit={(values, { resetForm }) => {
                        addData(values)
                        resetForm();
                    }}>
                    {({ handleBlur, handleChange, handleSubmit, values, errors, isValid, touched, setFieldValue }) => (
                        <form onSubmit={handleSubmit} className='main_div'>

                            <div className='form-main-contact'>
                                <div>
                                    <span className='heading_contact'>Contact us</span>
                                </div>



                                <div >
                                    <Box component="form"
                                        sx={{ '& .MuiTextField-root': { m: 2, width: isMobile ? '32ch' : '60ch' } }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <div className='contact_form'>

                                            <TextField
                                                type='text'
                                                id="outlined-required"
                                                label="Name"
                                                placeholder="Name..."
                                                selected={values.name}
                                                onChange={handleChange} // Handle date change
                                                onBlur={handleBlur}
                                                 sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1BA12E', // Focus border color
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                '&.Mui-focused': {
                                                    color: '#1BA12E', // Focus label color
                                                },
                                            },
                                        }}

                                            />
                                            <TextField
                                                type='email'
                                                id="outlined-required"
                                                placeholder="Email..."

                                                label="email"
                                                selected={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                 sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1BA12E', // Focus border color
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                '&.Mui-focused': {
                                                    color: '#1BA12E', // Focus label color
                                                },
                                            },
                                        }}

                                            />

                                            <TextField
                                                id="outlined-required"
                                                label="Contact"
                                                type="number"
                                                placeholder="Contact..."
                                                name='contact'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.contact}
                                                 sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1BA12E', // Focus border color
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                '&.Mui-focused': {
                                                    color: '#1BA12E', // Focus label color
                                                },
                                            },
                                        }}
                                            />
                                            <TextField
                                                id="outlined-required"
                                                label="Subject"
                                                type="text"
                                                placeholder="Subject..."
                                                name='Subject'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.subject}
                                                 sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1BA12E', // Focus border color
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                '&.Mui-focused': {
                                                    color: '#1BA12E', // Focus label color
                                                },
                                            },
                                        }}
                                            />
                                            <TextField
                                                id="outlined-required"
                                                label="Message"
                                                type="text"
                                                placeholder="Message..."
                                                name='Message'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.msg}
                                                rows={6}
                                                multiline
                                                 sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#1BA12E', // Focus border color
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                '&.Mui-focused': {
                                                    color: '#1BA12E', // Focus label color
                                                },
                                            },
                                        }}

                                            />






                                        </div>


                                    </Box>

                                </div>
                                <Box >

                                    <div className='switchBtn_div_contact'>

                                        <button className='switchBtn_contact' onClick={() => dispatch(setDividen_list())}>
                                            <SendIcon sx={{ mr: 1.5 }} />
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </Box>



                            </div>
                        </form>
                    )}

                </Formik>
                <div>
                    <Footer/>
                </div>
            </motion.div>
        </div>

    )
}
