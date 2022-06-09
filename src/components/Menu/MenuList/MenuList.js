import React, { useEffect, useState } from 'react';

const MenuList = ({setSelectedMenu}) => {

    //from menu.js

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getAllMenus')
            .then(response => response.json())
            .then(res => {
                console.log(res)
                setMenus(res)
            })
    }, [])
    const selectMenuHandler=(menuName)=>{
        setSelectedMenu(menuName)
        // console.log(menuName, 'clicked')
    }

    return (
        <div>
            menu lists
            {
                menus.map(menu=><button onClick={()=>selectMenuHandler(menu.menuName)}>{menu.menuName}</button>)
            }
        </div>
    );
};

export default MenuList;