import './components/stylesheet.css';
import { Routes, Route } from "react-router-dom";
import Body from './components/Body';
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

    
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       <img src="https://media.istockphoto.com/id/1308282338/photo/modern-bathroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=r6qXSudX7P7YOzYsuHsQ_6pjAekJOF4XnEpdrtfqmsg=" />
    //     </p>
  
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Welcome
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
