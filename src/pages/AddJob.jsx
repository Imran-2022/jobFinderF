import React from 'react';
import AddForm from '../components/AddForm';
import Layout from '../Layout';

const AddJob = () => {
    return (
        <Layout title="add new Job" className="py-8">
            <div className="w-10/12 sm:w-1/2 m-auto min-h-[60vh] border p-4 bg-white">
                <div className="w-11/12 m-auto py-8">
                    <AddForm />
                </div>
            </div>
        </Layout>
    );
};

export default AddJob;