import React from 'react';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import './overviewIndex.css';
import { motion, useInView } from "framer-motion";

const marketIndex = [
    {
        marketStatus: 'Open',
        currentIndex: '10.25',
        change: '123.123',
        percentChange: '124%',
        high: '12,1234',
        low: '123,214',
        volume: '25',
        previousClose: '2554,3255',
        value: '542,653',
        date: '2025-03-22'
    },
    {
        marketStatus: 'Closed',
        currentIndex: '9.75',
        change: '-50.75',
        percentChange: '-5%',
        high: '11,000',
        low: '9,500',
        volume: '30',
        previousClose: '10,000',
        value: '600,000',
        date: '2025-03-21'
    },
    {
        marketStatus: 'Open',
        currentIndex: '10.25',
        change: '123.123',
        percentChange: '124%',
        high: '12,1234',
        low: '123,214',
        volume: '25',
        previousClose: '2554,3255',
        value: '542,653',
        date: '2025-03-22'
    },
    {
        marketStatus: 'Closed',
        currentIndex: '9.75',
        change: '-50.75',
        percentChange: '-5%',
        high: '11,000',
        low: '9,500',
        volume: '30',
        previousClose: '10,000',
        value: '600,000',
        date: '2025-03-21'
    },
    {
        marketStatus: 'Open',
        currentIndex: '10.25',
        change: '123.123',
        percentChange: '124%',
        high: '12,1234',
        low: '123,214',
        volume: '25',
        previousClose: '2554,3255',
        value: '542,653',
        date: '2025-03-22'
    },
    {
        marketStatus: 'Closed',
        currentIndex: '9.75',
        change: '-50.75',
        percentChange: '-5%',
        high: '11,000',
        low: '9,500',
        volume: '30',
        previousClose: '10,000',
        value: '600,000',
        date: '2025-03-21'
    },
    {
        marketStatus: 'Open',
        currentIndex: '10.25',
        change: '123.123',
        percentChange: '124%',
        high: '12,1234',
        low: '123,214',
        volume: '25',
        previousClose: '2554,3255',
        value: '542,653',
        date: '2025-03-22'
    },
    {
        marketStatus: 'Closed',
        currentIndex: '9.75',
        change: '-50.75',
        percentChange: '-5%',
        high: '11,000',
        low: '9,500',
        volume: '30',
        previousClose: '10,000',
        value: '600,000',
        date: '2025-03-21'
    },
];

export const OverviewIndex = () => {
    const refOne = React.useRef(null);

    const inViewOne = useInView(refOne, { triggerOnce: true });
    return (
        <motion.div className='overview_index_page'
            ref={refOne}
            initial={{ opacity: 0, y: -100 }}
            animate={inViewOne ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: .8 }}>
            <div className='overview_heading_index_div'>
                <ShowChartIcon className='chart_icon' />
                <span className='overview_heading'>Market Overview Index</span>
            </div>
            <div className="market_table_container_overview">
                <table className='market_table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Market Status</th>
                            <th>Current Index</th>
                            <th>Change</th>
                            <th>Percent Change</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Volume</th>
                            <th>Previous Close</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marketIndex.map((item, index) => (
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td>{item.marketStatus}</td>
                                <td>{item.currentIndex}</td>
                                <td>{item.change}</td>
                                <td>{item.percentChange}</td>
                                <td>{item.high}</td>
                                <td>{item.low}</td>
                                <td>{item.volume}</td>
                                <td>{item.previousClose}</td>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};
