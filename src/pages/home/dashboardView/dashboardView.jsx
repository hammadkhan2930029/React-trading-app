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
// ---------------------------------------------------
import Button from '@mui/material/Button';
// -----------------------------------------------------
import './dashboardView.css';
import avatar from '../../../images/avatar.jpg';
import india from '../../../images/india.png';
import england from '../../../images/england.png';

import flag from '../../../images/flag.png';
import { Card_1 } from './card_1/card_1';
import { Card_2 } from './card_2/card_2';
import Card_3 from './card_3/card_3';
import Card_4 from './card_4/card_4';
import { OverviewList } from './overviewDataList/overviewList';


export const DashboardView = () => {
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
            {/* --------------------------top bar------------------------------------ */}
            {/* <div className='top_bar'>

                <div className='search_bar'>
                    <input placeholder='Search' className='input' />
                    <SearchIcon />

                </div>

            </div> */}
            {/* ----------------------------small cards-------------------------------------- */}
            <div className='main_card_view'>
                {/* -------------------one----------------------- ---------------*/}
                <div className="card">
                    <div className='card_1_data'>
                        <div className='card_icon'>
                            <PaidIcon style={{ width: 50, height: 50, textAlign: 'center' }} />
                        </div>
                        <div className='price'>
                            <span className='h_6'>Total Earning</span>
                            <span className='h_1'>$350.5</span>
                        </div>
                    </div>
                </div>
                {/* ---------------------two------------------------------------ */}
                <div className="card">
                    <div className='card_1_data'>
                        <div className='card_icon'>
                            <PaidIcon style={{ width: 50, height: 50, textAlign: 'center' }} />
                        </div>
                        <div className='price'>
                            <span className='h_6'>Total Investment</span>
                            <span className='h_1'>$350.5</span>
                        </div>
                    </div>
                </div>
                {/* ---------------------------three------------------------------ */}

                <div className="card">
                    <div className='card_data_3'>
                        <span className="sale_text1">Profit / lose</span>
                        <span className="sale_text2">$3562.25</span>
                        <span className="sale_text3">lose : $253</span>
                    </div>
                </div>
                {/* ----------------------------four------------------------------ */}
                <div className="card">
                    <div className='card_4_data'>
                        <div className='card_4_text'>
                            <span className="sale_text1">Holding</span>
                            <span className="sale_text2">10</span>

                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open2 ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open2 ? 'true' : undefined}
                                onClick={handleClick2}
                            >
                                <img className='flag' src={flag} />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl2}
                                open={open2}
                                onClose={handleClose2}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose2}>
                                    <div className='menu_item'>
                                        <img className='menu_icon' src={flag} />
                                        <span className='menu_text'>Pakistan</span>
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={handleClose2}>
                                    <div className='menu_item'>
                                        <img className='menu_icon' src={india} />
                                        <span className='menu_text'>India</span>
                                    </div></MenuItem>
                                <MenuItem onClick={handleClose2}>
                                    <div className='menu_item'>
                                        <img className='menu_icon' src={england} />
                                        <span className='menu_text'>England</span>
                                    </div></MenuItem>
                            </Menu>


                        </div>
                    </div>
                </div>

                {/* ------------------------------five---------------------------- */}
                <div className="card">
                    <div className='card_1_data'>
                        <div className='card_icon'>
                            <PaidIcon style={{ width: 50, height: 50, textAlign: 'center' }} />
                        </div>
                        <div className='price'>
                            <span className='h_6'>Dividend</span>
                            <span className='h_1'>$350.5</span>
                        </div>
                    </div>
                </div>
                {/* ---------------------------------six-------------------------- */}
                <div className="card">
                    <div className='card_1_data'>
                        <div className='card_icon'>
                            <PaidIcon style={{ width: 50, height: 50, textAlign: 'center' }} />
                        </div>
                        <div className='price'>
                            <span className='h_6'>Bonus</span>
                            <span className='h_1'>$350.5</span>
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
