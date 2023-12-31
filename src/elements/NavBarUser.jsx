import React from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBarUser = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#f4511e" }} >
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                 <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Employee DashBoard
                    
                </Typography>
                <Button color="inherit"><Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Logout</Link></Button>
                </Toolbar>
            </AppBar>
            </Box>
  )
}

export default NavBarUser