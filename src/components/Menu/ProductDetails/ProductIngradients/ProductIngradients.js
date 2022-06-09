import React from 'react';
import AddToCartButton from '../../AddToCartButton/AddToCartButton';

const ProductIngradients = ({ productIngradients }) => {
    //from ProductDetails

    return (
        <div>

            <div>==========Ingradients List=========</div>
            {
                productIngradients.map(ingradient => (
                    <>
                        <div>{ingradient.productName}</div>
                        <div>{ingradient.productPrice}</div>
                        <div>{ingradient.productDescription}</div>
                        <AddToCartButton
                            pd={ingradient}

                        ></AddToCartButton>

                        <div>--------------------</div>
                    </>

                ))
            }

        </div>
    );
};

export default ProductIngradients;