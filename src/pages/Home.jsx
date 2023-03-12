import React from 'react';
import HomeMenu from '../components/HomeMenu';
import Job from '../components/Job';
import SideBar from '../components/SideBar';
import Layout from '../Layout';

const Home = () => {
    return (
        <Layout className='sm:py-8'>
            <div className='lg:w-10/12 sm:w-11/12 m-auto min-h-[84vh] border'>
                <div className='grid md:grid-cols-5 md:gap-4'>
                    <SideBar />
                    <div className='md:col-span-4 border-x bg-white min-h-[84vh]'>
                        <HomeMenu />
                        <div className='max-h-[80vh] overflow-y-auto scrollbar-hide'>
                            <Job />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;