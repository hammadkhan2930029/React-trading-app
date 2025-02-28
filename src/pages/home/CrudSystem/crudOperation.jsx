import React from "react";
import { motion, useInView } from "framer-motion";
import './crudOperation.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

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

const buydata = [

    {
        value: '1',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        buy_QTY: '10',
        buy_rate: '100',
        buy_amount: '1000',
        buy_broker_amount: '5',
        buy_fed_amount: '10',
    },
    {
        value: '2',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        buy_QTY: '10',
        buy_rate: '100',
        buy_amount: '1000',
        buy_broker_amount: '5',
        buy_fed_amount: '10',
    },
    {
        value: '3',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        buy_QTY: '10',
        buy_rate: '100',
        buy_amount: '1000',
        buy_broker_amount: '5',
        buy_fed_amount: '10',
    },
    {
        value: '4',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        buy_QTY: '10',
        buy_rate: '100',
        buy_amount: '1000',
        buy_broker_amount: '5',
        buy_fed_amount: '10',
    },
    {
        value: '5',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        buy_QTY: '10',
        buy_rate: '100',
        buy_amount: '1000',
        buy_broker_amount: '5',
        buy_fed_amount: '10',
    },
    {
        value: '6',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        buy_QTY: '10',
        buy_rate: '100',
        buy_amount: '1000',
        buy_broker_amount: '5',
        buy_fed_amount: '10',
    },

];
const selldata = [

    {
        value: '1',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        sell_QTY: '10',
        sell_rate: '100',
        sell_amount: '1000',
        sell_broker_amount: '5',
        sell_fed_amount: '10',
    },
    {
        value: '2',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        sell_QTY: '10',
        sell_rate: '100',
        sell_amount: '1000',
        sell_broker_amount: '5',
        sell_fed_amount: '10',
    },
    {
        value: '3',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        sell_QTY: '10',
        sell_rate: '100',
        sell_amount: '1000',
        sell_broker_amount: '5',
        sell_fed_amount: '10',
    },
    {
        value: '4',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        sell_QTY: '10',
        sell_rate: '100',
        sell_amount: '1000',
        sell_broker_amount: '5',
        sell_fed_amount: '10',
    },
    {
        value: '5',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        sell_QTY: '10',
        sell_rate: '100',
        sell_amount: '1000',
        sell_broker_amount: '5',
        sell_fed_amount: '10',
    },
    {
        value: '6',
        stockName: 'stock one',
        sett_date: '26/02/2025',
        trade_date: '26/02/2025',
        sell_QTY: '10',
        sell_rate: '100',
        sell_amount: '1000',
        sell_broker_amount: '5',
        sell_fed_amount: '10',
    },

];
const CrudOperation = () => {
    // -----------modal--------------------------
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formData, setFormData] = React.useState({
        stockName: '',
        sett_date: '',
        trade_date: '',
        buy_QTY: '',
        buy_rate: '',
        buy_amount: '',
        buy_broker_amount: '',
        buy_fed_amount: '',
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
    const mergData = [...buydata, ...selldata]
    return (
        <motion.div ref={refOne}
            initial={{ opacity: 0, x: -100 }}
            animate={inViewOne ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: .8 }}
            className="crud">
            <div className="crud_main">
                <table>
                    <thead className='t_head'>
                        <tr className='t_head_row'>
                            <th>sell/buy</th>

                            <th>Stock Name</th>
                            <th>Trade Date</th>
                            <th>Sett Date</th>
                            <th>QTY</th>
                            <th>Rate</th>
                            <th>Amount</th>
                            <th>Broker Amount </th>
                            <th>FED Amount </th>
                            <th> </th>


                        </tr>
                    </thead>
                    <tbody className='t_body'>
                        {buydata?.map((item, index) => (
                            <tr key={index} className='t_body_row'>
                                <td>Buy</td>

                                <td>{item.stockName}</td>
                                <td>{item.sett_date}</td>
                                <td>{item.trade_date}</td>
                                <td>{item.buy_QTY}</td>
                                <td>{item.buy_rate}</td>
                                <td>{item.buy_amount}</td>
                                <td>{item.buy_broker_amount}</td>
                                <td>{item.buy_fed_amount}</td>

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

                        ))}
                        {selldata.map((item, index) => (
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
                        ))}
                    </tbody>
                </table>


            </div>

        </motion.div>
    );
};

export default CrudOperation;
