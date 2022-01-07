
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';


function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            {/* Our App Data here */}
            <Home />
          </div>
        </div>
    </Router>
    
  );
}

export default App;
