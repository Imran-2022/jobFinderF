import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const Layout = ({ title = "Job Finder Application", className, children }) => {

    useEffect(() => {
        document.title = title;
    }, [title])

    return (
        <div className='bg-[#f5f7f9]'>
            <Navigation />
            <div className={`w-10/12 m-auto p-3 min-h-[84vh] ${className}`}>
                    {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;