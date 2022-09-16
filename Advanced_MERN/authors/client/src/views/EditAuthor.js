import { useParams, useNavigate } from "react-router-dom";
import{useState, useEffect} from "react";
import { getAuthorById, updateAuthorById } from "../services/internalApiService";



export const EditAuthor = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);

    useEffect(() =>{
        getAuthorById(id)
        .then((data) => {
            const {name} = data;
            setName(name);

        })
        .catch((error) => {
            console.log(error);
            // navigate('/NotARoute')
        })
    },[id]);

    const HandleUpdateAuthorSubmit = (event) =>{
        event.preventDefault();
        const updatedAuthor = {
            name,
        };
        updateAuthorById(id,updatedAuthor)
            .then((updatedAuthor) =>{
            console.log("updated author:",updatedAuthor);
            navigate(`/authors/${id}`);
            })
            .catch((error) =>{ 
                console.log(error);
                setErrors(error?.response?.data?.errors);
            });
        
        
        
    };



    return <div className="w-50 p-4 rounded mx-auto shadow">
    <form onSubmit={(e) => HandleUpdateAuthorSubmit(e)}>
        <div className="form-group">
            <label className="h-7">Name:</label><br />
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" />
            {
                    errors?.name && <span style={{color:'red'}}>{errors?.name?.message}</span>
                }
        </div>

        <button className='btn btn-sm btn-outline-danger'>Edit</button>

    </form>

</div>;



}

export default EditAuthor;