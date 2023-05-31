import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src="/images/ntrdsn - black_gray.png" />
            <Link to='/'>HOME</Link> 
            <Link to='/gallery'>GALLERY</Link> 
            <Link to='/contact'>CONTACT</Link> 
      </div>
    </>
  )
}

export default Header;