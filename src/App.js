import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button' 
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      {/* Testing */}
      <h1>Hiiii</h1>
      <Button>Test Button</Button>
    </div>
  );
}

export default App;
