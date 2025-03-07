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
import { ExtraCharges } from '../extraChargesForm/extraCharges.jsx';
import CrudOperation from '../CrudSystem/crudOperation.jsx';
import { DashboardView } from '../dashboardView/dashboardView.jsx';
import logo from '../../../images/logo.png'
import ProfilePage from '../profile/profile.jsx';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from "react-redux";
import { EditeProfile } from '../editeProfile/editeProfile.jsx';

const drawerWidth = 240;

const ResponsiveDrawer = (props) => {
    const formType = useSelector((state) => state.formType.formType);
    const profileFormType = useSelector((state) => state.profile.formType);
    console.log('redux data', profileFormType)
    // ------------------------------------------------------
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [count, setCount] = useState(1)

    // ----------------------------------------------------------------
    const [dropdownOpen, setDropDownOpen] = useState(false);
    // ----------------------------------------------------------
    const [selectedIndex_2, setSelectedIndex_2] = useState(1);
    const [count_2, setCount_2] = useState(1)
    // --------------------------------------------------------------
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
        { value: 2, name: 'Buy' },
        { value: 3, name: 'Sell' },
        { value: 4, name: 'List' },

    ];
    // -------------------------------------------------
    const menuItems_two = [
        { value: 5, name: 'Broker ' },
        { value: 6, name: 'Stock Name' },
        { value: 7, name: 'Extra Charges' },
        { value: 8, name: 'Profile' },
        { value: 9, name: 'Edit Profile' }

    ];

    const drawer = (
        <div style={{ backgroundColor: '#FAF9F6', color: '#000', height: '100%' }}>
            {/* <Toolbar /> */}
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
                                setCount_2(null)
                                setSelectedIndex_2(null)
                            }}
                            sx={{
                                backgroundColor: selectedIndex === item.value ? '#1976d2' : 'transparent',
                                '&:hover': { backgroundColor: '#B9D9EB' }
                            }}
                        >
                            <ListItemIcon sx={{ color: selectedIndex === item.value ? '#fff' : '#000', }}>
                                {item.value % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ color: selectedIndex === item.value ? '#fff' : '#000', }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/* -----------------------------------setting------------------------------------------------- */}
            <List>

                <div>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => setDropDownOpen(prev => !prev)}

                        >
                            <ListItemIcon sx={{ color: '#000' }}>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Setting"} />
                            <ListItemIcon sx={{ color: '#000' }}>
                                {dropdownOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </ListItemIcon>


                        </ListItemButton>


                    </ListItem>
                </div>


            </List>
            {/* ----------------------------------Drop Down---------------------------------------------- */}
            {dropdownOpen && (
                <List>

                    {menuItems_two.map((item) => (
                        <div>
                            <ListItem key={item.value} disablePadding>
                                <ListItemButton onClick={() => {
                                    setSelectedIndex_2(item.value)
                                    setCount_2(item.value)
                                    setCount(null)
                                    setSelectedIndex(null)
                                }}
                                    sx={{
                                        backgroundColor: selectedIndex_2 === item.value ? '#1976d2' : 'transparent',
                                        '&:hover': { backgroundColor: '#B9D9EB' }
                                    }} >
                                    <ListItemIcon sx={{ color: selectedIndex_2 === item.value ? '#fff' : '#000', }}>
                                        {item.value % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} sx={{ color: selectedIndex_2 === item.value ? '#fff' : '#000', }} />


                                </ListItemButton>


                            </ListItem>
                        </div>

                    ))}
                </List>
            )}


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    // --------------------------------------------------



    const renderForm = () => {
        console.log("Current Count:", count);
        console.log("Current Count_2:", count_2);

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
                case 5: return <BrokerForm />;
                case 6: return <StockName />;
                case 7: return <ExtraCharges />;
                case 8: return <ProfilePage />;
                case 9: return <EditeProfile />;
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
