import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./monthly.css"
import "react-datepicker/dist/react-datepicker.css";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { motion, useInView } from "framer-motion";
import { useDispatch } from 'react-redux';
import { setChargesList } from '../../Redux/extrachargesSlice';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const Monthly = () => {
    const dispatch = useDispatch()
    const [isMobile, setIsMobile] = useState(window.innerWidth < 430);

    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    const [value, setValue] = React.useState(null);
    const [selectedDate, setSelectedDate] = useState(null);


    return (

        <motion.div
            ref={refOne}
            initial={{ opacity: 0, y: 100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: .8 }}>




            <Formik
                initialValues={{

                    custodyCharges: '',
                    date:''



                }}
                onSubmit={(values, { resetForm }) => {
                    addData(values)
                    resetForm();
                }}

            >

                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid, touched, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>

                        <div className='form-main-monthly'>
                            <div >

                                <span className='heading-monthly'>Monthly Charges</span>
                            </div>

                            <div style={{ width: '100%' }}>
                                <button className='list_btn' type="button" onClick={() => dispatch(setChargesList())}> <NavigateBeforeIcon />Back</button>
                            </div>

                            <div >
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 2, width: isMobile ? '32ch' : '40ch' } }}
                                    noValidate
                                    autoComplete="off"
                                    className='form-monthly'>
                                    <div>
                                        <TextField
                                            type='date'
                                            id="outlined-required"
                                            label="Date"
                                            selected={values.date}
                                            onChange={(date) => handleChange({ target: { name: "date", value: date } })} // Handle date change
                                            onBlur={handleBlur}
                                            InputLabelProps={{ shrink: true }}

                                        />
                                        <TextField
                                            type="number"
                                            id="outlined-required"
                                            label="Custody Charges"
                                            placeholder="Custody Charges..."
                                            name='custodyCharges'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.custodyCharges}

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
