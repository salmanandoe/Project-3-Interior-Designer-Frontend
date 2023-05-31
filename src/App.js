import './stylesheet.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import DetailPage from './Pages/DetailPage';
import Header from './components/Header';


function App() {
  return (

    <div className='container'>
      <Header />
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
