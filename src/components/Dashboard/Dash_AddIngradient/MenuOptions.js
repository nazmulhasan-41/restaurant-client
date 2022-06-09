import React from 'react';

const MenuOptions = ({selectHandler,menu}) => {
    return (
       <>
            {/* <option onClick={selectHandler} value={menu.menuName}>{menu.menuName}</option> */}
            <option value={menu.menuName}>{menu.menuName}</option>


       </>
    );
};

export default MenuOptions;