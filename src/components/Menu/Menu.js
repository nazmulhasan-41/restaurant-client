import React, { useState } from 'react';
import MenuList from './MenuList/MenuList';
import ProductsShownByMenuSelection from './ProductsShownByMenuSelection/ProductsShownByMenuSelection';

const Menu = () => {

    const [selectedMenu,setSelectedMenu]=useState('all');

    return (
        <div>
            <MenuList setSelectedMenu={setSelectedMenu} ></MenuList>
            <ProductsShownByMenuSelection selectedMenu={selectedMenu}></ProductsShownByMenuSelection>
            
        </div>
    );
};

export default Menu;