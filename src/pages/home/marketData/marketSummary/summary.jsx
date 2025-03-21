import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./summary.css"
import "react-datepicker/dist/react-datepicker.css";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { motion, useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import MenuItem from '@mui/material/MenuItem';



const stockName = [
    {
        value: '1',
        label: 'stock one',
    },
    {
        value: '2',
        label: 'stock one',
    },
    {
        value: '3',
        label: 'stock one',
    },
    {
        value: '4',
        label: 'stock one',
    },
];
export const Summary = () => {
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });


    return (

        <motion.div
            ref={refOne}
            initial={{ opacity: 0, x: 100 }}
            animate={inViewOne ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: .8 }}>




            <Formik
                initialValues={{
                    ldcp: '',
                    open: '',
                    high: '',
                    low: '',
                    current: '',
                    change: '',
                    volume: '',
                 
                    date: ''


                }}
                onSubmit={(values, { resetForm }) => {
                    addData(values)
                    resetForm();
                }}

            >
                {({ handleBlur, handleChange, handleSubmit, values,  }) => (
                    <form onSubmit={handleSubmit} className='summary_form_div'>

                        <div className='form_summary'>
                            <div>
                                <span className='summary_heading_2'>Market Summary</span>
                            </div>


                            <div >
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 2, width: '38ch' } }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div className='summary_form_main'>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="SCRIP"
                                            placeholder='SCRIP'
                                        >
                                            {stockName.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                        <TextField
                                            id="outlined-required"
                                            label="Date"
                                            selected={values.date}
                                            onChange={(date) => handleChange({ target: { name: "trade_date", value: date } })} // Handle date change
                                            onBlur={handleBlur}
                                            type="date"
                                            name="date"
                                            InputLabelProps={{ shrink: true }}
                                            required

                                        />

                                        <TextField
                                            id="outlined-required"
                                            label="LDCP"
                                            type="text"
                                            placeholder="LDCP..."
                                            name='ldcp'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.ldcp}
                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Open"
                                            placeholder="Open..."
                                            name='open'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.open}
                                            type="number"

                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="High"
                                            placeholder="High..."
                                            name='high'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.high}
                                            type="number"

                                        />

                                        <TextField
                                            id="outlined-required"
                                            label="Low"
                                            placeholder="Low..."
                                            name='low'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.low}
                                            type="number"

                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Current"
                                            placeholder="Current ..."
                                            name='current'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.current}
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
                                            label="Change"
                                            placeholder="Change..."
                                            name='change'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.change}
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
