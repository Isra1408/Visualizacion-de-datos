import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Toolbar,
  CssBaseline,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

const DrawerComponent = () => {
  const drawerWidth = 240;
  const location = useLocation();
  const navigate = useNavigate();

  const itemList = [
    {
      text: "Highcharts",
      onclick: () => navigate("/highcharts"),
    },
    {
      text: "Tableau",
      onclick: () => navigate("/tableau"),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <img src="/img/fisc.png" alt="" className="md:h-12 mr-2 h-12" />
            <Typography variant="h6" noWrap component="div">
              Proyecto de Sistemas de Infomación
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }} p={2}>
          <Typography variant="h6" component="div">
            Herramienta de visualizacion de datos
          </Typography>
          <Divider />
          <List>
            {itemList.map((item, index) => (
              <ListItem key={item.text} disablePadding onClick={item.onclick}>
                <ListItemButton>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
