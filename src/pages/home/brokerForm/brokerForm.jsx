import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./brokerForm.css"
import "react-datepicker/dist/react-datepicker.css";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { motion, useInView } from "framer-motion";
import { useDispatch } from 'react-redux';
import { setBroker_list } from '../Redux/profileSlice';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';



export const BrokerForm = () => {
    const dispatch = useDispatch()
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
                    brokerName: '',
                    charges_1: '',
                    charges_2: '',
                    charges_3: '',

                }}
                onSubmit={(values, { resetForm }) => {
                    addData(values)
                    resetForm();
                }}>
                {({ handleBlur, handleChange, handleSubmit, values, errors, }) => (
                    <form onSubmit={handleSubmit}>

                        <div className='form-main-brokerForm'>

                            <div>

                                <span className='heading'>Broker</span>

                            </div>
                            <div className='back_btn_div'>
                                <button className='b_form_backbtn' onClick={() => dispatch(setBroker_list())}> <NavigateBeforeIcon /> Back</button>
                            </div>



                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 2, width: isMobile ? '32ch' : '60ch' } }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div className='form_broker'>
                                        <TextField
                                            id="outlined-required"
                                            label="Broker Name"
                                            type="text"
                                            placeholder="Broker Name..."
                                            name='brokerName'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.brokerName}
                                        />


                                        <TextField
                                            id="outlined-required"
                                            label="First Rang 0.0000 to 4.99"
                                            type="text"
                                            placeholder="Charges..."
                                            name='charges_1'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.charges_1}
                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Second rang 5.0000 to 32.99"
                                            type="text"
                                            placeholder="Charges..."
                                            name='charges_2'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.charges_2}
                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Third rang 33.0000 to 99999.99"
                                            type="text"
                                            placeholder="Charges..."
                                            name='charges_3'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.charges_3}
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
