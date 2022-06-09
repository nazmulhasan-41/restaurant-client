import React from 'react';
import { useForm } from 'react-hook-form';

const Dash_AddMenu = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data,event) => {
        console.log(data)
        const menuData={
            menuName:data.menuName,
        }

        // console.log(menuData)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(menuData)
        };
        fetch('http://localhost:5000/addMenu', requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));

            event.target.reset();
    };

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder='Menu Name'  {...register("menuName", { required: true })} /><br />
                {errors.userName && <span>This field is required</span>}<br />

                <input type="submit" />
               
            </form>


        </div>
    );
};

export default Dash_AddMenu;