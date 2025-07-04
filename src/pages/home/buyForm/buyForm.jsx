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
import { useDispatch } from "react-redux";
import { setSellForm, setBuy_sell_list } from "../Redux/formTypeSlice";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


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
                    stockName: '',
                    sett_date: '',
                    trade_date: '',
                    // --------------------
                    buy_QTY: '',
                    buy_rate: '',
                    buy_amount: '',
                    buy_broker_amount: '',
                    buy_fed_amount: '',
                    avg_buying:'',


                }}
                onSubmit={(values, { resetForm }) => {
                    addData(values)
                    resetForm();
                }}

            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid, touched, setFieldValue }) => (
                    <form onSubmit={handleSubmit} className='form_div'>

                        <div className='form-main-buy'>
                            <div>
                                <span className='heading'>BUY</span>
                            </div>
                            <div className='btn_div_buy'>

                                <div className='switchBtn_div_buy'>

                                    <button className='switchBtn_buy' onClick={() => dispatch(setBuy_sell_list())}> <NavigateBeforeIcon/> back</button>
                                </div>
                                <div className='switchBtn_div_buy'>

                                    <button className='switchBtn_buy' onClick={() => dispatch(setSellForm())}>Sell</button>
                                </div>
                            </div>


                            <div >
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 2, width: '38ch' } }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div className='form_buy'>

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
                                            placeholder="Buy QTY..."
                                            name='buy_QTY'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.buy_QTY}
                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Rate"
                                            placeholder="Buy Rate..."
                                            name='buy_rate'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.buy_rate}
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Amount"
                                            placeholder="Buy Amount..."
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
                                            placeholder="Fed Amount ..."
                                            name='buy_fed_amount'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.buy_fed_amount}
                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Net Amount"
                                            placeholder="Net Amount..."
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
                                          <TextField
                                            id="outlined-required"
                                            label="Avg Buying"
                                            placeholder="Avg Buying..."
                                            name='avg_buying'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.avg_buying}
                                            slotProps={{
                                                input: {
                                                    readOnly: true,
                                                },
                                            }}
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
