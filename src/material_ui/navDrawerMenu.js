import React from 'react';
import { NavLink } from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    width: drawerWidth
  },
  closeMenuButton: {
    marginRight: 0,
    marginLeft: 'auto',
  },
  listItemText: {
      fontSize: '16px',
  }
}));

function DrawerMenu() {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navLinks = [
        {text: "Home", route: "/"},
        {text: "Projects", route: "/projects"}, 
        {text: "Experience", route: "/experience"}, 
        // {text: "Contact", route: "/contact"}
    ]

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div>
            <List>
                {
                    navLinks.map(link => (
                        <ListItem 
                            button 
                            component={NavLink} 
                            to={link.route} 
                            onClick={handleDrawerToggle}
                        >
                            <ListItemText primary={link.text} classes={{primary: classes.listItemText}}/>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
            >
                <MenuIcon fontSize="large"/>
            </IconButton>
            
            <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                    <CloseIcon />
                </IconButton>
                {drawer}
            </Drawer>
        </div>
    );
}

export default DrawerMenu;