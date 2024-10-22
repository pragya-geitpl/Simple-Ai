import { Box, styled, Typography } from '@mui/material'
import React from 'react'

import tools from '../../assets/sidebarMenuIcons/tools.svg'
import agents from '../../assets/sidebarMenuIcons/agents.svg'
import models from '../../assets/sidebarMenuIcons/models.svg'
import knowledgeBase from '../../assets/sidebarMenuIcons/knowledgeBase.svg'

function Home() {

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));


  return (
    <div>
      <Box sx={{ ml: 8 }}>
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
    </div>
  )
}

export default Home
