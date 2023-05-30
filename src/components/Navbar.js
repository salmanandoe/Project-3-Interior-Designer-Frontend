import { Link } from "react-router-dom";




function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"> 
        <h3> NTRDSN </h3>
      </Link>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/gallery">
        <h3>Gallery</h3>
      </Link>
      <Link to="/contact">
        <h3>Contact</h3>
      </Link>
    </div>
  )
}

export default Navbar;