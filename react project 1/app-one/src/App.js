//import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 3],
  ["Commute", 2],
  ["Sport", 3],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};
function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;
