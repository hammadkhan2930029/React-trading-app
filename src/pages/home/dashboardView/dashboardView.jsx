import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import SearchIcon from '@mui/icons-material/Search';
import PaidIcon from '@mui/icons-material/Paid';
import Button from '@mui/material/Button';
import './dashboardView.css';

import holding from '../../assets/holding.jpg'
import { Card_1 } from './card_1/card_1';
import { Card_2 } from './card_2/card_2';
import Card_3 from './card_3/card_3';
import Card_4 from './card_4/card_4';
import { OverviewList } from './overviewDataList/overviewList';
import { useDispatch } from 'react-redux';
import { holdings_details } from '../Redux/formTypeSlice';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ScoreIcon from '@mui/icons-material/Score';
import Filter9PlusIcon from '@mui/icons-material/Filter9Plus';

export const DashboardView = () => {

    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // -----------------------------------
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    // --------------------------------------
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='dashboard_main'>

            {/* ----------------------------small cards-------------------------------------- */}
            <div className='main_card_view'>

                {/* ---------------------1------------------------------------ */}
                <div className="card">
                    <div className='card_1_data'>
                        <div className='card_icon'>
                            <Filter9PlusIcon style={{ width: 50, height: 50, textAlign: 'center',color: 'blue' }} />
                        </div>
                        <div className='price'>
                            <span className='h_6'>Total No. of Trades</span>
                            <span className='h_1'>350</span>
                        </div>
                    </div>
                </div>
                {/* ---------------------2------------------------------------ */}
                <div className="card">
                    <div className='card_1_data'>
                        <div className='card_icon'>
                            <TrendingUpIcon style={{ width: 50, height: 50, textAlign: 'center', color: 'green' }} />
                        </div>
                        <div className='price'>
                            <span className='h_6'>Win Trades (%)</span>
                            <span className='h_1'>65%</span>
                        </div>
                    </div>
                </div>
                {/* ---------------------3------------------------------------ */}
                <div className="card">
                    <div className='card_1_data'>
                        <div className='card_icon'>
                            <TrendingDownIcon style={{ width: 50, height: 50, textAlign: 'center', color: 'red' }} />
                        </div>
                        <div className='price'>
                            <span className='h_6'>Loss Trades (%)</span>
                            <span className='h_1'>35%</span>
                        </div>
                    </div>
                </div>
                {/* -------------------4--------------------------------------*/}
                <div className="card">
                    <div className='card_1_data'>
                        <div className='card_icon'>
                            <FontAwesomeIcon icon={faMoneyBillTrendUp} style={{ width: 50, height: 50, textAlign: 'center',color: 'green' }} />

                        </div>
                        <div className='price'>
                            <span className='h_6'>Total Earning</span>
                            <span className='h_1'>350.5</span>
                        </div>
                    </div>
                </div>
                {/* ---------------------6------------------------------------ */}
                <div className="card">
                    <div className='card_1_data'>
                        <div className='card_icon'>
                            <CurrencyExchangeIcon style={{ width: 50, height: 50, textAlign: 'center',color: 'blue' }} />
                        </div>
                        <div className='price'>
                            <span className='h_6'>Total Investment</span>
                            <span className='h_1'>350.5</span>
                        </div>
                    </div>
                </div>


                {/* ---------------------------7------------------------------ */}

                <div className="card">
                    <div className='card_3'>

                        <div className='card_icon'>
                            <ScoreIcon style={{ width: 50, height: 50, textAlign: 'center',color: 'green' }} />
                        </div>
                        
                        <div className='card_data_3'>
                            <span className="sale_text1">Profit / lose</span>
                            <span className="sale_text2">3562.25</span>
                            <span className="sale_text3">lose : 253</span>
                        </div>
                    </div>

                </div>
                {/* ----------------------------8------------------------------ */}
                <div className="card" onClick={() => dispatch(holdings_details())}>
                    <div className='card_4_data'>
                        <div className='card_icon'>
                            <BusinessCenterOutlinedIcon style={{ width: 50, height: 50, textAlign: 'center',color: 'blue' }} />
                        </div>
                        <div className='card_4_text' >
                            <span className="sale_text1">Holdings</span>
                            <span className="sale_text2">10</span>

                        </div>

                    </div>
                </div>

                {/* ------------------------------9---------------------------- */}
                <div className="card">
                    <div className='card_1_data'>
                        <div className='card_icon'>
                            <AccountBalanceWalletOutlinedIcon style={{ width: 50, height: 50, textAlign: 'center',color: 'blue' }} />
                        </div>
                        <div className='price'>
                            <span className='h_6'>Dividend</span>
                            <span className='h_1'>350.5</span>
                        </div>
                    </div>
                </div>
                {/* ---------------------------------10-------------------------- */}
                <div className="card">
                    <div className='card_1_data'>
                        <div className='card_icon'>
                            <WorkspacePremiumIcon style={{ width: 50, height: 50, textAlign: 'center',color: '#ffbf00' }} />
                        </div>
                        <div className='price'>
                            <span className='h_6'>Bonus</span>
                            <span className='h_1'>350.5</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------Larg card----------------------------------------------- */}
            <div className="larg_cards">
                <div className="larg_cards_data">
                    <OverviewList />

                </div>
                <div className="larg_cards_data">
                    <Card_1 />
                </div>
                <div className="larg_cards_data">
                    <Card_2 />

                </div>
                <div className="larg_cards_data">
                    <Card_3 />

                </div>
                <div className="larg_cards_data">
                    <Card_4 />

                </div>

            </div>
        </div>
    )
}
