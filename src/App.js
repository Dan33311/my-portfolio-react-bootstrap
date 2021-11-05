// import Aos from 'aos'
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.min.css'
import 'animate.css'
import 'aos/dist/aos.css'
// import * as bootstrap from 'bootstrap'
import Navbar from './components/Navbar'
import About from './components/About';
import TechCards from './components/TechCards';
import Projects from './components/Projects'
import Contact from './components/Contact';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <TechCards/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
