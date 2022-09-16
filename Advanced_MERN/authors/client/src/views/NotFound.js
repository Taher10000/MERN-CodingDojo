import {Link} from 'react-router-dom';

export const NotFound = (props) => {
    return (
        <div>
        <p>Page not found</p>
        <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
        <Link
    to ='/authors/new'
    className='btn btn-sm btn-outline-info mx-1' 
    >
    Add Author
    </Link>
        </div>
    );
    
}

export default NotFound;