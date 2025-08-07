import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import './extraChargesList.css';
import { Box, Button, Typography, Modal, TextField, Grid, TablePagination } from '@mui/material';
import { useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import { setOneTime, setmonthly } from "../../Redux/extrachargesSlice";
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const extraChargesList = [
    { id: 1, date: '20/05/2025', custodyCharges: '150', description: 'Monthly custody fee for May 2025' },
    { id: 2, date: '10/01/2025', custodyCharges: '200', description: 'Annual locker maintenance charge' },
    { id: 3, date: '05/03/2024', custodyCharges: '175', description: 'Custody charges for Q1 2024' },
    { id: 4, date: '15/04/2024', custodyCharges: '180', description: 'Late payment penalty' },
    { id: 5, date: '01/02/2025', custodyCharges: '160', description: 'Custody charges for January 2025' },
    { id: 6, date: '22/06/2025', custodyCharges: '220', description: 'Extra handling fee for overseas transaction Extra handling fee for overseas transaction' },
    { id: 7, date: '10/08/2024', custodyCharges: '140', description: 'Monthly custody fee for August 2024' },
    { id: 8, date: '12/09/2024', custodyCharges: '130', description: 'Security document handling charges' },
    { id: 9, date: '03/11/2024', custodyCharges: '200', description: 'Annual renewal charges' },
    { id: 10, date: '28/12/2024', custodyCharges: '150', description: 'Custody charges for December 2024' },
    { id: 11, date: '07/07/2025', custodyCharges: '210', description: 'Mid-year custody charge' },
    { id: 12, date: '17/01/2024', custodyCharges: '190', description: 'Penalty for delayed document submission' },
    { id: 13, date: '29/02/2024', custodyCharges: '165', description: 'Leap year extra custody charge' },
];



const ExtraChargesList = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        date: '',
        amount: '',
        description: '',


    },);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // const handleOpen = () => setOpen(true);
    const handleOpen = (item) => {
        const [day, month, year] = item.date.split('/');
        const formattedDate = `${year}-${month}-${day}`; // convert dd/mm/yyyy to yyyy-mm-dd

        setFormData({
            date: formattedDate,
            custodyCharges: item.custodyCharges
        });
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        handleClose();
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    // ------------------------------------------
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });

    return (
        <motion.div className="ex_charges_crud"
            ref={refOne}
            initial={{ opacity: 0, y: -100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: .8 }}>
            <div className="ex_charges_crud_main">
                <div className="ex_charges_top_btn">
                    <button className="ex_charges_top_btn_buy" onClick={() => dispatch(setOneTime())}>
                        <AddIcon /> One Time
                    </button>
                    <button className="ex_charges_top_btn_buy" onClick={() => dispatch(setmonthly())}>
                        <AddIcon /> Monthly
                    </button>
                </div>
                <div className="ex_charges_search_div">
                    <TextField
                        placeholder="Search.."
                        label='Search description'
                        className="searchInput" />
                    <div className="ex_charges_search_icon">
                        <span> Search</span>
                        <SearchIcon sx={{ fontSize: '32px', color: '#fff' }} />
                    </div>
                </div>

                <table className="ex_charges_table">
                    <thead className='ex_charges_t_head'>
                        <tr className='ex_charges_t_head_row'>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>

                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='ex_charges_t_body'>
                        {extraChargesList.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((item, index) => (
                            <tr key={index} className='ex_charges_t_body_row'>
                                <td>{item.date}</td>
                                <td>{item.description}</td>
                                <td>{item.custodyCharges}</td>


                                <td>
                                    <button className="ex_charges_editebtn" onClick={() => handleOpen(item)}>
                                        <EditIcon style={{ fontSize: '16px' }} /> Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <TablePagination
                    component="div"
                    count={extraChargesList.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, 20]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <Typography variant="h6">Edit</Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Date"
                                        name="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        label="Description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        multiline
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        label="Amount"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        required />
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
        </motion.div>
    );
};

export default ExtraChargesList;

