import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import './dividenList.css';
import { Box, Button, Typography, Modal, TextField, Grid, TablePagination } from '@mui/material';
import { useDispatch } from "react-redux";
import { setDividen } from "../Redux/profileSlice";

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
    { value: '1', stockName: 'Stock A', date: '26/02/2025', perShare: 24, tax: 10.25, total: 2530 },
    { value: '2', stockName: 'Stock B', date: '26/02/2025', perShare: 20, tax: 8.50, total: 2000 },
    { value: '3', stockName: 'Stock C', date: '26/02/2025', perShare: 30, tax: 12.75, total: 3000 },
    { value: '4', stockName: 'Stock D', date: '26/02/2025', perShare: 18, tax: 7.80, total: 1800 },
    { value: '5', stockName: 'Stock E', date: '26/02/2025', perShare: 25, tax: 11.00, total: 2500 },
    { value: '6', stockName: 'Stock F', date: '26/02/2025', perShare: 28, tax: 13.20, total: 2800 },
    { value: '7', stockName: 'Stock G', date: '26/02/2025', perShare: 22, tax: 9.90, total: 2200 },
];

const DividenList = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ stockName: '', date: '', dividenPerShare: '', tax: '', total: '' });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleOpen = () => setOpen(true);
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

    return (
        <motion.div className="dividen_crud">
            <div className="dividen_crud_main">
                <div className="top_btn">
                    <button className="top_btn_buy" onClick={() => dispatch(setDividen())}>Dividend</button>
                </div>

                <table>
                    <thead className='t_head'>
                        <tr className='t_head_row'>
                            <th>Stock Name</th>
                            <th>Date</th>
                            <th>Dividend per share</th>
                            <th>Tax</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='t_body'>
                        {dividenData.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((item, index) => (
                            <tr key={index} className='t_body_row'>
                                <td>{item.stockName}</td>
                                <td>{item.date}</td>
                                <td>{item.perShare}</td>
                                <td>{item.tax}</td>
                                <td>{item.total}</td>
                                <td>
                                    <button className="editebtn" onClick={handleOpen}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <TablePagination
                    component="div"
                    count={dividenData.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, 20]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <Typography variant="h6">Enter Dividend Details</Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Stock Name" name="stockName" value={formData.stockName} onChange={handleChange} required />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth type="date" label="Date" name="date" value={formData.date} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Dividend per share" name="dividenPerShare" type="number" value={formData.dividenPerShare} onChange={handleChange} required />
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
        </motion.div>
    );
};

export default DividenList;

