import HomosImage from '../static/images/products/homos.webp'
export default function ProductCard(props) {
    const { product, language, onAddProduct } = props

    return (
        <div className='product-card'>
            <div className='product-card-height'>
                <div className='product-card-image'>
                    <img src={HomosImage} alt={product.title[language]} />
                </div>
                <div className='product-card-title'>
                    {product.title[language]}
                </div>
                <div className='product-card-footer'>
                    <div className={`product-card-price ${product.price.sale_value ? 'product-card-price-sale' : ''}`}>
                        <div className='product-card-real-price'>{`${product.price.value}${product.price.currency}`}</div>
                        {product.price.sale_value ? <div className='product-card-sale-price'>
                            {`${product.price.sale_value}${product.price.currency}`}
                        </div> : null}
                    </div>
                    <div className='product-card-button'>
                        <button aria-label='add-to-cart' onClick={() => onAddProduct(product)}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}