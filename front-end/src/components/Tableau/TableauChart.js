import React, { useRef, useEffect } from "react";
import { Box, Toolbar } from "@mui/material";
const { tableau } = window;

const TableauChart = () => {
  let viz;
  const url =
    "https://public.tableau.com/views/Sistemas_16683995376080/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";
  const ref = useRef("null");

  useEffect(() => {
    initViz();
  }, []);

  const options = {
    device: "desktop",
  };

  function initViz() {
    if (viz) {
      viz.dispose();
    }
    viz = new tableau.Viz(ref.current, url, options);
  }

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      <div ref={ref} className="w-full h-screen "></div>
    </Box>
  );
};

export default TableauChart;
