import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./sellForm.css"
import "react-datepicker/dist/react-datepicker.css";
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { motion, useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { setBuyForm} from "../Redux/formTypeSlice";

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
        label: 'Stcok one',
    },
    {
        value: '2',
        label: 'stcok one',
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

export const SellForm = () => {
    const dispatch = useDispatch()
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    const [value, setValue] = React.useState(null);
    const [selectedDate, setSelectedDate] = useState(null);


    return (

        <motion.div ref={refTwo}
            initial={{ opacity: 0, x: 100 }}
            animate={inViewTwo ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: .8 }}>




            <Formik
                initialValues={{
                    stockName: '',
                    sett_date: '',
                    trade_date: '',
                    // --------------------
                    sell_QTY: '',
                    sell_rate: '',
                    sell_amount: '',
                    sell_broker_amount: '',
                    sell_fed_amount: '',
                    net_amount: ''


                }}
                onSubmit={(values, { resetForm }) => {
                    addData(values)
                    resetForm();
                }}

            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid, touched, setFieldValue }) => (
                    <form onSubmit={handleSubmit} className='form_div_sell'>

                        <div className='form-main-sell'>
                            <div>
                                <span className='heading'>SELL FORM</span>
                            </div>

                            <div className='switchBtn_div_sell'>

                                <button className='switchBtn_sell' onClick={()=> dispatch(setBuyForm())}>Buy </button>
                            </div>

                            <div >
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 2, width: '38ch' } }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div className='form_sell'>

                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Stock Name"
                                            placeholder='Stock Name'
                                        >
                                            {stockName.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>


                                        <TextField
                                            type='date'
                                            id="outlined-required"
                                            label="Date"
                                            selected={values.trade_date}
                                            onChange={(date) => handleChange({ target: { name: "trade_date", value: date } })} // Handle date change
                                            onBlur={handleBlur}
                                            className="input"
                                            InputLabelProps={{ shrink: true }}


                                        />

                                        <TextField
                                            type='date'
                                            id="outlined-required"
                                            label="Sett Date"
                                            selected={values.trade_date}
                                            onChange={(date) => handleChange({ target: { name: "trade_date", value: date } })} // Handle date change
                                            onBlur={handleBlur}
                                            className="input"
                                            InputLabelProps={{ shrink: true }}

                                        />

                                        <TextField
                                            id="outlined-required"
                                            label="QTY"
                                            type="number"
                                            placeholder="Sell QTY..."
                                            name='sell_QTY'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.sell_QTY}
                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Rate"
                                            placeholder="buy rate..."
                                            name='sell_rate'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.sell_rate}
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Amount"
                                            placeholder="buy amount..."
                                            name='sell_amount'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.sell_amount}
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
                                            name='sell_broker_amount'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.sell_broker_amount}
                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="FED Amount"
                                            placeholder="Fed amount ..."
                                            name='sell_fed_amount'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.sell_fed_amount}
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

                            <Box sx={{ '& > :not(style)': { m: 1,ml:-10 } }}>

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
