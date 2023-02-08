import DrawerComponent from "./components/Drawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCharts from "./components/HighCharts/AllCharts";
import TableauChart from "./components/Tableau/TableauChart";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <DrawerComponent />
        <Routes>
          <Route path="/highcharts" element={<AllCharts />}></Route>
          <Route path="/tableau" element={<TableauChart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
