import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchJob } from '../features/jobs/jobsSlice';

const JobDetailsCard = () => {
    const dispatch=useDispatch();
    const {detailsId}=useParams()
    // editing
    const { editing } = useSelector((state) => state.jobs);
    
    const { title, type, salary, deadline, description, webUrl ,openings,_id}=editing||{};
    
    useEffect(() => {
        dispatch(fetchJob({editId:detailsId}))
    }, [detailsId])

    
    return (
        <div className='p-6'>
            <p className='underline underline-offset-4 font-mono'>Job Details Page </p>
            <div className='p-3 text-justify'>
                <p><span className='font-bold underline underline-offset-2 '>Job Title </span>: {title}</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Job Type</span> : {type}</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Salary</span> : {salary}</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Deadline</span> : {deadline}</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Openings</span> : {openings||0}</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>web-Url</span> : {webUrl}</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Job Description</span> : {description}</p>
                <Link to={`/jobs/apply/:${_id}`}><button className='mt-4 rounded bg-cyan-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal underline underline-offset-2 text-center'>Apply Here</button></Link>
            </div>
            
        </div>
    );
};

export default JobDetailsCard;

