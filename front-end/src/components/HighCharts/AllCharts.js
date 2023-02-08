import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import Treemap from "./Treemap";
import { Box, Toolbar } from "@mui/material";

const AllCharts = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      <div className="flex w-full flex-wrap gap-y-10 gap-x-2 justify-between">
        <BarChart />
        <Treemap />
        <LineChart />
        <PieChart />
      </div>
    </Box>
  );
};

export default AllCharts;
