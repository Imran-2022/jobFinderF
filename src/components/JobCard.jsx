import React from 'react';

const JobCard = () => {
    return (
        <div className='p-8'>
            <p>Job Card</p>
        </div>
    );
};

export default JobCard;

/*
<div className="lws-single-job">
            <div className="flex-1 min-w-0">
                <h2 className="lws-title">{title}</h2>
                <div className="job-footers">
                    <div className="lws-type">
                       
                        <i className={`fa-solid fa-stop  text-lg mr-1.5 !text-${type == 'Remote' ? '[#56E5C4]' : (type == 'Internship' ? '[#FF5757]' : '[#FF8A00]')}`}></i>
                        {type}
                    </div>
                    <div className="lws-salary">
                        <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                        BDT {salary}
                    </div>
                    <div className="lws-deadline">
                        <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                        Closing on {deadline}
                    </div>
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <span className="hidden sm:block">
                    <Link to={`/edit/${id}`}>
                        <button onClick={handleEdit} type="button" className="lws-edit btn btn-primary">
                            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                            Edit
                        </button>
                    </Link>
                </span>

                <span className="sm:ml-3">
                    <button onClick={handleDelete} type="button" className="lws-delete btn btn-danger ">
                        <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                        Delete
                    </button>
                </span>
            </div>
        </div>
        
        */
