import { useParams, useNavigate } from "react-router-dom";
import { getAuthorById, deleteAuthorById } from "../services/internalApiService";
import { useEffect, useState } from "react";

export const OneAuthor = (props) => {
    const [author, setAuthor] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() =>{
        getAuthorById(id)
        .then((data) => {
            console.log(data);
            setAuthor(data);
        })
        .catch((error) => {
            console.log(error);
            // navigate('/notARoute')
        })
    },[id])
    if(author === null){
        return null;
    }
    const HandleDeleteCLick = () => {
        deleteAuthorById(id)
        .then((deletedAuthor) =>{
            navigate('/authors')
        })
        .catch((error) =>{console.log(error)});
    }

    const { name} = author;
    

    return (
        <div className="shadow mx-auto shadow rounded border p-4">
        <h4>Name: {name}</h4>

        <button className='btn btn-sm btn-outline-danger' onClick={(e)=>HandleDeleteCLick()}>Delete</button>
    </div>
);
};

export default OneAuthor;