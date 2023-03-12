import React from 'react';
import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'
import googlePlay from '../assets/images/googlePlay.png'
import applePlay from '../assets/images/applePlay.png'
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className=" bg-gray-900">
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                    <h3 className="text-3xl mb-3"> Download our `Job Finder app </h3>
                    <p> Stay with Job Finder. All day, every day. </p>
                    <div className="flex justify-center my-10">
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 sm:w-52 mx-2">
                            <img src={googlePlay} className="w-7 md:w-8" alt='img-googlePlay' />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 sm:w-44 mx-2">
                            <img src={applePlay} className="w-7 md:w-8" alt='img-applePlay' />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 sm:mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-8 md:mt-0">2022 - {year} &copy; All right reserved by @ <a className='text-zinc-100' href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer">md imranul haque</a></p>
                    <div className="order-1 md:order-2 flex">
                        <span className="px-2"><a href="https://github.com/Imran-2022" target="_blank" rel="noreferrer"><img className='w-5' src={github} alt="" /></a></span>
                        <span className="px-2"><a href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer"><img className='w-5' src={linkedin} alt="" /></a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;