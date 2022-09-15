import {deleteProductById, getAllProducts} from '../services/internalApiService'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        getAllProducts()
        .then((data) => {
            console.log(data);
            setProducts(data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

    const HandleDeleteCLick = (idToDelete) => {
        deleteProductById(idToDelete)
        .then((deletedProduct) =>{
            const filteredProducts = products.filter((product) => {
                return product._id !== idToDelete;
            });
            console.log('deleted product:', deletedProduct);
            setProducts(filteredProducts);
        })
        .catch((error) =>{console.log(error)});
    }

    return (
        <div className='w-5- mx-auto text-center'>
        {products.map((product) =>{
            const {_id, title, price, description} = product;
            return <div key={_id} className="shadow mb-4 rounded border p-4">
                <Link to={`/api/products/${_id}`} ><h4>Title: {title}</h4></Link>
                
                <p>Price: {price}</p>
                <p>Description: {description}</p>
                <div>
                    <button className='btn btn-sm btn-outline-danger' onClick={(e)=>HandleDeleteCLick(_id)}>Delete</button>
                    <Link to={`/api/products/${_id}/edit`} className='btn btn-sm btn-outline-info' >
                    Edit
                    </Link>
                </div>
            </div>
        })}

    </div>
    );
        
}



export default AllProducts;