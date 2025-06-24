import React, { useState } from 'react';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import './holdings.css';
import { motion, useInView } from "framer-motion";
import { Box, Button, Typography, Modal, TextField, Grid, TablePagination } from '@mui/material';

const holdingsDetails = [
    {
        Scrip: 'Open',
        quantity: '10.25',
        avg_buying: '123.123',
        total_investment: '12,1234',
        current_price: '123,214',
        changes: '25',

    },
    {
        Scrip: 'Open',
        quantity: '10.25',
        avg_buying: '123.123',
        total_investment: '12,1234',
        current_price: '123,214',
        changes: '25',
    },
    {
        Scrip: 'Open',
        quantity: '10.25',
        avg_buying: '123.123',
        total_investment: '12,1234',
        current_price: '123,214',
        changes: '25',
    },
    {
        Scrip: 'Open',
        quantity: '10.25',
        avg_buying: '123.123',
        total_investment: '12,1234',
        current_price: '123,214',
        changes: '25',
    },
    {
        Scrip: 'Open',
        quantity: '10.25',
        avg_buying: '123.123',
        total_investment: '12,1234',
        current_price: '123,214',
        changes: '25',
    },
    {
        Scrip: 'Open',
        quantity: '10.25',
        avg_buying: '123.123',
        total_investment: '12,1234',
        current_price: '123,214',
        changes: '25',
    },
    {
        Scrip: 'Open',
        quantity: '10.25',
        avg_buying: '123.123',
        total_investment: '12,1234',
        current_price: '123,214',
        changes: '25',
    },
    {
        Scrip: 'Open',
        quantity: '10.25',
        avg_buying: '123.123',
        total_investment: '12,1234',
        current_price: '123,214',
        changes: '25',
    },
];

export const Holdings = () => {

    const [page, setpage] = useState(0)
    const [rowPerPage, setRowperPage] = useState(5)
    const handleChangePage = (event, newPage) => {
        setpage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowperPage(parseInt(event.target.value, 10));
        setpage(0);
    };
    // ------------------------------

    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    return (
        <motion.div
            className='holdings_container'
            ref={refOne}
            initial={{ opacity: 0, y: -100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            <div className='holdings_header'>
                <ShowChartIcon className='holdings_chart_icon' />
                <span className='holdings_title'>Holdings Details</span>
            </div>
            <div className="holdings_table_wrapper">
                <table className='holdings_table'>
                    <thead>
                        <tr>
                            <th>Scrip</th>
                            <th>Quantity</th>
                            <th>Avg Buying</th>
                            <th>Total Investment</th>
                            <th>Current Price</th>
                            <th>Change in Rs.</th>
                            <th>Change in %</th>

                        </tr>
                    </thead>
                    <tbody>
                        {holdingsDetails.slice(page * rowPerPage, (page + 1) * rowPerPage).map((item, index) => (
                            <tr key={index}>
                                <td>{item.Scrip}</td>
                                <td>{item.quantity}</td>
                                <td>{item.avg_buying}</td>
                                <td>{item.total_investment}</td>
                                <td>{item.current_price}</td>
                                <td>{item.changes}</td>
                                <td>{item.changes}%</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='pagination'>
                    <TablePagination
                        component="div"
                        count={holdingsDetails.length}
                        page={page}
                        rowsPerPage={rowPerPage}
                        onPageChange={handleChangePage}
                        rowsPerPageOptions={[5, 10, 20]}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>

            </div>
        </motion.div>

    );
};
