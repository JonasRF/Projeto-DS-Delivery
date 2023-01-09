import ProductsList from './ProdutcsList';
import StepsHeader from './SteapesHeader';
import './styles.css';

const Orders = () => {
    return (
        <div className='orders-container'>
            <StepsHeader />
            <ProductsList />
        </div>
    )
}

export default Orders;