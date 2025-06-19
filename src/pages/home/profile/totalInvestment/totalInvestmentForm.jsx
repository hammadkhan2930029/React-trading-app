import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./totalinvestment.css"
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
export const TotalInvestment = () => {
    const dispatch = useDispatch()
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    const [value, setValue] = React.useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    // -----------------------------------------------------------
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        date: '',
        total_investment: '',
    },);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // const handleOpen = () => setOpen(true);
    const handleOpen = (item) => {
        const [day, month, year] = item.date.split('/');
        const formattedDate = `${year}-${month}-${day}`; // convert dd/mm/yyyy to yyyy-mm-dd

        setFormData({
            date: formattedDate,
            total_investment: item.total_investment,

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
    const TotalInvestmentList = [
        {
            id: 1,
            date: '20/05/2025',
            total_investment: '1200',

        },
        {
            id: 2,
            date: '10/01/2025',
            total_investment: '1200',

        },
        {
            id: 3,
            date: '05/03/2024',
            total_investment: '1200',

        },
        {
            id: 1,
            date: '20/05/2025',
            total_investment: '1200',

        },
        {
            id: 2,
            date: '10/01/2025',
            total_investment: '1200',

        },
        {
            id: 3,
            date: '05/03/2024',
            total_investment: '1200',

        },
        {
            id: 1,
            date: '20/05/2025',
            total_investment: '1200',

        },
        {
            id: 2,
            date: '10/01/2025',
            total_investment: '1200',

        },
        {
            id: 3,
            date: '05/03/2024',
            total_investment: '1200',

        },

    ];


    return (

        <motion.div
            ref={refOne}
            initial={{ opacity: 0, y: 100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: .8 }}
            className='investment_main'>




            <Formik
                initialValues={{
                    total_investment: '',
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
                                <span className='heading-oneTime'>Total Investment</span>
                            </div>
                         



                            <div >
                                <Box component="form"
                                    sx={{ '& .MuiTextField-root': { m: 2, width: isMobile ? '32ch' : '40ch' } }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                    <div className='form-oneTime '>
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
                                            label="Total Investment"
                                            type="number"
                                            placeholder="Total Investment..."
                                            name='total_investment'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.total_investment}

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

          
            {/* ==== TABLE SECTION START ==== */}
            <motion.div className="investment_crud_onetime"
                ref={refOne}
                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .8 }}>

                <div className="investment_crud_main_onetime">

                    <table className="investment_table_onetime">
                        <thead className='investment_t_head_onetime'>
                            <tr className='investment_t_head_row_onetime'>
                                <th>Date</th>
                                <th>Total Investment</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='investment_t_body_onetime'>
                            {TotalInvestmentList.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((item, index) => (
                                <tr key={index} className='investment_t_body_row_onetime'>
                                    <td>{item.date}</td>
                                    <td>{Number(item.total_investment).toLocaleString()}</td>
                                    <td>
                                        <button
                                            className="investment_editbtn_onetime"
                                            onClick={() => handleOpen(item)}
                                        >
                                            <EditIcon style={{ fontSize: '16px' }} /> Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <TablePagination
                        component="div"
                        count={TotalInvestmentList.length}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onPageChange={handleChangePage}
                        rowsPerPageOptions={[5, 10, 20]}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />

                    {/* EDIT MODAL */}
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
                                            type="number"
                                            label="Total Investment"
                                            name="registrationCharges"
                                            value={formData.total_investment}
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
                </div>
            </motion.div>

        </motion.div>

    )
}
