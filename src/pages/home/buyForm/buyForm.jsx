import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./buyForm.css"
import "react-datepicker/dist/react-datepicker.css";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { motion, useInView } from "framer-motion";
import Grid from '@mui/material/Grid';
const currencies = [
    {
        value: '1',
        label: 'Broker one',
    },
    {
        value: '2',
        label: 'Broker one',
    },
    {
        value: '3',
        label: 'Broker one',
    },
    {
        value: '4',
        label: 'Broker one',
    },
];
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

export const BuyForm = () => {
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
                    stockName: '',
                    sett_date: '',
                    trade_date: '',
                    // --------------------
                    buy_QTY: '',
                    buy_rate: '',
                    buy_amount: '',
                    buy_broker_amount: '',
                    buy_fed_amount: '',


                }}
                onSubmit={(values, { resetForm }) => {
                    addData(values)
                    resetForm();
                }}

            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid, touched, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>

                        <div className='form-main'>
                            <div>
                                <span className='heading'>BUY FORM</span>
                            </div>



                            <div >
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 2, width: '40ch' } }}
                                    noValidate
                                    autoComplete="off"
                                    className='form'>
                                    <div>
                                     
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Stock Name"
                                            placeholder='stock Name'
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
                                            selected={values.trade_date}
                                            onChange={(date) => handleChange({ target: { name: "trade_date", value: date } })} // Handle date change
                                            onBlur={handleBlur}
                                            type="date"
                                             name="date"
                                              InputLabelProps={{ shrink: true }}
                                               required

                                        />
                                       

                                        <TextField
                                            type='date'
                                            id="outlined-required"
                                            label="Sett Date"
                                            selected={values.trade_date}
                                            onChange={(date) => handleChange({ target: { name: "trade_date", value: date } })} // Handle date change
                                            onBlur={handleBlur}
                                            InputLabelProps={{ shrink: true }}

                                        />

                                        <TextField
                                            id="outlined-required"
                                            label="QTY"
                                            type="number"
                                            placeholder="buy QTY..."
                                            name='buy_QTY'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.buy_QTY}
                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Rate"
                                            placeholder="buy rate..."
                                            name='buy_rate'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.buy_rate}
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Amount"
                                            placeholder="buy amount..."
                                            name='buy_amount'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.buy_amount}
                                        />

                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Broker Name"
                                            placeholder='Broker Name'
                                        >
                                            {currencies.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            id="outlined-required"
                                            label="Broker Amount"
                                            placeholder="Broker Amount ..."
                                            name='buy_broker_amount'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.buy_broker_amount}
                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="FED Amount"
                                            placeholder="Fed amount ..."
                                            name='buy_fed_amount'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.buy_fed_amount}
                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Net Amount"
                                            placeholder="net amount..."
                                            name='net_amount'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.net_amount}
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
