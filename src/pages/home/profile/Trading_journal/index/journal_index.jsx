
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import './journal_index.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TablePagination from "@mui/material/TablePagination";
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { setTradingJournal_from, setTradingJournal_View, setTradingJournal_EditForm } from "../../../Redux/tradingJournalSlice";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { setJournal_from } from '../../../Redux/tradingJournalSlice';

const JournalIndex_data = [

    {
        value: '1',
        stockName: 'Artistic Denim Mills ADM',
        sett_date: '26/02/2025',
        trade_date: '25/02/2025',
        buy_QTY: '100',
        buy_rate: '10',
        buy_amount: '1000',
        buy_broker_amount: '15',
        buy_fed_amount: '20',
        avg_buying: '12'
    },
    {
        value: '2',
        stockName: 'Pak Elektron PEL',
        sett_date: '27/02/2025',
        trade_date: '26/02/2025',
        buy_QTY: '150',
        buy_rate: '12',
        buy_amount: '1800',
        buy_broker_amount: '18',
        buy_fed_amount: '25',
        avg_buying: '12'

    },
    {
        value: '3',
        stockName: 'Lucky Cement LUCK',
        sett_date: '28/02/2025',
        trade_date: '27/02/2025',
        buy_QTY: '200',
        buy_rate: '50',
        buy_amount: '10000',
        buy_broker_amount: '30',
        buy_fed_amount: '40',
        avg_buying: '12'

    },
    {
        value: '4',
        stockName: 'Engro Corporation ENGRO',
        sett_date: '01/03/2025',
        trade_date: '28/02/2025',
        buy_QTY: '250',
        buy_rate: '40',
        buy_amount: '10000',
        buy_broker_amount: '25',
        buy_fed_amount: '35',
        avg_buying: '12'

    },
    {
        value: '5',
        stockName: 'United Bank UBL',
        sett_date: '02/03/2025',
        trade_date: '01/03/2025',
        buy_QTY: '300',
        buy_rate: '30',
        buy_amount: '9000',
        buy_broker_amount: '27',
        buy_fed_amount: '33',
        avg_buying: '12'

    },
    {
        value: '6',
        stockName: 'Habib Bank HBL',
        sett_date: '03/03/2025',
        trade_date: '02/03/2025',
        buy_QTY: '350',
        buy_rate: '20',
        buy_amount: '7000',
        buy_broker_amount: '21',
        buy_fed_amount: '28',
        avg_buying: '12'

    },
    {
        value: '6',
        stockName: 'Habib Bank HBL',
        sett_date: '03/03/2025',
        trade_date: '02/03/2025',
        buy_QTY: '350',
        buy_rate: '20',
        buy_amount: '7000',
        buy_broker_amount: '21',
        buy_fed_amount: '28',
        avg_buying: '12'

    },
    {
        value: '6',
        stockName: 'Habib Bank HBL',
        sett_date: '03/03/2025',
        trade_date: '02/03/2025',
        buy_QTY: '350',
        buy_rate: '20',
        buy_amount: '7000',
        buy_broker_amount: '21',
        buy_fed_amount: '28',
        avg_buying: '12'

    },

];




// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };


export const JournalIndex = () => {


    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 430);
    // --------------------Redux-------------------------------
    const dispatch = useDispatch();
    // -----------modal--------------------------
    // const [open, setOpen] = useState(false);

    // const handleOpen = (item) => {
    //     const [d1, m1, y1] = item.sett_date.split('/');
    //     const [d2, m2, y2] = item.trade_date.split('/');

    //     const formattedSettle = `${y1}-${m1}-${d1}`;
    //     const formattedTrade = `${y2}-${m2}-${d2}`;

    //     setFormData({
    //         stockName: item.stockName,
    //         sett_date: formattedSettle,
    //         trade_date: formattedTrade,
    //         buy_QTY: item.buy_QTY || item.sell_QTY,
    //         buy_rate: item.buy_rate || item.sell_rate,
    //         buy_amount: item.buy_amount || item.sell_amount,
    //         buy_broker_amount: item.buy_broker_amount || item.sell_broker_amount,
    //         buy_fed_amount: item.buy_fed_amount || item.sell_fed_amount,
    //     });

    //     setOpen(true);
    // };

    // const handleClose = () => setOpen(false);

    // const [formData, setFormData] = useState({
    //     stockName: '',
    //     sett_date: '',
    //     trade_date: '',
    //     buy_QTY: '',
    //     buy_rate: '',
    //     buy_amount: '',
    //     buy_broker_amount: '',
    //     buy_fed_amount: '',
    // });

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     handleClose();
    // };
    // ---------------------------------------------
    const refOne = useRef(null);
    const refTwo = useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const inViewTwo = useInView(refTwo, { triggerOnce: true });
    // ----------------------------------------------------------
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const [selectType, setSelectedType] = useState(3)
    console.log('select type', selectType)

    const paginatedData = JournalIndex_data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);




    return (
        <motion.div
            ref={refOne}
            initial={{ opacity: 0, x: -100 }}
            animate={inViewOne ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="index_crud"
        >

            
            <div className="index_crud_main">
                <div className="index_top_input_fields">


                    <div className="index_top_btn" onClick={() => dispatch(setTradingJournal_from())}>
                        <button className="index_top_btn_buy" >Add </button>
                    </div>

                    <div className="index_search_div">
                        <input placeholder="Search Stock Name" className="index_search_input" />
                        <SearchIcon />
                    </div>



                </div>
                <div className="index_table_wrapper">

                    <table>
                        <thead className="index_t_head">
                            <tr className="index_t_head_row">
                                <th>Stock Name</th>
                                <th>Trade Date</th>
                                <th>QTY</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="index_t_body">
                            {paginatedData.map((item, index) => (
                                <tr key={index} className="index_t_body_row">
                                    <td>{item.stockName}</td>
                                    <td>{item.trade_date}</td>
                                    <td>{item.buy_QTY}</td>
                                    <td>{item.buy_amount}</td>

                                    <td>

                                        <div className="edite_btn_div">
                                            <div className="edite_btn" onClick={() => dispatch(setTradingJournal_EditForm())}>
                                                <EditIcon style={{ fontSize: '15px' }} />
                                                <span>Edit</span>
                                            </div>
                                            <div className="edite_btn" onClick={() => dispatch(setTradingJournal_View())}>
                                                <VisibilityIcon style={{ fontSize: '15px' }} />
                                                <span>View</span>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>

                        {/* <div>
                            <Modal open={open} onClose={handleClose}>
                                <Box sx={style}>
                                    <Typography variant="h6" component="h2" gutterBottom>
                                        Enter Stock Details
                                    </Typography>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Stock Name"
                                                    name="stockName"
                                                    value={formData.stockName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    type="date"
                                                    label="Settlement Date"
                                                    name="sett_date"
                                                    value={formData.sett_date}
                                                    onChange={handleChange}
                                                    InputLabelProps={{ shrink: true }}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    type="date"
                                                    label="Trade Date"
                                                    name="trade_date"
                                                    value={formData.trade_date}
                                                    onChange={handleChange}
                                                    InputLabelProps={{ shrink: true }}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Buy Quantity"
                                                    name="buy_QTY"
                                                    type="number"
                                                    value={formData.buy_QTY}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Buy Rate"
                                                    name="buy_rate"
                                                    type="number"
                                                    value={formData.buy_rate}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Buy Amount"
                                                    name="buy_amount"
                                                    type="number"
                                                    value={formData.buy_amount}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Buy Broker Amount"
                                                    name="buy_broker_amount"
                                                    type="number"
                                                    value={formData.buy_broker_amount}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Buy FED Amount"
                                                    name="buy_fed_amount"
                                                    type="number"
                                                    value={formData.buy_fed_amount}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                        </Grid>
                                        <Box mt={2} display="flex" justifyContent="space-between">
                                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                                            <Button variant="outlined" color="secondary" onClick={handleClose}>Cancel</Button>
                                        </Box>
                                    </form>
                                </Box>
                            </Modal>
                        </div> */}
                    </table>
                </div>

                {/* -------- Pagination ---------- */}
                <TablePagination
                    component="div"
                    count={JournalIndex_data.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, 20]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </motion.div>


    );
};


