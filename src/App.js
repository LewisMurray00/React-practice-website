import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes >
        {/* See ReadMe for guide */}
        <Route path="/" exact />
      </Routes>
    </Router>
    </>
  );
}

export default App;
