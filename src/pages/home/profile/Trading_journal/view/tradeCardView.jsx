import React from 'react';
import './tradeCardView.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useDispatch } from 'react-redux';
import { setJournal_from } from '../../../Redux/tradingJournalSlice';


export const TradeCard = () => {
    const dispatch = useDispatch()
    return (
        <div className="trade-card-table_main">
            <div className='back_btn' onClick={()=> dispatch(setJournal_from())}>
                <NavigateBeforeIcon/>
                <span>Back</span>
            </div>
        
        <div className="trade-card-table">
            
            <table>
                <thead className='t_head'>
                    <tr>
                        <th>Label</th>
                        <th>Value</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody className='t_body'>
                    <tr>
                        <td>Scrip :</td>
                        <td>FLYNG</td>
                        <td rowSpan="2" className="notes-head">Important Notes</td>
                    </tr>
                    <tr>
                        <td>Date :</td>
                        <td>05-Nov-24</td>
                        {/* <td></td> */}
                    </tr>
                    <tr>
                        <td>Market Conditions :</td>
                        <td>Uptrend / Rally / Volatile</td>
                        <td>Total 71,770 Shares @ 25.7823 = <span className="red">1,850,398</span></td>
                    </tr>
                    <tr>
                        <td className="red-text">Entry Reasons :</td>
                        <td>Positive Financial results for 30 Sept 2024</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="blue-text">Source of Trade :</td>
                        <td>Own Research / Social Media</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Trade Type :</td>
                        <td>Investment</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Entry Price :</td>
                        <td>27.02</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>No of Shares :</td>
                        <td>71,770</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Average Price :</td>
                        <td>25.7823</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Exit :</td>
                        <td>Date: 02/12/2024 | Price: 28.56</td>
                        <td>Sold @ 28.56 = <span className="green">2,047,752</span></td>

                    </tr>
                    <tr>
                        <td>Profit / Loss :</td>
                        <td><span className="profit">197,354 (Profit)</span></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Scrip Behaviour :</td>
                        <td>Volatile</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="red-text">Reasons for Exit :</td>
                        <td>Market appeared to be moving for correction</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="blue-text">Lesson Learnt :</td>
                        <td>Wrong Decision</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IF ? :</td>
                        <td>Holding it was a better Option</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>

    );
};

