import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

    const [msg,setMsg]=useState('');
    const [msg2,setMsg2]=useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    let navigate = useNavigate();

    const onSubmit = data => {
        const userData={
            name:data.userName,
            password:data.password
        }

        var stringifyObj=JSON.stringify(userData);

        fetch(`http://localhost:5000/login/${stringifyObj}`)
            .then(response => response.json())
            .then(result => {
                if(result.length>0)
                {
                    localStorage.setItem('userName',data.userName);
                    // console.log(str)
                    setMsg2('login Successfull. Go To ')
                    
                    setMsg( <a href="/">Home</a>)

                }
            });
    };
    

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder='user Name'  {...register("userName", { required: true })} /><br />
                {errors.userName && <span>This field is required</span>}<br />

                <input placeholder='Password' {...register("password", { required: true })} /><br />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}

                <input type="submit" />
                {msg2} {msg}
            </form>

        </div>
    );
};

export default Login;