import React from "react";
import { motion, useInView } from "framer-motion";
import './dividenList.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  setDividen } from "../Redux/profileSlice";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const dividenData = [

    {
        value: '1',
        stockName: 'stock ',
        date: '26/02/2025',
        perShare: 24,
        tax: 10.2538,
        total: 2530,


    },
    {
        value: '2',
        stockName: 'stock ',
        date: '26/02/2025',
        perShare: 24,
        tax: 10.2538,
        total: 2530,


    },
    {
        value: '3',
        stockName: 'stock ',
        date: '26/02/2025',
        perShare: 24,
        tax: 10.2538,
        total: 2530,


    },
    {
        value: '4',
        stockName: 'stock ',
        date: '26/02/2025',
        perShare: 24,
        tax: 10.2538,
        total: 2530,


    },
    {
        value: '5',
        stockName: 'stock ',
        date: '26/02/2025',
        perShare: 24,
        tax: 10.2538,
        total: 2530,


    },
    {
        value: '6',
        stockName: 'stock ',
        date: '26/02/2025',
        perShare: 24,
        tax: 10.2538,
        total: 2530,


    },
    {
        value: '7',
        stockName: 'stock ',
        date: '26/02/2025',
        perShare: 24,
        tax: 10.2538,
        total: 2530,


    },

];
const DividenList = () => {
    const navigate = useNavigate();

    // --------------------Redux-------------------------------
    const dispatch = useDispatch();
    // -----------modal--------------------------
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formData, setFormData] = React.useState({
        stockName: '',
        date: '',
        dividenPerShare: '',
        tax: '',
        total: ''


    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        handleClose();
    };
    // ---------------------------------------------
    const refOne = React.useRef(null);
    const refTwo = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    // -----------------------------------------------------
    return (
        <motion.div ref={refOne}
            initial={{ opacity: 0, x: -100 }}
            animate={inViewOne ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: .8 }}
            className="dividen_crud">
            <div className="dividen_crud_main">
                <div className="top_btn">

                    <button className="top_btn_buy" onClick={() => dispatch(setDividen())}>Dividen </button>
                    

                </div>

                <table>
                    <thead className='t_head'>
                        <tr className='t_head_row'>

                            <th>Stock Name</th>
                            <th>Date</th>
                            <th>Dividen per share</th>
                            <th>Tax</th>
                            <th>Total</th>

                            <th> </th>


                        </tr>
                    </thead>
                    <tbody className='t_body'>
                        {dividenData?.map((item, index) => (
                            <tr key={index} className='t_body_row'>

                                <td>{item.stockName}</td>
                                <td>{item.date}</td>
                                <td>{item.perShare}</td>
                                <td>{item.tax}</td>
                                <td>{item.total}</td>


                                <td>
                                    <button className="editebtn" onClick={handleOpen}>Edit</button>
                                    <div>
                                        <Modal open={open} onClose={handleClose}>
                                            <Box sx={style}>
                                                <Typography variant="h6" component="h2" gutterBottom>
                                                    Enter Dividen Details
                                                </Typography>
                                                <form onSubmit={handleSubmit}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12}>
                                                            <TextField fullWidth label="Stock Name" name="stockName" value={formData.stockName} onChange={handleChange} required />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField fullWidth type="date" label="Date" name="date" value={formData.date} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
                                                        </Grid>

                                                        <Grid item xs={6}>
                                                            <TextField fullWidth label="Dividen per share" name="dividen_per_share" type="number" value={formData.dividenPerShare} onChange={handleChange} required />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField fullWidth label="Tax" name="tax" type="number" value={formData.tax} onChange={handleChange} required />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField fullWidth label="Total" name="total" type="number" value={formData.total} onChange={handleChange} required />

                                                        </Grid>
                                                    </Grid>
                                                    <Box mt={2} display="flex" justifyContent="space-between">
                                                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                                                        <Button variant="outlined" color="secondary" onClick={handleClose}>Cancel</Button>
                                                    </Box>
                                                </form>
                                            </Box>
                                        </Modal>
                                    </div>
                                </td>



                            </tr>

                        ))}
                        {/* {selldata.map((item, index) => (
                            <tr key={`sell-${index}`} className="t_body_row">
                                <td>Sell</td>
                                <td>{item.stockName}</td>
                                <td>{item.sett_date}</td>
                                <td>{item.trade_date}</td>
                                <td>{item.sell_QTY}</td>
                                <td>{item.sell_rate}</td>
                                <td>{item.sell_amount}</td>
                                <td>{item.sell_broker_amount}</td>
                                <td>{item.sell_fed_amount}</td>
                                <td>
                                    <button className="editebtn" onClick={handleOpen}>Edite</button>
                                    <div>
                                        <Modal open={open} onClose={handleClose}>
                                            <Box sx={style}>
                                                <Typography variant="h6" component="h2" gutterBottom>
                                                    Enter Stock Details
                                                </Typography>
                                                <form onSubmit={handleSubmit}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12}>
                                                            <TextField fullWidth label="Stock Name" name="stockName" value={formData.stockName} onChange={handleChange} required />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField fullWidth type="date" label="Settlement Date" name="sett_date" value={formData.sett_date} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField fullWidth type="date" label="Trade Date" name="trade_date" value={formData.trade_date} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField fullWidth label="Buy Quantity" name="buy_QTY" type="number" value={formData.buy_QTY} onChange={handleChange} required />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField fullWidth label="Buy Rate" name="buy_rate" type="number" value={formData.buy_rate} onChange={handleChange} required />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField fullWidth label="Buy Amount" name="buy_amount" type="number" value={formData.buy_amount} onChange={handleChange} required />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField fullWidth label="Buy Broker Amount" name="buy_broker_amount" type="number" value={formData.buy_broker_amount} onChange={handleChange} required />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <TextField fullWidth label="Buy FED Amount" name="buy_fed_amount" type="number" value={formData.buy_fed_amount} onChange={handleChange} required />
                                                        </Grid>
                                                    </Grid>
                                                    <Box mt={2} display="flex" justifyContent="space-between">
                                                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                                                        <Button variant="outlined" color="secondary" onClick={handleClose}>Cancel</Button>
                                                    </Box>
                                                </form>
                                            </Box>
                                        </Modal>
                                    </div>
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>


            </div>

        </motion.div>
    );
};

export default DividenList;
