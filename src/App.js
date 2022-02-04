import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes >
        {/* See ReadMe for guide */}
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
