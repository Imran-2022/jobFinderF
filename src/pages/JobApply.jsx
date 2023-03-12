import React from 'react';
import JobApplyCard from '../components/JobApplyCard';
import Layout from '../Layout';

const JobApply = () => {
    return (
        <Layout title='Job Apply' className='py-8'>
          <div className='w-11/12 sm:w-2/3 lg:w-2/5 m-auto  '>
          <div className='min-h-[50vh] border bg-white flex items-center'>
            <JobApplyCard />
          </div>
      </div>
        </Layout>
    );
};

export default JobApply;