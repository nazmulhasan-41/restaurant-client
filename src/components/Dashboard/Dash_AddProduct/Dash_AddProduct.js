import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Dash_AddProduct.css';

const Dash_AddProduct = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getAllMenus')
            .then(response => response.json())
            .then(res => {
                console.log(res)
                setMenus(res)
            })

    }, [])

    const onSubmit = (data, event) => {
        // console.log(data);
        data.foodType='pd';
        // console.log(data);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:5000/addProduct', requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
        
        reset();

    };


    return (
        <div className='Dash_AddProduct'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' {...register("productName", { required: true })} /><br />
                {errors.userName && <span>This field is required</span>}<br />
                <input placeholder='Product price'  {...register("productPrice", { required: true })} /><br />
                {errors.userName && <span>This field is required</span>}<br />
                <input placeholder='Product Description' {...register("productDescription")} /><br />

                <br />
                <select {...register("menuName", { required: true })}>
                    <option value=''>Select Menu</option>
                    {
                        menus.map(menu => (
                            <option value={menu.menuName}>{menu.menuName}</option>
                        ))
                    }

                </select><br /><br />

                <input type="submit" />

            </form>

        </div>
    );
};

export default Dash_AddProduct;