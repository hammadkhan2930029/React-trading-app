import React, { useState } from 'react';
import { TextField, Button, Typography, TablePagination, Modal, Box, Grid } from '@mui/material';
import './rules.css';

import { motion, useInView } from "framer-motion";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';




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

export const RuleForm = () => {
    const [rules, setRules] = useState(['']);

    const handleAddRule = () => {
        setRules(prevRules => [...prevRules, '']);
    };

    const handleChangeRules = (index, value) => {
        const updatedRules = [...rules];
        updatedRules[index] = value;
        setRules(updatedRules);
    };

    const handleSubmitAll = () => {
        console.log('All Rules:', rules);
    };

    const handleCancelRule = (index) => {
        if (rules.length > 1) {

            const updatedRules = rules.filter((_, i) => i !== index);
            setRules(updatedRules);
        }
    };
    // -----------------------------------------------------------
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        ruleNo: '',
        rule: '',
    });

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleOpen = (item) => {
        setFormData({
            id: item.id,
            ruleNo: item.ruleNo,
            rule: item.rule,
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
    // ---------------------------------------------------------
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    // --------------------------------------------------------------------
    const rulesData = [
        { id: 1, ruleNo: 1, rule: 'Always write clean code.' },
        { id: 2, ruleNo: 2, rule: 'Use meaningful variable names.' },
        { id: 3, ruleNo: 3, rule: 'Keep components small and reusable.' },
        { id: 4, ruleNo: 4, rule: 'Write comments where needed.' },
        { id: 5, ruleNo: 5, rule: 'Test your code properly.' },
        { id: 6, ruleNo: 6, rule: 'Push code to Git regularly.' },
    ];

    return (
        <div>


            <div className="rule-form-container">
                <div style={{ marginBottom: '10px' }}>
                    <span className="rule-heading">
                        Create Your Rules List
                    </span>
                </div>

                {rules.map((rule, index) => (
                    <div className="rule-item" key={index}>
                        <TextField
                            label={`Rule No ${index + 1}`}
                            multiline
                            fullWidth
                            rows={4}
                            value={rule}
                            onChange={(e) => handleChangeRules(index, e.target.value)}
                        />
                        <div className={`rule-actions ${rules.length === 1 && 'hidden'}`}>
                            <Button
                                variant="outlined"
                                color="error"
                                className="cancel-btn"
                                onClick={() => handleCancelRule(index)}
                                disabled={rules.length === 1}
                            >
                                <DeleteIcon />
                            </Button>
                        </div>
                    </div>
                ))}
                <div className="rule-buttons">
                    <Button variant="contained" onClick={handleAddRule}>
                        Add Rule
                    </Button>
                    <Button variant="contained" color="success" onClick={handleSubmitAll}>
                        Submit
                    </Button>
                </div>
            </div>
            {/* --------------------------- */}
            <motion.div className="rules_crud_wrapper"
                ref={refOne}
                initial={{ opacity: 0, y: -100 }}
                animate={inViewOne ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}>
                <div className="rules_crud_container">

                    <table className="rules_table">
                        <thead className="rules_table_head">
                            <tr className="rules_table_head_row">
                                <th>Rule No</th>
                                <th>Rule</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="rules_table_body">
                            {rulesData.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((item, index) => (
                                <tr key={index} className="rules_table_body_row">
                                    <td>{item.ruleNo}</td>
                                    <td>{item.rule}</td>
                                    <td>
                                        <button className="rules_edit_btn" onClick={() => handleOpen(item)}>
                                            <EditIcon style={{ fontSize: '16px' }} /> Edit
                                        </button>
                                         <button className="rules_delet_btn">
                                            <DeleteIcon style={{ fontSize: '16px'}} /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <TablePagination
                        component="div"
                        count={rulesData.length}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onPageChange={handleChangePage}
                        rowsPerPageOptions={[5, 10, 20]}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />

                    <Modal open={open} onClose={handleClose}>
                        <Box sx={style}>
                            <Typography variant="h6" sx={{ margin: '5px', padding: '5px' }}>Edit Rule</Typography>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            label='Rule'
                                            multiline
                                            fullWidth
                                            rows={4}
                                            name="rule"
                                            value={formData.rule}
                                            onChange={handleChange}
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


        </div>
    );
};
