import React from 'react'
import { useDispatch } from 'react-redux';
import { filterByType } from '../features/filter/filterByTypeSearchSaralySlice';

function SideBar() {
  
  const dispatch = useDispatch();

  const handleFilterByType = (type) => {
      dispatch(filterByType(type));
  };

  return (
    <div className='px-5 md:p-5 flex items-center gap-2 md:5 flex-wrap md:block'>
        <p className='hidden sm:block'>Filter : 🙂</p>
        <ul className='py-4 flex md:block' >
            <li className='font-bold text-gray-600 cursor-pointer py-2' onClick={() => handleFilterByType('all')}><i className="fa-solid fa-briefcase"></i> All Available Jobs</li>
            <li className='ml-4 py-2 cursor-pointer' onClick={() => handleFilterByType('internship')}><i className="fa-solid fa-stop !text-[#FF5757]"></i> Internship</li>
            <li className='ml-4 py-2 cursor-pointer' onClick={() => handleFilterByType('full_time')}><i className="fa-solid fa-stop !text-[#FF8A00]"></i> FullTime</li>
            <li className='ml-4 py-2 cursor-pointer'  onClick={() => handleFilterByType('remote')}><i className="fa-solid fa-stop !text-[#56E5C4]"></i> Remote</li>
        </ul>
    </div>
  )
}

export default SideBar