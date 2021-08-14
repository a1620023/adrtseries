import React, { useState, useEffect } from 'react'
import { ProductService } from '../../services/ProductService';

export const ProductDetail = () => {
    const [products, setProducts] = useState([]);
    const [camara, setCamaras] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);

    useEffect(() => {
        productService.getProductsWithOrdersSmall().then(data => (data));
    }, []);

    return (
        <div>
            Product Detail
            <div>
                Aqui
            </div>
        </div>
    )
}
