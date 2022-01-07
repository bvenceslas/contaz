
import { Routes, Route } from 'react-router-dom';
import CreateContact from './components/CreateContact/CreateContact.jsx';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
        <div className="App">
          <Navbar />
          <div className="content">
            {/* Our App Data here */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/add-contact" element={<CreateContact />} />
              {/* <Route exact path='*' element={<NotFount />} /> */}
            </Routes>
          </div>
        </div>    
  );
}

export default App;
