
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';


function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            {/* Our App Data here */}
            <Routes>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/add-contact" component={CreateContact} /> */}
              {/* <Route exact path='*' component={NotFount} /> */}
            </Routes>
          </div>
        </div>
    </Router>
    
  );
}

export default App;
