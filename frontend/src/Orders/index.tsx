import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProdutcsList';
import StepsHeader from './SteapesHeader';
import './styles.css';
import { Product } from './types';

const Orders = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='orders-container'>
            <StepsHeader />
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;