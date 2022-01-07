import { Link, useNavigate } from "react-router-dom";
import './index.css';

const Navbar = () => {

    const navigate = useNavigate();
    return ( 
        <nav className="navbar">
            <h1 onClick={() => navigate('/')}>Contaz App</h1>

            <div className="nav-links">
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/add-contact">Add Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;