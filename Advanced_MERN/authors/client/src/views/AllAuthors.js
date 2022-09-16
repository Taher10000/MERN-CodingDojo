import {deleteAuthorById, getAllAuthors} from '../services/internalApiService'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    useEffect(() =>{
        getAllAuthors()
        .then((data) => {
            console.log(data);
            setAuthors(data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

    const HandleDeleteCLick = (idToDelete) => {
        deleteAuthorById(idToDelete)
        .then((deletedAuthor) =>{
            const filteredAuthors = authors.filter((author) => {
                return author._id !== idToDelete;
            });
            console.log('deleted author:', deletedAuthor);
            setAuthors(filteredAuthors);
        })
        .catch((error) =>{console.log(error)});
    }

    return (
    
        <div className='w-5- mx-auto text-center'>
            {
                authors.sort((a,b) =>{
                    if(a.name < b.name) {return -1;}
                    if(a.name > b.name) {return 1;}
                    return 0;
                })
        .map((author) =>{
            const {_id, name} = author;
            return <div key={_id} className="shadow mb-4 rounded border p-4">
                <Link to={`/authors/${_id}`} ><h4>Name: {name}</h4></Link>
                
                <div>
                    <button className='btn btn-sm btn-outline-danger' onClick={(e)=>HandleDeleteCLick(_id)}>Delete</button>
                    <Link to={`/authors/${_id}/edit`} className='btn btn-sm btn-outline-info' >
                    Edit
                    </Link>
                </div>
            </div>
        })}

    </div>
    );
        
}



export default AllAuthors;