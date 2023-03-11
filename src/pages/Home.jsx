import React from 'react';
import HomeMenu from '../components/HomeMenu';
import Job from '../components/Job';
import SideBar from '../components/SideBar';
import Layout from '../Layout';

const Home = () => {
    return (
        <Layout className='py-8'>
            <div className='w-10/12 m-auto min-h-[84vh] border'>
                <div className='grid grid-cols-5 gap-4'>
                    <SideBar />
                    <div className='col-span-4 border bg-white min-h-[84vh]'>
                        <HomeMenu />
                        <div className='max-h-[80vh] overflow-y-auto'>
                            <Job />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;