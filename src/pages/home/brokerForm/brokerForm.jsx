import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./brokerForm.css"
import "react-datepicker/dist/react-datepicker.css";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { motion, useInView } from "framer-motion";



export const BrokerForm = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 430);
    const refOne = React.useRef(null);
  

    const inViewOne = useInView(refOne, { triggerOnce: true });
   

    return (

        <motion.div 
        ref={refOne}
        initial={{ opacity: 0, y: -100 }}
        animate={inViewOne ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: .8 }}>
            <Formik
                initialValues={{
                    name: '',
                    charges: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    addData(values)
                    resetForm();
                }}>
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid, touched, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>

                        <div className='form-main-brokerForm'>
                            <div>
                                <span className='heading'>Broker</span>
                            </div>



                            <div >
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 2, width: isMobile ? '32ch': '60ch' } }}
                                    noValidate
                                    autoComplete="off"
                                    className='form'>
                                    <div>
                                        <TextField
                                            id="outlined-required"
                                            label="Broker Name"
                                            type="text"
                                            placeholder="Broker Name..."
                                            name='name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />


                                        <TextField
                                            id="outlined-required"
                                            label="Charges per share"
                                            type="text"
                                            placeholder="Charges..."
                                            name='charges'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.charges}
                                        />
                                    </div>

                                </Box>

                            </div>

                            <Box sx={{ '& > :not(style)': { m: 1 } }}>

                                <Fab variant="extended" color="primary" type="submit">
                                    <SendIcon sx={{ mr: 1.5 }} />
                                    Submit
                                </Fab>
                            </Box>

                        </div>
                    </form>
                )}

            </Formik>
        </motion.div>

    )
}
