import './components/stylesheet.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './Pages/Home';

function App() {
  return (

    <>
    <div className="app">

    <Navbar />
    <Home />
    <Footer />

    </div>

    </>
    
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
