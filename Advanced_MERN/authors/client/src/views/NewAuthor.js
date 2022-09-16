import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthor } from "../services/internalApiService";
export const NewAuthor = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);

    const onSubmitHandler = e => {
        e.preventDefault();
        const newAuthor = {
            name,
        };
        createAuthor(newAuthor)
            .then((data) =>{
                console.log('new authors data:', data);
                navigate('/')
            })
            .catch((error)=>{ 
                console.log(error)
                setErrors(error?.response?.data?.errors);
            }) 
    }

    return <div className="w-50 p-4 rounded mx-auto shadow">
        <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label className="h-7">Name</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" />
                {
                    errors?.name && <span style={{color:'red'}}>{errors?.name?.message}</span>
                }
            </div>
            <button className='btn btn-sm btn-outline-danger'>Create</button>

        </form>

    </div>;
}

export default NewAuthor;