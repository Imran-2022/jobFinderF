import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = () => {
    return (
        <div className='p-4 '>
            <div className='flex justify-between items-center'>
                <Link to={`/jobs/details/${1}`}>
                    <div>
                        <p>Full Stack Developer</p>
                        <div className='flex gap-4 items-center'>
                            {/* <i className={`fa-solid fa-stop  text-lg mr-1.5 !text-${type == 'Remote' ? '[#56E5C4]' : (type == 'Internship' ? '[#FF5757]' : '[#FF8A00]')}`}></i> */}
                            <p><i className={`fa-solid fa-stop  text-lg !text-[#56E5C4]`}></i> Full Time</p>
                            <p>BDT 18000</p>
                            <p><i className="fa-regular fa-calendar text-slate-400 text-lg"></i> Closing on 2022-12-31</p>
                        </div>
                    </div>
                </Link>
                <div className="flex gap-5">
                    <Link to={`/jobs/edit/${1}`}>
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded">
                            <i className="fa-solid fa-pen text-gray-300"></i> Edit
                        </button>
                    </Link>
                    <button type="button" className="bg-red-500 hover:bg-red-700 text-white text-sm py-1 px-3 rounded">
                        <i className="fa-solid fa-trash text-gray-300"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
