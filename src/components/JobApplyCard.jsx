import React from 'react';

const JobApplyCard = () => {
    return (
        <div className='p-6 m-auto'>
            <p className='mb-8 font-mono'>Apply for the position - <span className='underline underline-offset-4'>{'Software Enginner'}</span></p>
              
            <form class="w-full max-w-lg" onSubmit={(e)=>{e.preventDefault(); alert("your application has send ! Good luck")}}>
                <div class="flex flex-wrap mx-3 mb-2 items-center">
                    <label class="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Job Title
                    </label>
                    <input class=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter your name" value={'Software Engineer'} readOnly />
                </div>
                <div class="flex flex-wrap mx-3 mb-2 items-center">
                    <label class="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Job Type
                    </label>
                    <input class=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter your name" value={'Internship'} readOnly />
                </div>
                <div class="flex flex-wrap mx-3 mb-2 items-center">
                    <label class="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Salary/m
                    </label>
                    <input class=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter your name" value={'30,300,30'} readOnly/>
                </div>
                <div class="flex flex-wrap mx-3 mb-2 items-center">
                    <label class="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Your Name
                    </label>
                    <input class=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter your name" required/>
                </div>
                <div class="flex flex-wrap mx-3 mb-2 items-center">
                    <label class="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Your Email
                    </label>
                    <input class=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="email" placeholder="enter your email" required/>
                </div>
                <div class="flex flex-wrap mx-3 mb-2 items-center">
                    <label class="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2 underline underline-offset-4" for="grid-first-name">
                        Your Github Url
                    </label>
                    <input class=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="github url" required/>
                </div>
                <div class="flex flex-wrap mx-3 mb-2 items-center">
                    <label class="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2 underline underline-offset-4" for="grid-first-name">
                        Your Linkedin Url
                    </label>
                    <input class=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter linkedin url" required/>
                </div>
                <div class="flex flex-wrap mx-3 mb-2 items-center">
                    <label class="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2 underline underline-offset-4" for="grid-first-name">
                        Your portfolio Url
                    </label>
                    <input class=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter portfolio url" required/>
                </div>
                <div class="flex flex-wrap mx-3 mb-2 items-center">
                    <label class="w-full md:w-1/3 px-3 text-gray-700 text-xs font-bold mb-2  underline underline-offset-4" for="grid-first-name">
                        Resume Url
                    </label>
                    <input class=" w-full md:w-2/3 px-3 py-1 mb-6 md:mb-0  text-gray-700 border focus:outline-none focus:bg-white" type="text" placeholder="enter your resume url" required/>
                </div>
               
                <div class="flex flex-wrap ml-3 mb-2 items-center justify-between">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input class=" w-full  text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none  " type="text" placeholder="Albuquerque" required/>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        State
                        </label>
                        <input class=" w-full  text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none  " type="text" placeholder="State" required/>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                        Zip
                        </label>
                        <input class=" w-full  text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none  " type="text" placeholder="90210" required/>
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