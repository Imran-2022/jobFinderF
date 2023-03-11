import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center text-base justify-between w-10/12 m-auto py-6'>
                <Link to='/'>
                    <div className='flex gap-1 items-center'>
                        <img className='w-5' src="/icon.png" alt="" />
                        <p className='underline underline-offset-2'>Job Finder</p>
                    </div>
                </Link>
                <div className='flex gap-6 items-center'>
                    <NavLink to='/'>Jobs</NavLink>
                    <NavLink to='/jobs/add'>Add New Job</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;