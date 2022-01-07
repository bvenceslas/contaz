import { Link } from "react-router-dom";
import './index.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Contaz App</h1>

            <div className="nav-links">
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/add-contact">Add Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;