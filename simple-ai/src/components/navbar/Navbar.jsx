import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { iconsArray } from '../sidebar/SidebarIcons';

import tools from '../../assets/sidebarMenuIcons/tools.svg'
import agents from '../../assets/sidebarMenuIcons/agents.svg'
import models from '../../assets/sidebarMenuIcons/models.svg'
import knowledgeBase from '../../assets/sidebarMenuIcons/knowledgeBase.svg'
import { Button } from '@mui/material';

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="27" height="27" rx="4" fill="url(#paint0_linear_340_4525)" />
                <path
                  d="M15.1263 11.0513L9.56687 14.734C8.83092 13.6227 9.13387 12.1242 10.2467 11.3868L15.8061 7.7041C16.5421 8.81541 16.2376 10.3139 15.1263 11.0513Z"
                  fill="white"
                />
                <path
                  d="M16.2056 8.92624C16.1864 .50507 16.0563 8.08242 15.8066 7.7041L10.2456 11.3868C9.48753 11.8892 9.10478 12.7463 9.17276 13.5946L16.0534 9.03708C16.1051 9.00161 16.1568 8.96466 16.2056 8.92624Z"
                  fill="white"
                />
                <path
                  d="M16.5931 18.6211L11.0337 22.3053C10.2977 21.194 10.6007 19.6955 11.7135 18.9581L17.2729 15.2754C18.0104 16.3867 17.7059 17.8852 16.5931 18.6211Z"
                  fill="white"
                />
                <path
                  d="M10.6391 20.7987C10.6021 21.313 10.7278 21.8421 11.0337 22.3046L16.5931 18.622C17.437 18.0633 17.8153 17.0644 17.6261 16.1289L10.9539 20.5505C10.8401 20.6244 10.7351 20.7086 10.6391 20.7987Z"
                  fill="white"
                />
                <path
                  d="M15.7415 14.2343L9.20518 12.9072C8.93918 14.2136 9.78448 15.4889 11.0909 15.7549L17.6272 17.082C17.8932 15.7742 17.0479 14.5003 15.7415 14.2343Z"
                  fill="white"
                />
                <path
                  d="M9.21387 13.9111C9.41485 14.8141 10.1271 15.5589 11.0907 15.7554L17.627 17.0825C17.7289 16.5815 17.6669 16.085 17.4777 15.6475C17.3211 15.5781 17.1541 15.5234 16.9782 15.4879L9.21387 13.9111Z"
                  fill="white"
                />
                <circle cx="16.1993" cy="5.63485" r="1.17391" fill="white" />
                <defs>
                  <linearGradient
                    id="paint0_linear_340_4525"
                    x1="-1.05469"
                    y1="14.5547"
                    x2="29.9531"
                    y2="14.7656"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C266E7" />
                    <stop offset="1" stop-color="#602EDF" />
                  </linearGradient>
                </defs>
              </svg>
            </IconButton>

            <Typography variant="h6" noWrap component="div" sx={{ color: "#602EDF" }}>
              SimplAI
            </Typography>
          </Toolbar>

          <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <IconButton>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_6817_5704)">
                  <path d="M12 0C5.36761 0 0 5.367 0 12C0 18.6323 5.367 24 12 24C18.6324 24 24 18.633 24 12C24 5.36761 18.633 0 12 0ZM12 22.3256C6.30647 22.3256 1.67442 17.6936 1.67442 12C1.67442 6.30642 6.30647 1.67442 12 1.67442C17.6936 1.67442 22.3256 6.30642 22.3256 12C22.3256 17.6936 17.6936 22.3256 12 22.3256Z" fill="#434343"></path>
                  <path d="M11.6448 15.1841C10.9814 15.1841 10.4443 15.7369 10.4443 16.4003C10.4443 17.048 10.9656 17.6166 11.6448 17.6166C12.324 17.6166 12.861 17.048 12.861 16.4003C12.861 15.7369 12.3082 15.1841 11.6448 15.1841Z" fill="#434343"></path>
                  <path d="M11.85 5.9751C9.71759 5.9751 8.73828 7.2388 8.73828 8.09174C8.73828 8.70777 9.25953 8.99211 9.686 8.99211C10.539 8.99211 10.1915 7.7758 11.8026 7.7758C12.5924 7.7758 13.2243 8.12333 13.2243 8.84994C13.2243 9.70288 12.3397 10.1925 11.8184 10.6348C11.3603 11.0296 10.7601 11.6773 10.7601 13.0357C10.7601 13.8571 10.9813 14.094 11.6289 14.094C12.4028 14.094 12.5608 13.7466 12.5608 13.4464C12.5608 12.625 12.5766 12.1512 13.4454 11.4719C13.8718 11.1403 15.2144 10.0661 15.2144 8.58135C15.2144 7.09658 13.8718 5.9751 11.85 5.9751Z" fill="#434343"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6817_5704">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </IconButton>

            <IconButton>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_5478_4927)">
                  <path d="M2.87813 5.75625C4.46767 5.75625 5.75625 4.46767 5.75625 2.87813C5.75625 1.28858 4.46767 0 2.87813 0C1.28858 0 0 1.28858 0 2.87813C0 4.46767 1.28858 5.75625 2.87813 5.75625Z" fill="#602EDF" />
                  <path d="M12 5.75625C13.5895 5.75625 14.8781 4.46767 14.8781 2.87813C14.8781 1.28858 13.5895 0 12 0C10.4104 0 9.12183 1.28858 9.12183 2.87813C9.12183 4.46767 10.4104 5.75625 12 5.75625Z" fill="#602EDF" />
                  <path d="M21.1218 5.75625C22.7113 5.75625 23.9999 4.46767 23.9999 2.87813C23.9999 1.28858 22.7113 0 21.1218 0C19.5322 0 18.2437 1.28858 18.2437 2.87813C18.2437 4.46767 19.5322 5.75625 21.1218 5.75625Z" fill="#602EDF" />
                  <path d="M2.87813 14.8781C4.46767 14.8781 5.75625 13.5896 5.75625 12C5.75625 10.4105 4.46767 9.12189 2.87813 9.12189C1.28858 9.12189 0 10.4105 0 12C0 13.5896 1.28858 14.8781 2.87813 14.8781Z" fill="#602EDF" />
                  <path d="M12 14.8781C13.5895 14.8781 14.8781 13.5896 14.8781 12C14.8781 10.4105 13.5895 9.12189 12 9.12189C10.4104 9.12189 9.12183 10.4105 9.12183 12C9.12183 13.5896 10.4104 14.8781 12 14.8781Z" fill="#602EDF" />
                  <path d="M21.1218 14.8781C22.7113 14.8781 23.9999 13.5896 23.9999 12C23.9999 10.4105 22.7113 9.12189 21.1218 9.12189C19.5322 9.12189 18.2437 10.4105 18.2437 12C18.2437 13.5896 19.5322 14.8781 21.1218 14.8781Z" fill="#602EDF" />
                  <path d="M2.87813 24C4.46767 24 5.75625 22.7114 5.75625 21.1219C5.75625 19.5323 4.46767 18.2437 2.87813 18.2437C1.28858 18.2437 0 19.5323 0 21.1219C0 22.7114 1.28858 24 2.87813 24Z" fill="#602EDF" />
                  <path d="M12 24C13.5895 24 14.8781 22.7114 14.8781 21.1219C14.8781 19.5323 13.5895 18.2437 12 18.2437C10.4104 18.2437 9.12183 19.5323 9.12183 21.1219C9.12183 22.7114 10.4104 24 12 24Z" fill="#602EDF" />
                  <path d="M21.1218 24C22.7113 24 23.9999 22.7114 23.9999 21.1219C23.9999 19.5323 22.7113 18.2437 21.1218 18.2437C19.5322 18.2437 18.2437 19.5323 18.2437 21.1219C18.2437 22.7114 19.5322 24 21.1218 24Z" fill="#602EDF" />
                </g>
                <defs>
                  <clipPath id="clip0_5478_4927">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </IconButton>

            {/* <Typography sx={{color:"black", height:"24px", width:"1px"}}></Typography> */}

            <Typography noWrap sx={{ color: "#000000", borderRadius: "50%", padding: "13px 13px", fontSize: "12px", backgroundColor: "#E6EAF5" }}>
              PM
            </Typography>
          </Toolbar>
        </Box>

      </AppBar>
      <Box sx={{ position: 'fixed', height: '100vh' }}>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            "& .MuiDrawer-paper": {
              width: open ? 100 : 60,
              transition: "width 0.3s ease",
              top: "10%",
              height: "80%",
              "&:hover": {
                width: 200,
              },
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
        <IconButton sx={{
            position: "absolute",
            bottom: 0,
            // left: "10%",
            left:0,
            color:"#444444",
            display:"flex",
            flexDirection: "column",
            padding: "10px 0 !important"
          }}>
            <hr style={{ color: 'black', width:"60px", border: '1px solid #C7C7C7' }} />
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18" fill="none">
            <g clipPath="url(#clip0)">
              <path d="M6.98861 8.47266H0V1.93359C0 0.86741 0.86741 0 1.93359 0H9.91406V18H1.93359C0.86741 18 0 17.1326 0 16.0664V9.52734H6.98861L6.131 10.3849C5.92506 10.5909 5.92506 10.9248 6.131 11.1307C6.33695 11.3367 6.67083 11.3367 6.87677 11.1307L8.63459 9.3729C8.84053 9.16696 8.84053 8.83308 8.63459 8.62713L6.87677 6.86932C6.67083 6.66337 6.33695 6.66337 6.131 6.86932C5.92506 7.07527 5.92506 7.40914 6.131 7.61509L6.98861 8.47266Z" fill="currentColor"></path>
              <path d="M18 1.93359V16.0664C18 17.1326 17.1326 18 16.0664 18H10.9688V0H16.0664C17.1326 0 18 0.86741 18 1.93359ZM13.0781 7.38281H15.8906C16.1819 7.38281 16.418 7.1467 16.418 6.85547C16.418 6.56423 16.1819 6.32812 15.8906 6.32812H13.0781C12.7869 6.32812 12.5508 6.56423 12.5508 6.85547C12.5508 7.1467 12.7869 7.38281 13.0781 7.38281ZM13.0781 5.27344H15.8906C16.1819 5.27344 16.418 5.03733 16.418 4.74609C16.418 4.45486 16.1819 4.21875 15.8906 4.21875H13.0781C12.7869 4.21875 12.5508 4.45486 12.5508 4.74609C12.5508 5.03733 12.7869 5.27344 13.0781 5.27344ZM13.0781 2.10938C12.7869 2.10938 12.5508 2.34548 12.5508 2.63672C12.5508 2.92795 12.7869 3.16406 13.0781 3.16406H15.8906C16.1819 3.16406 16.418 2.92795 16.418 2.63672C16.418 2.34548 16.1819 2.10938 15.8906 2.10938H13.0781Z" fill="currentColor"></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="25" height="25" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </IconButton>
      </Box>

      <Box>
        <Typography>Hello</Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box component="main" sx={{ p: 3, mt: 4 }}>
          <DrawerHeader />
          <Typography sx={{ marginBottom: 2, fontSize: "40px", fontWeight: "bold" }}>
            Hi, Pragya Modi
          </Typography>
          <Typography sx={{ marginBottom: 2, fontSize: "18px" }}>
            Explore our platform to design, deploy, and manage AI-driven applications <br /> customized for your specific needs.
          </Typography>
        </Box>

        <Box component="main" sx={{ p: 2, mt: 4, display: "flex", gap: "20px" }}>
          <Box component="section" sx={{ border: '1px solid rgb(204, 211, 222)', width: "100%", borderRadius: "10px", display: "flex", gap: "20px", p: 3 }}>
            <Typography sx={{ backgroundColor: "#F7F0FF", borderRadius: "8px", display: "flex", alignItems: "center", pr: 2, pl: 2 }}><img src={tools} /></Typography>
            <Box>
              <Typography>Tools</Typography>
              <Typography sx={{ fontSize: "12px" }}>Chains of action, such as model calls and web scraping, that help streamline complex processes</Typography>
            </Box>
          </Box>

          <Box component="section" sx={{ border: '1px solid rgb(204, 211, 222)', width: "100%", borderRadius: "10px", display: "flex", gap: "20px", p: 3 }}>
            <Typography sx={{ backgroundColor: "#F7F0FF", borderRadius: "8px", display: "flex", alignItems: "center", pr: 2, pl: 2 }}><img src={agents} /></Typography>
            <Box>
              <Typography>Agents</Typography>
              <Typography sx={{ fontSize: "12px" }}>Conversational bots that can dynamically use tools to extend their <br /> capabilities</Typography>
            </Box>
          </Box>
        </Box>

        <Box component="main" sx={{ p: 3, display: "flex", gap: "20px" }}>
          <Box component="section" sx={{ border: '1px solid rgb(204, 211, 222)', width: "100%", borderRadius: "10px", display: "flex", gap: "20px", p: 3 }}>
            <Typography sx={{ backgroundColor: "#F7F0FF", borderRadius: "8px", display: "flex", alignItems: "center", pr: 2, pl: 2 }}><img src={models} /></Typography>
            <Box>
              <Typography>Models</Typography>
              <Typography sx={{ fontSize: "12px" }}>Open and closed-source models suitable for all use cases.</Typography>
            </Box>
          </Box>

          <Box component="section" sx={{ border: '1px solid rgb(204, 211, 222)', width: "100%", borderRadius: "10px", display: "flex", gap: "20px", p: 3 }}>
            <Typography sx={{ backgroundColor: "#F7F0FF", borderRadius: "8px", display: "flex", alignItems: "center", pr: 2, pl: 2 }}><img src={knowledgeBase} /></Typography>
            <Box>
              <Typography>Knowledge Bases</Typography>
              <Typography sx={{ fontSize: "12px" }}>Converts your enterprise data into a readily searchable database to power Retrieval-Augmented Generation (RAG) or enhance search experiences.</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar