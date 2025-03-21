import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./highlights.css"
import "react-datepicker/dist/react-datepicker.css";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { motion, useInView } from "framer-motion";
import { useDispatch } from "react-redux";
// import { setSellForm } from "../Redux/formTypeSlice";




export const HighLights = () => {
    const dispatch = useDispatch()
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    const [value, setValue] = React.useState(null);
    const [selectedDate, setSelectedDate] = useState(null);


    return (

        <motion.div
            ref={refOne}
            initial={{ opacity: 0, x: -100 }}
            animate={inViewOne ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: .8 }}>




            <Formik
                initialValues={{
                    marketStatus: '',
                    currentIndex: '',
                    change: '',
                    percentChange: '',
                    high: '',
                    low: '',
                    volume: '',
                    previousClose: '',
                    value: '',


                }}
                onSubmit={(values, { resetForm }) => {
                    addData(values)
                    resetForm();
                }}

            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid, touched, setFieldValue }) => (
                    <form onSubmit={handleSubmit} className='highlights_form_div'>

                        <div className='form_highlights'>
                            <div>
                                <span className='highlights_heading'>Highlights</span>
                            </div>
                            {/* <div className='switchBtn_div'>

                                <button className='switchBtn' onClick={() => dispatch(setSellForm())}>Sell</button>
                            </div> */}

                            <div >
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 2, width: '38ch' } }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div className='highlights_form_main'>

                                        <TextField
                                            id="outlined-required"
                                            label="Market Status"
                                            type="text"
                                            placeholder="Market status..."
                                            name='marketStatus'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.marketStatus}
                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Current Index"
                                            placeholder="current index..."
                                            name='currentIndex'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.currentIndex}
                                            type="number"

                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="change"
                                            placeholder="change..."
                                            name='change'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.change}
                                            type="number"

                                        />

                                        <TextField
                                            id="outlined-required"
                                            label="Percent Change"
                                            placeholder="percent change..."
                                            name='percentChange'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.percentChange}
                                            type="number"

                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="High"
                                            placeholder="High ..."
                                            name='high'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.high}
                                            type="number"

                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Low"
                                            placeholder="Low ..."
                                            name='low'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.low}
                                            type="number"

                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Volume"
                                            placeholder="Volume..."
                                            name='volume'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.volume}
                                            type="number"

                                           
                                        />
                                          <TextField
                                            id="outlined-required"
                                            label="Previous Close"
                                            placeholder="previous close..."
                                            name='previousClose'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.previousClose}
                                            type="number"

                                           
                                        />
                                          <TextField
                                            id="outlined-required"
                                            label="value"
                                            placeholder="value..."
                                            name='value'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.value}
                                            type="number"

                                           
                                        />
                                    </div>

                                </Box>

                            </div>

                            <Box sx={{ '& > :not(style)': { m: 1, ml: -10 } }}>

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
