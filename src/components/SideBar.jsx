import React from 'react'

function SideBar() {
  return (
    <div className='p-5'>
        <p className=''>Filter : 🙂</p>
        <ul className='py-4'>
            <li className='font-bold text-gray-600 cursor-pointer py-2'><i className="fa-solid fa-briefcase"></i> All Available Jobs</li>
            <li className='ml-4 py-2 cursor-pointer'><i className="fa-solid fa-stop !text-[#FF5757]"></i> Internship</li>
            <li className='ml-4 py-2 cursor-pointer'><i className="fa-solid fa-stop !text-[#FF8A00]"></i> FullTime</li>
            <li className='ml-4 py-2 cursor-pointer'><i className="fa-solid fa-stop !text-[#56E5C4]"></i> Remote</li>
        </ul>
    </div>
  )
}

export default SideBar