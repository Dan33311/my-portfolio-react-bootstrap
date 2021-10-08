// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.min.css'
import Navbar from './components/Navbar'
import * as bootstrap from 'bootstrap'
import About from './components/About';
import TechCards from './components/TechCards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <TechCards/>
    </div>
  );
}

export default App;
