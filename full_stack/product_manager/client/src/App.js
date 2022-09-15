import './App.css';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import {AllProducts} from './views/AllProducts';
import {OneProduct} from './views/OneProduct';
import {NewProduct} from './views/NewProduct';
import {EditProduct} from './views/EditProduct'
import {NotFound} from './views/NotFound'




function App() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className='navbar-brand mb-0'>Product Manager</h1>

  <div className="navbar-nav justify-content-between">
    <Link
    to ='/api/products'
    className='btn btn-sm btn-outline-primary mx-1' 
    >
      All Products
    </Link>
    <Link
    to ='/api/products/new'
    className='btn btn-sm btn-outline-info mx-1' 
    >
      New Product
    </Link>
  </div>
</nav>
    {

    }
    <Routes>
      <Route path='/' element = {<Navigate to = '/api/products' replace />} />
      <Route path='/api/products' element = {< AllProducts />} />
      <Route path='/api/products/:id/edit' element = {< EditProduct/>} />
      <Route path='/api/products/:id' element = {<OneProduct />} />
      <Route path='/api/products/new' element = {<NewProduct />} />
      <Route path='*' element = {<NotFound />} />
    </Routes>

    </div>
  );
}

export default App;
