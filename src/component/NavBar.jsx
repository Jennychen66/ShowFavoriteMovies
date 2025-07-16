import {Link} from 'react-router-dom';
import '../css/NavBar.css'; // Assuming you have a CSS file for styling
function NavBar() {
  return (
    <nav className="navbar">
      <h1>Movie App</h1>
      <ul>
        <Link to="/" className= "nav-link"> Home </Link>
        <Link to="/favorite">Favorite</Link>
      </ul>
    </nav>
  )
}
export default NavBar;