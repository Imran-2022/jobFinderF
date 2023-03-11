import React from 'react';

const JobApplyCard = () => {
    return (
        <div className='p-6'>
            <p className=' font-mono'>Apply for the position - <span className='underline underline-offset-4'>{'Software Enginner'}</span></p>
            <div className='p-3 text-justify'>
                <p><span className='font-bold underline underline-offset-2 '>Job Title </span>: Software Engineer</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Job Type</span> : Internship</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Salary</span> : 30,300,30</p>
                <div className='text-center'>
                <button className='mt-4 rounded bg-cyan-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal underline underline-offset-2 text-center' onClick={()=>alert("your application has send ! Good luck")}>Submit Your Application</button>
                </div>
            </div>
            
        </div>
    );
};

export default JobApplyCard;