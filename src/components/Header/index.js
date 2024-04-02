import {Link} from 'react-router-dom'
import Home from '../Home'

import './index.css'

const Header = () => {
  return (
    <div>
      <div className="nav-bar d-flex">
        <div className="d-flex next-wave-logo-and-text">
          <img
            className="nxt-logo"
            alt="wave"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          />
          <h1>Wave</h1>
        </div>
        <ul className="d-flex ul-header">
          <li className="each-header-li">
            <Link className="component" to="/">
              Home
            </Link>
          </li>
          <li className="each-header-li">
            <Link className="component" to="/about">
              About
            </Link>
          </li>
          <li className="each-header-li">
            <Link className="component" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
