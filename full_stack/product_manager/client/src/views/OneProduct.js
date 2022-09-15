import { useParams, useNavigate } from "react-router-dom";
import { getProductById, deleteProductById } from "../services/internalApiService";
import { useEffect, useState } from "react";

export const OneProduct = (props) => {
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() =>{
        getProductById(id)
        .then((data) => {
            console.log(data);
            setProduct(data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[id])
    if(product === null){
        return null;
    }
    const HandleDeleteCLick = () => {
        deleteProductById(id)
        .then((deletedProduct) =>{
            navigate('/products')
        })
        .catch((error) =>{console.log(error)});
    }

    const {_id, title, price, description} = product;
    

    return (
        <div className="shadow mx-auto shadow rounded border p-4">
        <Link to={`/products/${_id}`} ><h4>Title: {title}</h4></Link>
        
        <p>Price: {price}</p>
        <p>Description: {description}</p>
        <button className='btn btn-sm btn-outline-danger' onClick={(e)=>HandleDeleteCLick()}>Delete</button>
    </div>
);
};

export default OneProduct;