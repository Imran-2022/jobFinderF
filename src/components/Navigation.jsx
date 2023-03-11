import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center text-base justify-between w-10/12 m-auto py-6'>
                <Link to='/jobs'>
                    <div className='flex gap-1 items-center'>
                        <img className='w-5' src="/icon.png" alt="" />
                        <p className='underline underline-offset-2'>Job Finder</p>
                    </div>
                </Link>
                <div className='flex gap-6 items-center'>
                    <Link to='/jobs'>Jobs</Link>
                    <Link to='/jobs/add'>Add New Job</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;