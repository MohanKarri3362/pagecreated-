
import './App.css';
import Header from './components/header';
import LineChart from './components/linechart';
import PieChart from './components/piechart';
import Sidebar from './components/sidebar';


function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <div style={{display:"flex",justifyContent:'center'}}>
        <div style={{display:"flex",justifyContent:"center",height:"80vh"}}>
        <LineChart/>
        </div>
        <div style={{display:"flex",justifyContent:"center",height:"80vh"}}>
        <PieChart />
        </div>
      </div>
    </div>
  );
}

export default App;
