import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import './extraChargesList.css';
import { Box, Button, Typography, Modal, TextField, Grid, TablePagination } from '@mui/material';
import { useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import { setOneTime, setmonthly } from "../../Redux/extrachargesSlice";
import EditIcon from '@mui/icons-material/Edit';


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
    { id: 1, date: '20/05/2025', custodyCharges: '150' },
    { id: 2, date: '10/01/2025', custodyCharges: '200' },
    { id: 3, date: '05/03/2024', custodyCharges: '175' },
    { id: 3, date: '05/03/2024', custodyCharges: '175' },
    { id: 3, date: '05/03/2024', custodyCharges: '175' },
    { id: 3, date: '05/03/2024', custodyCharges: '175' },
    { id: 3, date: '05/03/2024', custodyCharges: '175' },
    { id: 3, date: '05/03/2024', custodyCharges: '175' },
    { id: 3, date: '05/03/2024', custodyCharges: '175' },
    { id: 3, date: '05/03/2024', custodyCharges: '175' },
    { id: 3, date: '05/03/2024', custodyCharges: '175' },
    { id: 3, date: '05/03/2024', custodyCharges: '175' },
    { id: 3, date: '05/03/2024', custodyCharges: '175' },

];


const ExtraChargesList = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        date: '',
        custodyCharges: '',

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

                <table className="ex_charges_table">
                    <thead className='ex_charges_t_head'>
                        <tr className='ex_charges_t_head_row'>
                            <th>Date</th>
                            <th>Custody Charges </th>
                            {/* <th>Registration Charges (Yearly)</th>
                            <th>NCCPL Charges(Yearly)</th> */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='ex_charges_t_body'>
                        {extraChargesList.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((item, index) => (
                            <tr key={index} className='ex_charges_t_body_row'>
                                <td>{item.date}</td>
                                <td>{item.custodyCharges}</td>
                                {/* <td>{item.registrationCharges} </td>
                                <td>{item.nccplCharges} </td> */}

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
                                    <TextField fullWidth type="number" label="Custody Charges" name="custodyCharges" value={formData.custodyCharges} onChange={handleChange} required />
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

