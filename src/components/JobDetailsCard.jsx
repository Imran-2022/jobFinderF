import React from 'react';
import { Link } from 'react-router-dom';

const JobDetailsCard = () => {
    return (
        <div className='p-6'>
            <p className='underline underline-offset-4 font-mono'>Job Details Page </p>
            <div className='p-3 text-justify'>
                <p><span className='font-bold underline underline-offset-2 '>Job Title </span>: Software Engineer</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Job Type</span> : Internship</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Salary</span> : 30,300,30</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Deadline</span> : 3-12-2222</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Openings</span> : 12</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>web-Url</span> : www.abc.com</p>
                <p><span className='font-bold underline underline-offset-2 font-mono'>Job Description</span> : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore perspiciatis ab, <br></br>eligendi eum omnis qui hic nisi quas corporis architecto doloremque nulla perferendis dolores id enim assumenda ipsam rem iusto dolorum mollitia ducimus commodi vel maiores harum? Quae blanditiis quo, labore tempora voluptates voluptatem,<br></br> sit velit odit, soluta impedit ab inventore! Quod magni ducimus quo? Adipisci, repellat? Mollitia nesciunt sint ut atque perspiciatis perferendis accusamus officiis quae officia, placeat beatae recusandae sequi illo delectus, <br></br> quasi est voluptatum qui maiores nisi accusantium corrupti nemo? Maxime laboriosam iste molestias sit aperiam adipisci aut dignissimos, magnam exercitationem mollitia quis amet doloribus consequuntur ipsa!</p>
                <Link to={`/jobs/apply/:${1}`}><button className='mt-4 rounded bg-cyan-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal underline underline-offset-2 text-center'>Apply Here</button></Link>
            </div>
            
        </div>
    );
};

export default JobDetailsCard;

