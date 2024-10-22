import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { iconsArray } from '../sidebar/SidebarIcons';

import logoImage from '../../assets/navbarimg/logoImage.svg'
import questionNavImg from '../../assets/navbarimg/navbarMarkImage.svg'
import navKeyImg from '../../assets/navbarimg/navKeyImg.svg'
// import lastMenuIcon from '../../assets/sidebarMenuIcons/lastSideMenu.svg'

import { Divider } from '@mui/material';
import { useState } from 'react';
import Home from '../Home/Home';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      top: "10% !important",
      height: "82%"
    },
    '& .css-1r9jet7': {
      display: "none !important"
    },
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

function Navbar() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "white" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                open && { display: 'none' },
              ]}
            >
              <img src={logoImage} alt='' />
            </IconButton>

            <Typography variant="h6" noWrap component="div" sx={{ color: "#602EDF" }}>
              SimplAI
            </Typography>
          </Toolbar>

          <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <IconButton>
              <img src={questionNavImg} alt='' />
            </IconButton>

            <IconButton>
              <img src={navKeyImg} alt='' />
            </IconButton>

            <Typography noWrap sx={{ color: "#000000", borderRadius: "50%", padding: "13px 13px", fontSize: "12px", backgroundColor: "#E6EAF5" }}>
              PM
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>

      <Box sx={{ position: 'fixed', height: '100vh' }}
        onMouseEnter={() => setIsHovered(true)}
      >
        <Drawer
          variant="permanent"
          // open={open}
          sx={{
            "& .MuiDrawer-paper": {
              width: isHovered ? 200 : (open ? 100 : 60),
              // width: "200px",
              transition: "width 0.3s ease",
              top: "10%",
              height: "80%",
            },
          }}
        >
          <List>
            {iconsArray.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={[
                    {
                      marginLeft: "10px",
                      display: "flex",
                      fontSize: "22px",
                      fontWeight: 600,
                      color: "black",
                      minHeight: 48,
                      px: 2.5,
                    },
                    open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open ? { mr: 3 } : { mr: 'auto' },
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ marginLeft: "10px", fontWeight: "200", fontSize: "12px" }}>
                    {item.text}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Button outside and below the Drawer */}
        <IconButton sx={{position:"absolute", bottom: 0, left: "10%", display: "flex", gap:"2px", backgroundColor:"white",}}>
          {/* <Divider
            style={{
              backgroundColor: '#C7C7C7',
              width: isHovered ? '200px' : '60px',
              // width:"200px",
              height: '1px',
              transition: "width 0.3s ease",
              // marginBottom: "22px"
            }}
          /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18" fill="none">
              <g clipPath="url(#clip0)">
                <path
                  d="M6.98861 8.47266H0V1.93359C0 0.86741 0.86741 0 1.93359 0H9.91406V18H1.93359C0.86741 18 0 17.1326 0 16.0664V9.52734H6.98861L6.131 10.3849C5.92506 10.5909 5.92506 10.9248 6.131 11.1307C6.33695 11.3367 6.67083 11.3367 6.87677 11.1307L8.63459 9.3729C8.84053 9.16696 8.84053 8.83308 8.63459 8.62713L6.87677 6.86932C6.67083 6.66337 6.33695 6.66337 6.131 6.86932C5.92506 7.07527 5.92506 7.40914 6.131 7.61509L6.98861 8.47266Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M18 1.93359V16.0664C18 17.1326 17.1326 18 16.0664 18H10.9688V0H16.0664C17.1326 0 18 0.86741 18 1.93359ZM13.0781 7.38281H15.8906C16.1819 7.38281 16.418 7.1467 16.418 6.85547C16.418 6.56423 16.1819 6.32812 15.8906 6.32812H13.0781C12.7869 6.32812 12.5508 6.56423 12.5508 6.85547C12.5508 7.1467 12.7869 7.38281 13.0781 7.38281ZM13.0781 5.27344H15.8906C16.1819 5.27344 16.418 5.03733 16.418 4.74609C16.418 4.45486 16.1819 4.21875 15.8906 4.21875H13.0781C12.7869 4.21875 12.5508 4.45486 12.5508 4.74609C12.5508 5.03733 12.7869 5.27344 13.0781 5.27344ZM13.0781 2.10938C12.7869 2.10938 12.5508 2.34548 12.5508 2.63672C12.5508 2.92795 12.7869 3.16406 13.0781 3.16406H15.8906C16.1819 3.16406 16.418 2.92795 16.418 2.63672C16.418 2.34548 16.1819 2.10938 15.8906 2.10938H13.0781Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="25" height="25" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>

            {isHovered && (
              <Typography
                style={{
                  backgroundColor:"white",
                  width:"100px",
                  color:"#000"
                }}
              >
                Lock Sider
              </Typography>
            )}
        </IconButton>
      </Box>
      <Home />
    </Box>
  )
}

export default Navbar