import { useParams, useNavigate } from "react-router-dom";
import{useState, useEffect} from "react";
import { getProductById, updateProductById } from "../services/internalApiService";



export const EditProduct = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState(null);

    useEffect(() =>{
        getProductById(id)
        .then((data) => {
            const {title, price, description} = data;
            setTitle(title);
            setDescription(description);
            setPrice(price);

        })
        .catch((error) => {
            console.log(error);
        })
    },[id]);

    const HandleUpdateProductSubmit = (event) =>{
        event.preventDefault();
        const updatedProduct = {
            title,
            price,
            description
        };
        updateProductById(id,updatedProduct)
            .then((updatedProduct) =>{
            console.log("updated product:",updatedProduct);
            navigate(`/products/${id}`);
            })
            .catch((error) =>{ 
                console.log(error);
            });
        
        
        
    };



    return <div className="w-50 p-4 rounded mx-auto shadow">
    <form onSubmit={(e) => HandleUpdateProductSubmit(e)}>
        <div className="form-group">
            <label className="h-7">Title</label><br />
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" value={title} />
        </div>
        <div className="form-group">
            <label>Price</label><br />
            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} className="form-control" value = {price} />
        </div>
        <div className="form-group">
            <label>Description</label><br />
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" value={description} />
        </div>

        <button className='btn btn-sm btn-outline-danger'>Edit</button>

    </form>

</div>;



}

export default EditProduct;