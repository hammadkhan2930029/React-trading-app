import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import './brokerList.css';
import { Box, Button, Typography, Modal, TextField, Grid, TablePagination } from '@mui/material';
import { useDispatch } from "react-redux";
import { setBrokerForm } from "../../Redux/profileSlice";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';


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

const brokerList = [
    {
        brokerName: 'Ali Brokers',
        range1: '1000 - 5000',
        range2: '5001 - 10000',
        range3: '10001 - 20000',
    },
    {
        brokerName: 'Global Trade Co.',
        range1: '1500 - 7000',
        range2: '7001 - 12000',
        range3: '12001 - 25000',
    },
    {
        brokerName: 'Karachi Finance',
        range1: '2000 - 8000',
        range2: '8001 - 15000',
        range3: '15001 - 30000',
    },
    {
        brokerName: 'Sunrise Investments',
        range1: '1200 - 6000',
        range2: '6001 - 11000',
        range3: '11001 - 22000',
    },
    {
        brokerName: 'Capital Partners',
        range1: '1800 - 7500',
        range2: '7501 - 14000',
        range3: '14001 - 28000',
    },
];

const BrokerList = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        brokerName: '',
        range1: '',
        range2: '',
        range3: '',
    },);
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
    // ------------------------------------------
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });

    return (
        <motion.div className="dividen_crud_Blist"
            ref={refOne}
            initial={{ opacity: 0, y: -100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: .8 }}>
            <div className="dividen_crud_main_Blist">
                <div className="top_btn_Blist">
                    <button className="top_btn_buy_Blist" onClick={() => dispatch(setBrokerForm())} > <AddIcon/> Add Broker</button>
                </div>

                <table className="table_Blist">
                    <thead className='t_head_Blist'>
                        <tr className='t_head_row_Blist'>
                            <th>Broker Name</th>
                            <th>1st range</th>
                            <th>2nd range</th>
                            <th>3rd range</th>
                            <th>Actions</th>


                        </tr>
                    </thead>
                    <tbody className='t_body_Blist'>
                        {brokerList.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((item, index) => (
                            <tr key={index} className='t_body_row_Blist'>
                                <td>{item.brokerName}</td>
                                <td>{item.range1}</td>
                                <td>{item.range2}</td>
                                <td>{item.range3}</td>
                                <td>
                                    <button className="editebtn_Blist" onClick={handleOpen}> <EditIcon style={{fontSize:'16px'}}/> Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <TablePagination
                    component="div"
                    count={brokerList.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={handleChangePage}
                    rowsPerPageOptions={[5, 10, 20]}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

                <Modal open={open} onClose={handleClose}>
                    <Box sx={style}>
                        <Typography variant="h6">Enter Broker Details</Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Broker Name" name="stockName" value={formData.brokerName} onChange={handleChange} required />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth type="number" label="1st range" name="range1" value={formData.range1} onChange={handleChange}  required />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="2nd range" name="range2" type="number" value={formData.range2} onChange={handleChange} required />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="3rd range" name="range3" type="number" value={formData.range3} onChange={handleChange} required />
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

export default BrokerList;

