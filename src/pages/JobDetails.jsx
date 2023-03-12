import React from 'react'
import JobDetailsCard from '../components/JobDetailsCard'
import RelatedJobPosts from '../components/RelatedJobPosts'
import Layout from '../Layout'

function JobDetails() {
  return (
    <Layout title='Job Details' className='py-8'>
      <div className='w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 m-auto  '>
          <div className='min-h-[50vh] border bg-white flex items-center'>
            <JobDetailsCard />
          </div>
      </div>
    </Layout>
  )
}

export default JobDetails