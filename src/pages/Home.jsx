import React, { useEffect } from 'react';
import HomeMenu from '../components/HomeMenu';
import Job from '../components/Job';
import SideBar from '../components/SideBar';
import Layout from '../Layout';
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../features/jobs/jobsSlice';

const Home = () => {
    const dispatch = useDispatch();

    const { jobs, isLoading, isError } = useSelector(
        (state) => state.jobs
    );
    const { byType, bySearch, bySalary } = useSelector(
        (state) => state.filters
    );

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);
    // filter here - 

    const handleFilterByType = (dt) => {
        if (byType == 'internship') return dt.type == 'Internship'
        if (byType == 'remote') return dt.type == 'Remote'
        if (byType == 'full_time') return dt.type == 'Full Time'
        return true;
    }

    const handleFilterBySearch = (dt) => {
        if (bySearch) return dt.title.toLowerCase().includes(bySearch.toLowerCase())
        return true;
    }

    const handleSortBySalary = (a, b) => {
        if (bySalary == 'default') {
            return true;
        } else if (bySalary == 'lowTohigh') {
            return parseFloat(b.salary) - parseFloat(a.salary);
        } else if (bySalary == 'highTolow') {
            return parseFloat(a.salary) - parseFloat(b.salary);
        }
        return true;
    }


    //filter end

    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && jobs?.length > 0) {
        content = jobs
            .filter(handleFilterByType)
            .filter(handleFilterBySearch)
            .slice().sort(handleSortBySalary)
            .map((dt) => (
                <Job key={dt._id} job={dt} />
            )).reverse();
    }

    if (!isLoading && !isError && jobs?.length === 0) {
        content = <p>No jobs found!</p>;
    }
    return (
        <Layout className='sm:py-8'>
            <div className='lg:w-10/12 sm:w-11/12 m-auto min-h-[84vh] border'>
                <div className='grid md:grid-cols-5 md:gap-4'>
                    <SideBar />
                    <div className='md:col-span-4 border-x bg-white min-h-[84vh]'>
                        <HomeMenu byType={byType} />
                        <div className='max-h-[80vh] overflow-y-auto scrollbar-hide'>
                            {
                                content
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;