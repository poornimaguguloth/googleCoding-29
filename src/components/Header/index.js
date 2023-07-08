// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <ul className="nav-menu">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
