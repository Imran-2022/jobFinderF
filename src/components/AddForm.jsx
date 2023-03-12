import React, { useState } from 'react';
import { useNavigate, } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const AddForm = () => {
    const navigate = useNavigate()
    // createJob
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [salary, setSalary] = useState("");
    const [openings, setOpenings] = useState(1);
    const [deadline, setDeadLine] = useState("");
    const [description, setDescription] = useState("");
    const [webUrl, setWebUrl] = useState("");


    // const dispatch = useDispatch();

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(title, type, salary, openings, deadline, description);
        // dispatch(
        //     createJob({title,type,salary,deadline})
        // );
        // navigate('/')
    };

    return (
        <form className="" onSubmit={handleCreate}>

            {/* title of job */}

            <div className="flex items-center gap-2 py-2">
                <label htmlFor="jobtitle" className="w-1/4">Job Title : </label>
                <select className='border py-0.5 px-2 w-3/4 focus:outline-none ' id="jobtitle" name="jobtitle" required value={title}
                    onChange={(e) => setTitle(e.target.value)}>
                    <option value="" hidden defaultValue>Select Job</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="MERN Stack Developer">MERN Stack Developer</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="QA Engineer">QA Engineer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Social Media Manager">Social Media Manager</option>
                    <option value="Senior Executive">Senior Executive</option>
                    <option value="Junior Executive">Junior Executive</option>
                    <option value="Android App Developer">Android App Developer</option>
                    <option value="IOS App Developer">IOS App Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                </select>
            </div>

            {/* job type */}

            <div className="flex items-center gap-2 py-2">
                <label htmlFor="JobType" className='w-1/4'>Job Type : </label>
                <select className='border py-0.5 px-2 w-3/4 focus:outline-none ' id="JobType" name="JobType" required value={type}
                    onChange={(e) => setType(e.target.value)}>
                    <option value="" hidden defaultValue>Select Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>

            {/* job salary */}
            <div className="flex items-center gap-2 py-2">
                <label htmlFor="JobSalary" className='w-1/4'>Salary : </label>
                <div className="border px-2 w-3/4">
                    <span className="mr-4 w-1/4">BDT</span>
                    <input type="number" className="py-0.5 w-3/4 focus:outline-none" name="JobSalary" id="JobSalary" required
                        placeholder="20,00,000" value={salary}
                        onChange={(e) => setSalary(e.target.value)} />
                </div>
            </div>
            {/* deadline */}

            <div className="flex items-center gap-2 py-2">
                <label htmlFor="JobDeadline" className='w-1/4'>Deadline : </label>
                <input type="date" className="w-3/4 py-0.5 focus:outline-none border px-2" name="JobDeadline" id="JobDeadline" required value={deadline}
                    onChange={(e) => setDeadLine(e.target.value)} />
            </div>

            {/* number of opeanings !  */}

            <div className="flex items-center gap-2 py-2">
                <label htmlFor="openings" className='w-1/4'>Openings : </label>
                <div className="border px-2 w-3/4">
                    <input type="number" className="w-3/4 py-0.5 focus:outline-none" name="openings" id="openings" required
                        placeholder="no of openings" value={openings}
                        onChange={(e) => setOpenings(e.target.value)} />
                </div>
            </div>
            {/* web url */}
            <div className="flex items-center gap-2 py-2">
                <label htmlFor="webUrl" className='w-1/4'>web-Url : </label>
                <div className="border px-2 w-3/4">
                    <input type="text" className="w-3/4 py-0.5 focus:outline-none text-red-400 font-mono" name="webUrl" id="webUrl" required
                        placeholder="web Url" value={webUrl}
                        onChange={(e) => setWebUrl(e.target.value)} />
                </div>
            </div>
            {/* job descriptions !! */}
            <div className='flex items-center justify-between pb-3'>
                <label htmlFor="editor" className="">Job Descriptions:</label>
                <span title='How to write description !' className='underline underline-offset-2' onClick={() => alert(`
            For normal line start and end with * 
            And for bold line start and end with ** 
            And for any link start and end with *** 
            Thank you 🙂`)}>Instructions**</span>
            </div>
            <div className="w-full border-2 shadow-sm">
                <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                    <textarea id="editor" rows="8" className="py-0.5 block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:outline-none" placeholder="Write your job description !..." required value={description}
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
            </div>

            <button type="submit" className=" w-full bg-blue-500 hover:bg-blue-700 text-white text-sm py-3 mt-5  px-3 rounded">
                Add new Job
            </button>
        </form>
    );
};

export default AddForm;