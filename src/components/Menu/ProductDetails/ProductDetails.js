import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductIngradients from './ProductIngradients/ProductIngradients';

const ProductDetails = (props) => {
    //from productCard

    const [productDetails,setProductDetails]=useState({});
    const [productIngradients,setProductIngradients]=useState([]);


const productObj=useParams();
const pdId=productObj.productId;

useEffect(() => {
    fetch(`http://localhost:5000/getProductDetails/${pdId}`)
        .then(response => response.json())
        .then(res => {
            console.log(res)
             setProductDetails(res)
        })
    
    fetch(`http://localhost:5000/getProductIngradients/${pdId}`)
        .then(response => response.json())
        .then(res => {
            console.log(res)
             setProductIngradients(res)
        })

}, [])

    return (
        <div>
            <div className='productDetails'>
            product Name:{productDetails.productName}<br/>
            productPrice: {productDetails.productPrice}<br/>
            menuName:  {productDetails.menuName}<br/>
            productDescription: {productDetails.productDescription}

            </div>
           

            <div className='productIngradients'>
                <ProductIngradients productIngradients={productIngradients} ></ProductIngradients>
            </div>
            
        </div>
    );
};

export default ProductDetails;