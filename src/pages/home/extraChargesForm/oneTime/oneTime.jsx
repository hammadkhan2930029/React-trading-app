import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./oneTime.css"
import "react-datepicker/dist/react-datepicker.css";
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import { motion, useInView } from "framer-motion";
import { useDispatch } from 'react-redux';
import { setChargesList } from '../../Redux/extrachargesSlice';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Typography, Modal, Grid, TablePagination } from '@mui/material';

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
export const OneTime = () => {
    const dispatch = useDispatch()
    const [isMobile, setIsMobile] = useState(window.innerWidth < 430);

    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const [value, setValue] = React.useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    // -----------------------------------------------------------
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        date: '',
        registrationCharges: '',
        nccplCharges: '',
    },);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // const handleOpen = () => setOpen(true);
    const handleOpen = (item) => {
        const [day, month, year] = item.date.split('/');
        const formattedDate = `${year}-${month}-${day}`; // convert dd/mm/yyyy to yyyy-mm-dd

        setFormData({
            date: formattedDate,
            registrationCharges: item.registrationCharges,
            nccplCharges:item.nccplCharges
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

    // -------------------------------------------------------------
    const extraChargesOneTimeList = [
        {
            id: 1,
            date: '20/05/2025',

            registrationCharges: '1200',
            nccplCharges: '800',

        },
        {
            id: 2,
            date: '10/01/2025',


            registrationCharges: '1000',
            nccplCharges: '900',

        },
        {
            id: 3,
            date: '05/03/2024',


            registrationCharges: '1100',
            nccplCharges: '950',

        },
        {
            id: 1,
            date: '20/05/2025',
            custodyCharges: '150',
            registrationCharges: '1200',
            nccplCharges: '800',

        },
        {
            id: 2,
            date: '10/01/2025',


            registrationCharges: '1000',
            nccplCharges: '900',

        },
        {
            id: 3,
            date: '05/03/2024',


            registrationCharges: '1100',
            nccplCharges: '950',

        },
        {
            id: 1,
            date: '20/05/2025',

            registrationCharges: '1200',
            nccplCharges: '800',

        },
        {
            id: 2,
            date: '10/01/2025',


            registrationCharges: '1000',
            nccplCharges: '900',

        },
        {
            id: 3,
            date: '05/03/2024',

            registrationCharges: '1100',
            nccplCharges: '950',

        },

    ];


    return (

        <motion.div
            ref={refOne}
            initial={{ opacity: 0, y: 100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: .8 }}>




            <Formik
                initialValues={{
                    registrationCharges: '',
                    nccplCharges: '',
                    date: '',



                }}
                onSubmit={(values, { resetForm }) => {
                    addData(values)
                    resetForm();
                }}

            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid, touched, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>

                        <div className='form-main-oneTime'>
                            <div>
                                <span className='heading-oneTime'>One Time Charges</span>
                            </div>
                            <div style={{ width: '100%' }}>
                                <button className='list_btn' type='button' onClick={() => dispatch(setChargesList())}><NavigateBeforeIcon />Back</button>
                            </div>



                            <div >
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 2, width: isMobile ? '32ch' : '40ch' } }}
                                    noValidate
                                    autoComplete="off"
                                    className='form-oneTime'>
                                    <div>
                                        <TextField
                                            type='date'
                                            id="outlined-required"
                                            label="Date"
                                            selected={values.date}
                                            onChange={(date) => handleChange({ target: { name: "date", value: date } })} // Handle date change
                                            onBlur={handleBlur}
                                            InputLabelProps={{ shrink: true }}

                                        />
                                        <TextField
                                            id="outlined-required"
                                            label="Registration Charges"
                                            type="number"
                                            placeholder="Registration charges..."
                                            name='registrationCharges'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.registrationCharges}

                                        />



                                        <TextField
                                            id="outlined-required"
                                            label="NCCPL Charges"
                                            type="number"
                                            placeholder="NCCLP Charges..."
                                            name='nccplCharges'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.nccplCharges}

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

            {/* ============================================================================================== */}
            <motion.div className="ex_charges_crud_onetime"
                ref={refOne}
                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}>
                <div className="ex_charges_crud_main_onetime">
                   

                    <table className="ex_charges_table_onetime">
                        <thead className='ex_charges_t_head_onetime'>
                            <tr className='ex_charges_t_head_row_onetime'>
                                <th>Date</th>
                                <th>Registration Charges</th>
                                <th>NCCPL Charges</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='ex_charges_t_body_onetime'>
                            {extraChargesOneTimeList.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((item, index) => (
                                <tr key={index} className='ex_charges_t_body_row_onetime'>
                                    <td>{item.date}</td>
                                    <td>{item.registrationCharges} </td>
                                    <td>{item.nccplCharges} </td>

                                    <td>
                                        <button className="ex_charges_editebtn_onetime" onClick={() => handleOpen(item)}>
                                            <EditIcon style={{ fontSize: '16px' }} /> Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <TablePagination
                        component="div"
                        count={extraChargesOneTimeList.length}
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
                                    <Grid item xs={6}>
                                        <TextField fullWidth type="number" label="Registration Charges" name="registrationCharges" value={formData.registrationCharges} onChange={handleChange} required />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField fullWidth label="NCCPL Charges" name="nccplCharges" type="number" value={formData.nccplCharges} onChange={handleChange} required />
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
        </motion.div>

    )
}
