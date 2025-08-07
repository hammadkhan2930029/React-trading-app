
import React, { useState } from 'react';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import './closedTradeslist.css';
import { motion, useInView } from "framer-motion";
import { Box, Button, Typography, Modal, TextField, Grid, TablePagination } from '@mui/material';



const tradeRecords = [
  {
    script: 'AAPL',
    entryDate: '2025-01-10',
    exitDate: '2025-01-20',
    avgBuying: 150,
    avgSelling: 165,
    quantity: 10,
    pl: 150,
    roi: '10%',
    winOrLoss: 'Win',
  },
  {
    script: 'TSLA',
    entryDate: '2025-02-05',
    exitDate: '2025-02-18',
    avgBuying: 700,
    avgSelling: 650,
    quantity: 5,
    pl: -250,
    roi: '-7.14%',
    winOrLoss: 'Loss',
  },
  {
    script: 'AMZN',
    entryDate: '2025-03-01',
    exitDate: '2025-03-10',
    avgBuying: 3200,
    avgSelling: 3300,
    quantity: 2,
    pl: 200,
    roi: '3.13%',
    winOrLoss: 'Win',
  },
  {
    script: 'GOOGL',
    entryDate: '2025-03-15',
    exitDate: '2025-03-30',
    avgBuying: 2700,
    avgSelling: 2600,
    quantity: 3,
    pl: -300,
    roi: '-3.7%',
    winOrLoss: 'Loss',
  },
  {
    script: 'NFLX',
    entryDate: '2025-04-01',
    exitDate: '2025-04-10',
    avgBuying: 500,
    avgSelling: 550,
    quantity: 4,
    pl: 200,
    roi: '10%',
    winOrLoss: 'Win',
  },
  {
    script: 'MSFT',
    entryDate: '2025-04-15',
    exitDate: '2025-04-25',
    avgBuying: 280,
    avgSelling: 290,
    quantity: 10,
    pl: 100,
    roi: '3.57%',
    winOrLoss: 'Win',
  },
  {
    script: 'META',
    entryDate: '2025-05-01',
    exitDate: '2025-05-12',
    avgBuying: 250,
    avgSelling: 230,
    quantity: 6,
    pl: -120,
    roi: '-8%',
    winOrLoss: 'Loss',
  },
  {
    script: 'NVDA',
    entryDate: '2025-05-20',
    exitDate: '2025-06-01',
    avgBuying: 600,
    avgSelling: 660,
    quantity: 3,
    pl: 180,
    roi: '10%',
    winOrLoss: 'Win',
  },
  {
    script: 'BABA',
    entryDate: '2025-06-10',
    exitDate: '2025-06-20',
    avgBuying: 120,
    avgSelling: 110,
    quantity: 8,
    pl: -80,
    roi: '-8.33%',
    winOrLoss: 'Loss',
  },
  {
    script: 'INTC',
    entryDate: '2025-07-01',
    exitDate: '2025-07-15',
    avgBuying: 50,
    avgSelling: 55,
    quantity: 20,
    pl: 100,
    roi: '10%',
    winOrLoss: 'Win',
  },
  {
    script: 'AMD',
    entryDate: '2025-07-20',
    exitDate: '2025-08-01',
    avgBuying: 90,
    avgSelling: 100,
    quantity: 7,
    pl: 70,
    roi: '11.11%',
    winOrLoss: 'Win',
  },
  {
    script: 'SHOP',
    entryDate: '2025-08-05',
    exitDate: '2025-08-15',
    avgBuying: 75,
    avgSelling: 65,
    quantity: 6,
    pl: -60,
    roi: '-13.33%',
    winOrLoss: 'Loss',
  },
];


export const ClosedTrades = () => {

  const [page, setpage] = useState(0);
  const [rowPerPage, setRowperPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setpage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowperPage(parseInt(event.target.value, 10));
    setpage(0);
  };

  const refOne = React.useRef(null);
  const inViewOne = useInView(refOne, { triggerOnce: true });

  return (
    <motion.div
      className='closed_container'
      ref={refOne}
      initial={{ opacity: 0, y: -100 }}
      animate={inViewOne ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className='closed_header'>
        <ShowChartIcon className='closed_chart_icon' />
        <span className='closed_title'>Closed Trades</span>
      </div>
      <div className="closed_table_wrapper">
        <table className='closed_table'>
          <thead>
            <tr>
              <th>Scrip</th>
              <th>Entry Date</th>
              <th>Exit Date</th>
              <th>Avg Buying</th>
              <th>Avg Selling</th>
              <th>Quantity</th>
              <th>P/L</th>
              <th>ROI</th>
              <th>Win / loss</th>
            </tr>
          </thead>
          <tbody>
            {tradeRecords.slice(page * rowPerPage, (page + 1) * rowPerPage).map((item, index) => (
              <tr key={index}>
                <td>{item.script}</td>
                <td>{item.entryDate}</td>
                <td>{item.exitDate}</td>
                <td>{item.avgBuying}</td>
                <td>{item.avgSelling}</td>
                <td>{item.quantity}</td>
                <td>{item.pl}%</td>
                <td>{item.roi}</td>
                <td>{item.winOrLoss}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div >
          <TablePagination
            component="div"
            count={tradeRecords.length}
            page={page}
            rowsPerPage={rowPerPage}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 20]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            // sx={{
            //   '& .MuiTablePagination-actions button': {
            //     color: '#fff',
            //     backgroundColor: '#1d00d8'
            //   }
            // }}
          />
        </div>
      </div>
    </motion.div>
  );
};
