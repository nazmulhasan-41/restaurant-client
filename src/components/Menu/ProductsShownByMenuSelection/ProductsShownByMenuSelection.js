import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsShownByMenuSelection = ({selectedMenu}) => {

    const [productsByMenu, setProductsByMenu] = useState([]);

        //get products after selection of menu

        useEffect(() => {
            //get all products 
            console.log('calling',selectedMenu);

            fetch(`http://localhost:5000/getProductsByMenu/${selectedMenu}`)
                .then(response => response.json())
                .then(res => {

                    setProductsByMenu(res)
                }
            );
    
        }, [])

        useEffect(() => {
            //get products filtering by menu

    
            fetch(`http://localhost:5000/getProductsByMenu/${selectedMenu}`)
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    setProductsByMenu(res)
                }
            );
    
        }, [selectedMenu])

        

    return (
        <div>
            ProductsShownByMenuSelection

            {
                productsByMenu.map(product=><ProductCard product={product} ></ProductCard>)

            }


            
        </div>
    );
};

export default ProductsShownByMenuSelection;