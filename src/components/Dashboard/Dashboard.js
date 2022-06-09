import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';


const Dashboard = () => {
    return (
        <div >


            <nav className='dashboardNavBar'>
            <Link className='headerList' to="addMenu">Add Menu</Link>
                
                <Link className='headerList' to="addProduct">Add Product</Link>
                <Link className='headerList' to="addIngradient">Add Ingradient</Link>
                


            </nav>
         

            <Outlet />




        </div>
    );
};

export default Dashboard;