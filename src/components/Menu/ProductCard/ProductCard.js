import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const ProductCard = (props) => {

    //from ProductsShownByMenuSelection

    const pd =props.product;

    return (
        <div>
            <div><Link to={`/productDetails/${pd._id}`} > {pd.productName}</Link>

               ---
            {pd.productPrice}--- 
            <AddToCartButton 
              pd={pd}
                ></AddToCartButton>

            </div>

        </div>
    );
};

export default ProductCard;