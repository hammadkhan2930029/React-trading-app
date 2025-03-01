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

const drawerWidth = 240;

const ResponsiveDrawer = (props) => {
    const [count, setCount] = useState(0)
    console.log('count', count)
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
   

    const drawer = (
        <div style={{ backgroundColor: '#fff', color: '#000', height: '100%' }}>
            {/* <Toolbar /> */}
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:10}}>
                <img src={logo} style={{ width: 100, height: 80 }} />
            </div>
            <Divider />
            {/* <ListItem disablePadding>
                <ListItemButton >
                    <ListItemIcon sx={{ color: '#000' }}>
                        <InboxIcon />
                    </ListItemIcon>
                    <a href="https://react-dashboard-hk.netlify.app/" target="_blank" rel="noopener noreferrer">
                       Dashboard
                    </a>



                </ListItemButton>

            </ListItem> */}
            <List>
                {['Dashboard','Buy Form', 'Sell Form', 'Broker Form', 'Stock Name', 'Extra Charges', 'Crud'].map((text, index) => (
                    <div>
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => setCount(index)} >
                                <ListItemIcon sx={{ color: '#000' }}>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />


                            </ListItemButton>


                        </ListItem>
                    </div>

                ))}
            </List>
          
           
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    // --------------------------------------------------

    const renderForm = () => {
        switch (count) {
            case 0:
                return <DashboardView />;
            case 1:
                return <BuyForm />;
            case 2:
                return <SellForm />;
            case 3:
                return <BrokerForm />;
            case 4:
                return <StockName />;
            case 5:
                return <ExtraCharges />;
            case 6:
                return <CrudOperation />;

            default:
                return null;
        }
    };





    return (
        <Box sx={{ display: 'flex' }}>
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
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {renderForm()}

            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
