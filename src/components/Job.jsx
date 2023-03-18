import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteJob } from '../features/jobs/jobsSlice';
import moment from 'moment';
function Job({ job }) {
  const { title, type, salary, deadline, _id } = job;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteJob(_id))
  }
  return (
    <div className='divide-y-2 divide-slate-100'>
      <div className='p-2 sm:p-4 '>
            <div className='flex justify-between items-center'>
                <Link to={`/jobs/details/${_id}`}>
                    <div>
                        <p className='hover:underline hover:underline-offset-4'>{title}</p>
                        <div className='flex flex-wrap gap-x-2 sm:gap-4 items-center'>
                            <p>  <i className={`fa-solid fa-stop  text-lg mr-1.5 !text-${type == 'Remote' ? '[#56E5C4]' : (type == 'Internship' ? '[#FF5757]' : '[#FF8A00]')}`}></i> {type}</p>
                            <p>BDT {salary}</p>
                            <p><i className="fa-regular fa-calendar text-slate-400 text-lg"></i> Closing on {moment(deadline).format('YYYY-MM-DD')}</p>
                        </div>
                    </div>
                </Link>
                <div className="flex flex-wrap shrink-0 gap-5">
                    <Link to={`/jobs/edit/${_id}`}>
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded">
                            <i className="fa-solid fa-pen text-gray-300"></i> Edit
                        </button>
                    </Link>
                    <button  onClick={handleDelete} type="button" className="bg-red-500 hover:bg-red-700 text-white text-sm py-1 px-3 rounded">
                        <i className="fa-solid fa-trash text-gray-300"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Job