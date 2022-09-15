import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/internalApiService";
export const NewProduct = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState(null);

    const onSubmitHandler = e => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description
        };
        createProduct(newProduct)
            .then((data) =>{
                console.log('new products data:', data);
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
                <label className="h-7">Title</label><br />
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" />
                {
                    errors?.title && <span style={{color:'red'}}>{errors?.title?.message}</span>
                }
            </div>
            <div className="form-group">
                <label>Price</label><br />
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} className="form-control"/>
                {
                    errors?.price && <span style={{color:'red'}}>{errors?.price?.message}</span>
                }
            </div>
            <div className="form-group">
                <label>Description</label><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} className="form-control"/>
                {
                    errors?.description && <span style={{color:'red'}}>{errors?.description?.message}</span>
                }
            </div>
            <button className='btn btn-sm btn-outline-danger'>Create</button>

        </form>

    </div>;
}

export default NewProduct;