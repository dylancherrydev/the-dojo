import './Navbar.css'
import Temple from '../assets/temple.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li className='logo'>
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>

        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Login</Link></li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  )
}