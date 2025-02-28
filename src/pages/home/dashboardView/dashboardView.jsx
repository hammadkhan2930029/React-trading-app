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
    return (
        <div className='dashboard_main'>
            {/* --------------------------top bar------------------------------------ */}
            <div className='top_bar'>

                <div className='search_bar'>
                    <input placeholder='Search' className='input' />
                    <SearchIcon />

                </div>
                {/* ------------------------------------------------------------- */}
                <div className='avatar_div'>
                    <React.Fragment>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 42, height: 42 }}>
                                        <img className='avatar' src={flag} />
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                            {/* ---------------------------------------------------------------- */}
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 42, height: 42 }}>M</Avatar>
                                </IconButton>
                            </Tooltip>
                            {/* ----------------------------------------------------------------------- */}

                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 42, height: 42 }}>
                                        <img className='avatar' src={avatar} />

                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            slotProps={{
                                paper: {
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&::before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                </div>
            </div>
            {/* ----------------------------small cards-------------------------------------- */}
            <div>
                <div className='main_card_view'>
                    {/* -------------------one----------------------- ---------------*/}
                    <div className="card">
                        <div className='card_1_data'>
                            <div className='card_icon'>
                                <PaidIcon style={{ width: 50, height: 50, textAlign: 'center' }} />
                            </div>
                            <div className='price'>
                                <span className='h_6'>Earning</span>
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
                                <span className='h_6'>Earning</span>
                                <span className='h_1'>$350.5</span>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------three------------------------------ */}

                    <div className="card">
                        <div className='card_data_3'>
                            <span className="sale_text1">Sales</span>
                            <span className="sale_text2">$3562.25</span>
                            <span className="sale_text3">since last month</span>
                        </div>
                    </div>
                    {/* ----------------------------four------------------------------ */}
                    <div className="card">
                        <div className='card_4_data'>
                            <div className='card_4_text'>
                                <span className="sale_text1">Sales</span>
                                <span className="sale_text2">$3562.25</span>

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
                                <span className='h_6'>Earning</span>
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
                                <span className='h_6'>Earning</span>
                                <span className='h_1'>$350.5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------Larg card----------------------------------------------- */}
            <div className="larg_cards">
                <div className="larg_cards_data">
                    <Card_1 />
                </div>
                <div className="larg_cards_data">
                    <Card_2 />

                </div>
                <div className="larg_cards_data">
                <Card_3/>

                </div>
                <div className="larg_cards_data">
                <Card_4/>

                </div>
            </div>
        </div>
    )
}
