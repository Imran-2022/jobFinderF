import React from 'react';
import EditForm from '../components/EditForm';
import Layout from '../Layout';

const EditJob = () => {
    return (
        <Layout title="Edit Job" className="py-12">
            <div className="w-1/2 m-auto min-h-[60vh] border p-4 bg-white">
                <div className="w-3/4 m-auto py-6">
                    <EditForm />
                </div>
            </div>
        </Layout>
    );
};

export default EditJob;