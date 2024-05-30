import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <div >
            <div className='h-20'>
                <Navbar />
            </div>
            <div className='min-h-[calc(100vh-80px)]'>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;