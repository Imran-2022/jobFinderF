import React from 'react';

const HomeMenu = () => {
    return (
        <div className='flex items-center justify-between border-b p-4'>
            <p>All Available Jobs</p>
            <div className='flex gap-3'>
                <div className="xl:w-52">
                    <div className="relative flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            className="relative m-0 block w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon2" />
                    </div>
                </div>
                <select className='border text-sm  w-52 rounded focus:outline-none'>
                    <option value='default'>Default</option>
                    <option value='lowTohigh'>Salary (Low to High)</option>
                    <option value='highTolow'>Salary (High to Low)</option>
                </select>
            </div>
        </div>
    );
};

export default HomeMenu;