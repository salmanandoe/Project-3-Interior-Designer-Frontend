import './stylesheet.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import DetailPage from './Pages/DetailPage';


function App() {
  return (

    <div className='app'>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery/detail" element={<DetailPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      <Footer />
    </div>

  );
}

export default App;
