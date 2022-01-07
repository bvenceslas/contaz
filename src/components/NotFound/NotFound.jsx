import { useNavigate } from "react-router-dom";
import './index.css';
import PageNotFound from '../../assets/page-not-found.png';

const NotFound = () => {

    const navigate = useNavigate();
    const handleRedirect = () => {
        // redirect to home page
        navigate('/');
    }

    return ( 
        <div className="not-found">
            <img 
                src={PageNotFound} 
                alt="page not found"
                onClick={handleRedirect} 
            />
        </div>
     );
}
 
export default NotFound;