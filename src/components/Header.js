import { Link } from "react-router-dom";


function Header() {
  return (
      <nav className="navigation">

        <img className="logo" src="/images/ntrdsn - black_gray.png" />

        <div className="navigation-menu">
          <ul>
            <li>
              <Link className="link-style" to='/'>HOME</Link>
            </li>
            <li>
              <Link className="link-style" to='/gallery'>GALLERY</Link>
            </li>
            <li>
              <Link className="link-style" to='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Header;