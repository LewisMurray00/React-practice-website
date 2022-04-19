import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import OurWork from './Components/Pages/OurWork';
import Reviews from './Components/Pages/Reviews';
import ContactUs from './Components/Pages/ContactUs';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes >
        {/* See ReadMe for guide */}
        <Route path="/" exact element={<Home />} />
        <Route path="our-work" exact element={<OurWork />} />
        <Route path="reviews" exact element={<Reviews />} />
        <Route path="contact-us" exact element={<ContactUs />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
