import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const [userVar,setUserVar]=useState('');
    const user = localStorage.getItem('userName');

    useEffect(()=>{
        setUserVar(user)

    })

    const logoutHandler =()=>{
        localStorage.setItem('userName','');
        setUserVar('');
    }
    return (
        <div className='headerClass'>
            <nav>
                <Link className='headerList'  to="/">Home</Link>
                <Link  className='headerList' to="/about">About</Link>
                <Link  className='headerList' to="/menu">Menu</Link>
                <Link  className='headerList' to="/contact">Contact Us</Link>
                {
                    userVar ?
                        <Link className='headerList' 
                            to="#"
                            onClick={logoutHandler} >Logout</Link>
                        :
                        <Link className='headerList'  to="/login">Login</Link>

                }

                {user ? <Link to="/dashboard">Dashboard</Link>: ''}
                

            </nav>

        </div>
    );
};

export default Header;