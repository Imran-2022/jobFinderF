import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchJob } from '../features/jobs/jobsSlice';

const JobApplyCard = () => {
    
    const navigate=useNavigate()
    const { editing } = useSelector((state) => state.jobs);
    const { title, type, salary } = editing || {};

    useEffect(() => {
        if(!editing._id){
            navigate('/')
        }
    }, [])

    return (
        <div className='p-6 m-auto'>

            <form className="w-full max-w-lg pt-3" onSubmit={(e) => { e.preventDefault(); alert("your application has send ! Good luck") }}>
                <div className="flex flex-wrap mx-3 mb-2 items-center">
                    <label className="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Job Title
                    </label>
                    <input className=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter your name" value={title} readOnly />
                </div>
                <div className="flex flex-wrap mx-3 mb-2 items-center">
                    <label className="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Job Type
                    </label>
                    <input className=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter your name" value={type} readOnly />
                </div>
                <div className="flex flex-wrap mx-3 mb-2 items-center">
                    <label className="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Salary/m
                    </label>
                    <input className=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter your name" value={salary} readOnly />
                </div>
                <div className="flex flex-wrap mx-3 mb-2 items-center">
                    <label className="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Your Name
                    </label>
                    <input className=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter your name" required />
                </div>
                <div className="flex flex-wrap mx-3 mb-2 items-center">
                    <label className="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Your Email
                    </label>
                    <input className=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="email" placeholder="enter your email" required />
                </div>
                <div className="flex flex-wrap mx-3 mb-2 items-center">
                    <label className="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2 underline underline-offset-4" htmlFor="grid-first-name">
                        Your Github Url
                    </label>
                    <input className=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="github url" required />
                </div>
                <div className="flex flex-wrap mx-3 mb-2 items-center">
                    <label className="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2 underline underline-offset-4" htmlFor="grid-first-name">
                        Your Linkedin Url
                    </label>
                    <input className=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter linkedin url" required />
                </div>
                <div className="flex flex-wrap mx-3 mb-2 items-center">
                    <label className="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2 underline underline-offset-4" htmlFor="grid-first-name">
                        Your portfolio Url
                    </label>
                    <input className=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter portfolio url" required />
                </div>
                <div className="flex flex-wrap mx-3 mb-2 items-center">
                    <label className="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2  underline underline-offset-4" htmlFor="grid-first-name">
                        Resume Url
                    </label>
                    <input className=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter your resume url" required />
                </div>

                <div className="flex flex-wrap ml-3 mb-2 items-center justify-between">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            City
                        </label>
                        <input className=" w-full  text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none  " type="text" placeholder="Albuquerque" required />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            State
                        </label>
                        <input className=" w-full  text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none  " type="text" placeholder="State" required />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            Zip
                        </label>
                        <input className=" w-full  text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none  " type="text" placeholder="90210" required />
                    </div>
                </div>
                <div className='text-center'>
                    <button className='sm:w-2/4  bg-blue-500 hover:bg-blue-700 text-white text-sm py-2.5 my-4 px-3 rounded font-mono'>Submit Your Application</button>
                </div>
            </form>
        </div>
    );
};

export default JobApplyCard;