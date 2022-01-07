import './index.css';
import PageNotFound from '../../assets/page-not-found.png';

const NotFound = () => {

    const handleRedirect = () => {
        // redirect to home page

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