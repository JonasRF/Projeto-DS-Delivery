import ProductCard from "./ProductCard";

const ProductsList = () => {
    return (
        <div className='orders-list-container'>
            <div className="orders-list-content">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductsList;