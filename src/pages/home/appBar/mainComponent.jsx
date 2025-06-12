import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { PrimarySearchAppBar } from './appBar.jsx';
import { BuyForm } from '../buyForm/buyForm.jsx';
import { SellForm } from '../sellForm/sellForm.jsx';
import { BrokerForm } from '../brokerForm/brokerForm.jsx';
import { StockName } from '../stockName/stockName.jsx';
import CrudOperation from '../CrudSystem/crudOperation.jsx';
import { DashboardView } from '../dashboardView/dashboardView.jsx';
import logo from '../../../images/logo.png'
import ProfilePage from '../profile/profile.jsx';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDispatch, useSelector } from "react-redux";
import { setOneTime, setmonthly,setChargesList } from "../Redux/extrachargesSlice.js";

import { EditeProfile } from '../editeProfile/editeProfile.jsx';
import { Dividen } from '../Dividen/dividen.jsx';
import DividenList from '../dividenList/dividenList.jsx';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Developers } from '../developersPage/developer.jsx';
import { OverView } from '../marketData/marketOverview/overview.jsx';
import { Summary } from '../marketData/marketSummary/summary.jsx';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { OverviewIndex } from '../marketData/marketOverviewList/overviewIndex.jsx';
import { SummaryIndex } from '../marketData/marketSummaryIndex/summaryIndex.jsx';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { OneTime } from '../extraChargesForm/oneTime/oneTime.jsx';
import { Monthly } from '../extraChargesForm/monthly/monthly.jsx';
import BrokerList from '../brokerForm/brokerList/brokerList.jsx';
import ExtraChargesList from '../extraChargesForm/extraChargesList/extraChargesList.jsx';
const drawerWidth = 240;
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EditIcon from '@mui/icons-material/Edit';




const ResponsiveDrawer = (props) => {
    const dispatch = useDispatch()

    // --------------------------------------------
    const formType = useSelector((state) => state.formType.formType);
    const profileFormType = useSelector((state) => state.profile.formType);
    const extra_Charges = useSelector((state) => state.extraCharges.formType)
    console.log('redux data profile', profileFormType)
    console.log('formtype', formType)
    console.log('extra charges ', extra_Charges)

    // ------------------------------------------------------
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [count, setCount] = useState(1)

    // ----------------------------------------------------------------
    const [dropdownOpen, setDropDownOpen] = useState(false);
    // -----------------------------------------------------------------
    const [dropdownOpen_three, setDropDownOpen_three] = useState(false);
    const [selectedIndex_3, setSelectedIndex_3] = useState(1);
    const [count_3, setCount_3] = useState(1)
    // ----------------------------------------------------------
    const [selectedIndex_2, setSelectedIndex_2] = useState(1);
    const [count_2, setCount_2] = useState(1)
    // --------------------------------------------------------------
    const [extraCharges, setExtraCharges] = useState(false)
    const [count_4, setCount_4] = useState()
    const [selectedIndex_4, setSelectedIndex_4] = useState();


    // ----------------------------------------------------------------
    useEffect(() => {
        if (formType !== null) {
            setSelectedIndex(formType);
            setCount(formType);
            // ---------------------
            setCount_2(null)
            setSelectedIndex_2(null)

        }
    }, [formType]);
    useEffect(() => {
        if (profileFormType !== null) {
            setCount(null)
            setSelectedIndex(null)
            // -----------------------
            setSelectedIndex_2(profileFormType);
            setCount_2(profileFormType);
        }
    }, [profileFormType]);
    // --------------------------------------
    useEffect(() => {
        if (extra_Charges !== null) {
            setCount(null)
            setSelectedIndex(null)
            setCount_2(null)
            setSelectedIndex_2(null)
            // -----------------------
            setSelectedIndex_4(extra_Charges);
            setCount_4(extra_Charges);
        }
    }, [extra_Charges]);




    // -----------------------------------------------------------

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    // ------------------------------------------------------
    const menuItems_one = [
        { value: 1, name: 'Dashboard' },
        // { value: 2, name: 'Buy' },
        // { value: 3, name: 'Sell' },
        { value: 4, name: 'Buy / Sell' },

    ];
    // -------------------------------------------------
    const menuItems_two = [
        // { value: 78, name: 'Extra Charges' },
        { value: 5, name: 'Broker' },
        // { value: 6, name: 'Stock Name' },
        // { value: 17, name: 'Dividend' },
        { value: 18, name: 'Dividend' },

        { value: 8, name: 'Profile' },
        // { value: 9, name: 'Edit Profile' }

    ];
    // ------------------------------------------------
    const menuItems_three = [
        { value: 11, name: 'Overview ' },
        { value: 12, name: 'Summary' },
        { value: 13, name: 'Overview Index' },
        { value: 14, name: 'Summary Index' },




    ];
    // ---------------------------------------------------------
    const plans = [
        { id: 7, label: 'One Time' },
        { id: 77, label: 'Monthly' },
        { id: 78, label: 'Charges List' }

    ];

    const [hovered, setHovered] = useState(null);



    const hoverStyle = {
        backgroundColor: '#B9D9EB'
    };
    console.log("Rendering Form with count_4:", count_4);

    // ------------------------------------------------------

    const drawer = (
        <div style={{ backgroundColor: '#FAF9F6', color: '#000', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <img src={logo} style={{ width: 100, height: 100 }} />
            </div>
            <Divider />
            {/* -------------------------------------------------------------------------------------- */}
            <List>
                {menuItems_one.map((item) => (
                    <ListItem key={item.value} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                setSelectedIndex(item.value);
                                setCount(item.value);
                                setCount_3(null)
                                setSelectedIndex_3(null)
                                setSelectedIndex_2(null)
                                setCount_2(null)
                                setDropDownOpen(null)
                                setDropDownOpen_three(null)
                                // ------------
                                setIsClosing(false)
                                setMobileOpen(false)
                            }}
                            sx={{
                                backgroundColor: selectedIndex === item.value ? '#1976d2' : 'transparent',
                                '&:hover': { backgroundColor: '#B9D9EB' }
                            }}
                        >
                            <ListItemIcon sx={{ color: selectedIndex === item.value ? '#fff' : '#000', }}>
                                {item.value === 4 ? <FormatListBulletedIcon /> : <MailIcon />}

                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ color: selectedIndex === item.value ? '#fff' : '#000', }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/* -----------------------------------section two------------------------------------------------- */}
            <List>

                <div>
                    {/* -----------------------market summery----------------------------------- */}
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => {
                                setDropDownOpen_three(prev => !prev)
                                setDropDownOpen(false)
                            }}
                            sx={{
                                backgroundColor: dropdownOpen_three ? '#36454F' : 'transparent',
                                '&:hover': { backgroundColor: '#C0C0C0' }
                            }} >
                            <ListItemIcon sx={{ color: dropdownOpen_three ? '#fff' : '#000', }}>
                                <ShowChartIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Market Data"} sx={{ color: dropdownOpen_three ? '#fff' : '#000', }} />
                            <ListItemIcon sx={{ color: dropdownOpen_three ? '#fff' : '#000', }}>
                                {dropdownOpen_three ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </ListItemIcon>


                        </ListItemButton>


                    </ListItem>
                    {dropdownOpen_three && (
                        <List sx={{ backgroundColor: '#E5E4E2' }}>

                            {menuItems_three.map((item) => (
                                <div >
                                    <ListItem key={item.value} disablePadding>
                                        <ListItemButton onClick={() => {
                                            setCount_3(item.value)
                                            setSelectedIndex_3(item.value)
                                            setSelectedIndex_2(null)
                                            setCount_2(null)
                                            setCount(null)
                                            setSelectedIndex(null)
                                            setCount_4()
                                            setSelectedIndex_4()
                                            // ------------
                                            setIsClosing(false)
                                            setMobileOpen(false)
                                            // setExtraCharges(false)
                                        }}
                                            sx={{
                                                backgroundColor: selectedIndex_3 === item.value ? '#1976d2' : 'transparent',
                                                '&:hover': { backgroundColor: '#B9D9EB' }
                                            }} >
                                            <ListItemIcon sx={{ color: selectedIndex_3 === item.value ? '#fff' : '#000', }}>

                                                {(item.value === 13) || (item.value === 14) ? <FormatListBulletedIcon /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} sx={{ color: selectedIndex_3 === item.value ? '#fff' : '#000', }} />


                                        </ListItemButton>


                                    </ListItem>
                                </div>

                            ))}
                        </List>
                    )}
                    {/* --------------------------------------setting----------------------------------------------- */}
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => {
                                setDropDownOpen(prev => !prev)
                                setDropDownOpen_three(false)

                            }}
                            sx={{
                                backgroundColor: dropdownOpen ? '#36454F' : 'transparent',
                                '&:hover': { backgroundColor: '#C0C0C0' }
                            }}>
                            <ListItemIcon sx={{ color: dropdownOpen ? '#fff' : '#000', }}>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Setting"} sx={{ color: dropdownOpen ? '#fff' : '#000', }} />
                            <ListItemIcon sx={{ color: dropdownOpen ? '#fff' : '#000', }}>
                                {dropdownOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </ListItemIcon>


                        </ListItemButton>


                    </ListItem>
                    {dropdownOpen && (
                        <List sx={{ backgroundColor: '#E5E4E2' }}>
                            {/* --------------extra charges-------------------------- */}
                            <ListItemButton
                                onClick={() => {
                                    setExtraCharges(!extraCharges)

                                    setCount(null);
                                    setCount_2(null);
                                    setCount_3(null);
                                    setCount_4(78);
                                    setSelectedIndex_4(78)

                                    setSelectedIndex_2(null)
                                    setSelectedIndex_3(null)
                                    setSelectedIndex(null)

                                }}
                                sx={{
                                    backgroundColor: extraCharges ? '#1976d2': 'transparent',
                                    '&:hover': { backgroundColor: '#B9D9EB' }
                                }}
                            >
                                <ListItemIcon sx={{ color: extraCharges ? '#fff' : '#000', }} >
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary='Extra charges' sx={{ color: extraCharges ? '#fff' : '#000', }}  />
                                {/* {extraCharges ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />} */}

                            </ListItemButton>

                            {/* {extraCharges &&
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 5, width: '90%', borderRadius: 10 }}>
                                        {plans.map((plan, idx) => (
                                            <span
                                                key={plan.id}
                                                style={{
                                                    backgroundColor: selectedIndex_4 === plan.id ? "lightgray" : '#f9f9f9',
                                                    width: '100%',
                                                    padding: 8,
                                                    textAlign: 'center',
                                                    cursor: 'pointer',
                                                    marginTop:5,
                                                    borderRadius:5,
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                     ...(hovered === idx ? hoverStyle : {})
                                                }}
                                                onMouseEnter={() => setHovered(idx)}
                                                onMouseLeave={() => setHovered(null)}
                                                onClick={() => {
                                                    setCount(null);
                                                    setCount_2(null);
                                                    setCount_3(null);
                                                    setCount_4(plan.id);
                                                    setSelectedIndex_4(plan.id)
                                                }}
                                            >
                                                {plan.label}
                                                <KeyboardArrowRightIcon />
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            } */}

                            {/* -------------------------------------------------------------- */}

                            {menuItems_two.map((item) => (
                                <div>
                                    <ListItem key={item.value} disablePadding>
                                        <ListItemButton onClick={() => {
                                            setSelectedIndex_2(item.value)
                                            setCount_2(item.value)
                                            setSelectedIndex_4(null)
                                            setCount(null)
                                            setSelectedIndex(null)
                                            setCount_4()
                                            setCount_3(null)
                                            setSelectedIndex_3(null)
                                            // ------------
                                            setIsClosing(false)
                                            setMobileOpen(false)
                                            setExtraCharges(false)
                                        }}
                                            sx={{
                                                backgroundColor: selectedIndex_2 === item.value ? '#1976d2' : 'transparent',
                                                '&:hover': { backgroundColor: '#B9D9EB' }
                                            }} >
                                            <ListItemIcon sx={{ color: selectedIndex_2 === item.value ? '#fff' : '#000', }}>
                                               
                                                {item.value === 18 ? <FormatListBulletedIcon /> : item.value === 8 ? <AccountBoxIcon /> : item.value === 9 ? <EditIcon /> : <InboxIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={item.name} sx={{ color: selectedIndex_2 === item.value ? '#fff' : '#000', }} />


                                        </ListItemButton>



                                    </ListItem>

                                </div>

                            ))}

                        </List>
                    )}



                    {/* ------------------------------Developer page------------------------------------- */}
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => {
                            setSelectedIndex_2(10)
                            setCount_2(10)
                            setCount(null)
                            setSelectedIndex(null)
                            setCount_3(null)
                            setSelectedIndex_3(null)
                        }}
                            sx={{
                                backgroundColor: selectedIndex_2 === 10 ? '#1976d2' : 'transparent',
                                '&:hover': { backgroundColor: '#B9D9EB' }
                            }} >
                            <ListItemIcon sx={{ color: selectedIndex_2 === 10 ? '#fff' : '#000', }}>
                                <ContactPageIcon />
                            </ListItemIcon >
                            <ListItemText primary={"Developer"} sx={{ color: selectedIndex_2 === 10 ? '#fff' : '#000', }} />



                        </ListItemButton>


                    </ListItem>
                </div>


            </List>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    // --------------------------------------------------



    const renderForm = () => {
        console.log('count 4 ', count_4)


        if (count !== null && count !== undefined) {
            switch (count) {
                case 1: return <DashboardView />;
                case 2: return <BuyForm />;
                case 3: return <SellForm />;
                case 4: return <CrudOperation />;
                default: return null;
            }
        }

        if (count_2 !== null && count_2 !== undefined) {
            switch (count_2) {
                case 55: return <BrokerForm />;
                case 5: return <BrokerList />;
                case 6: return <StockName />;
                case 17: return <Dividen />;
                case 18: return <DividenList />;
                case 8: return <ProfilePage />;
                case 9: return <EditeProfile />;
                case 10: return <Developers />;

                default: return null;
            }
        }
        if (count_3 !== null && count_3 !== undefined) {
            switch (count_3) {

                case 11: return <OverView />;
                case 12: return <Summary />;
                case 13: return <OverviewIndex />;
                case 14: return <SummaryIndex />;




                default: return null;
            }
        }
        if (count_4 !== null && count_4 !== undefined) {
            switch (count_4) {

                case 7: return <OneTime />;
                case 77: return <Monthly />;
                case 78: return <ExtraChargesList />

                default: return null;
            }
        }

        return null;
    };





    return (
        <Box sx={{ display: 'flex', backgroundColor: '#FAF9F6', width: '100%', overflow: 'hidden' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ width: '100%' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <PrimarySearchAppBar />
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}

            >
                {renderForm()}



            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {

    window: PropTypes.func,
};

export default ResponsiveDrawer;
