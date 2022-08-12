import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {

  return (
    <header>
      <nav className="nav">
        <Link to="/">Home</Link>
        <a href="/about">About</a>
      </nav>
    </header>
  ) 
}

export default Header