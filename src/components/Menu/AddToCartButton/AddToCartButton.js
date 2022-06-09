import React from 'react';

const AddToCartButton = ({pd}) => {

    const addToCartHandler=(pdId)=>{
        console.log('product id-: ',pdId)

        const productData={
            id:pdId,
        }

        // console.log(menuData)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        };
        fetch('http://localhost:5000/addProductToCart', requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));

    }
    return (
        <>
            <button onClick={()=>addToCartHandler(pd._id)}>Add to cart</button>
            
        </>
    );
};

export default AddToCartButton;