import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import MenuOptions from './MenuOptions';

const Dash_AddIngradient = () => {

    const { onChange, register, handleSubmit, reset, formState: { errors } } = useForm();

    const [menus, setMenus] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedMenu, setSelectedMenu] = useState('');
    const [productsByMenu, setProductsByMenu] = useState([]);

    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/getAllMenus')
            .then(response => response.json())
            .then(res => {
                console.log(res)
                setMenus(res)
            })
    }, [])

    const onSubmit = (data, event) => {
        data.foodType = 'ig';

        // console.log(data);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:5000/addIngradient', requestOptions)
            .then(response => response.json())
            .then(res => {
                console.log(res)
                // acknowledged: true
                if (res.acknowledged) { setMsg('successfully Added ingradient') }
                else { setMsg('Warning : Adding ingradient Failed') }
            }
            );

        reset();

    };

    const handleChange = (e) => {
        console.log(e.target.value)
        setSelectedMenu(e.target.value);
    }

    //get products after selection of menu

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

    const Select = React.forwardRef(({ onBlur, name }, ref) => (
        <>

            <select
                name={name} ref={ref} onChange={(e) => handleChange(e)} onBlur={onBlur}
            // {...register("menuName", { required: true })}
            >
                <option value=''>Select Menu</option>
                {
                    menus.map(menu => (
                        <>
                            {/* <MenuOptions menu={menu} ></MenuOptions> */}
                            <option value={menu.menuName}>{menu.menuName}</option>

                        </>
                    ))
                }
            </select><br />

        </>
    ));


    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Ingradient Name' {...register("productName", { required: true })} /><br />
                {errors.userName && <span>This field is required</span>}<br />
                <input placeholder='price'  {...register("productPrice", { required: true })} /><br />
                {errors.userName && <span>This field is required</span>}<br />
                <input placeholder='Ingradient Description' {...register("productDescription")} /><br />

                <br />
                {/* menu selection  */}
                <Select label="menu" {...register("menuName")} />

                {/* products selction ? */}
                <select {...register("productId")}>
                    {
                        productsByMenu.map(product => (

                            <option value={product._id}>{product.productName}</option>

                        ))
                    }

                </select>
                <input type="submit" />
            </form>
            {msg}
        </div>
    );
};

export default Dash_AddIngradient;