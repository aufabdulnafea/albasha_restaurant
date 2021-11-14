import React, { useState, useEffect } from 'react'
import products from '../db/products'
import ProductCard from './ProductCard'

export default function ProductsContainer(props) {
    const { language, onAddProduct, selectedCategory } = props
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        if (selectedCategory) setFilteredProducts(products.filter(el => el.category === selectedCategory))
        else setFilteredProducts(products)
    }, [selectedCategory])

    return (
        <div className='products-container'>
            <div className='container'>
                {filteredProducts.map(product => (
                    <ProductCard
                        onAddProduct={onAddProduct}
                        language={language}
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}