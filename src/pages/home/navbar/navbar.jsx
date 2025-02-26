
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './style.css'
import { Form } from '../form/form.jsx';
import { PrimarySearchAppBar } from '../appBar/appBar.jsx';



const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'Details'];

const Navbar = (props) => {
  const navigate = useNavigate();
  const goToDetails = (item) => {
    console.log("item", item)
    if (item === "Details") {
      navigate('/details')
    }

  }
  // ----------------------------------------------
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} className='drawer_logo' />

      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => { goToDetails(item) }}>
              <ListItemText primary={item} className='line' />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <div className='topBar_main'>




       
     
          <PrimarySearchAppBar/>

        
      


    </div>

  );
}

Navbar.propTypes = {

  window: PropTypes.func,
};

export default Navbar;




