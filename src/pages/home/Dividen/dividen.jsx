import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./dividen.css"
import "react-datepicker/dist/react-datepicker.css";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Autocomplete } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { setDividen_list } from "../Redux/profileSlice";
import { useDispatch } from "react-redux";

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

export const Dividen = () => {
    const dispatch = useDispatch();
    const [selectedStock, setSelectedStock] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
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
                    dividenPerShare: '',
                    date: '',
                    total_amount: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    addData(values)
                    resetForm();
                }}>
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid, touched, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>

                        <div className='form-main-dividen'>
                            <div>
                                <span className='heading_dividen'>Dividend</span>
                            </div>


                            <div className='switchBtn_div'>

                                <button className='switchBtn' onClick={() => dispatch(setDividen_list())}>Dividend List</button>
                            </div>
                            <div >
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 2, width: isMobile ? '32ch' : '60ch' } }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div className='dividen_form'>
                                        <Autocomplete
                                            options={stockName}
                                            getOptionLabel={(option) => option.label}
                                            renderOption={(props, option) => (
                                                <MenuItem {...props} key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            )}
                                            onChange={(event, newValue) => {
                                                setSelectedStock(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Stock Name"
                                                    placeholder="Search stock name"
                                                    variant="outlined"
                                                />
                                            )}
                                        />
                                          <TextField
                                            type='date'
                                            id="outlined-required"
                                            label="Date"
                                            selected={values.trade_date}
                                            onChange={(date) => handleChange({ target: { name: "date", value: date } })} // Handle date change
                                            onBlur={handleBlur}
                                            InputLabelProps={{ shrink: true }}

                                        />

                                        <TextField
                                            id="outlined-required"
                                            label="Dividen per Share"
                                            type="text"
                                            placeholder="Dividen per share..."
                                            name='dividenPerShare'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.fullStockName}
                                        />
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Tax"
                                            placeholder='Tax'
                                        >
                                            {tax.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            id="outlined-required"
                                            label="Total Amount"
                                            placeholder="Total amount..."
                                            name='total_amount'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.total_amount}
                                            slotProps={{
                                                input: {
                                                    readOnly: true,
                                                },
                                            }}
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
