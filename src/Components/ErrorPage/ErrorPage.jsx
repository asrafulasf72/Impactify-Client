import React from 'react';
import errorpng from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='max-w-800px mx-auto py-10'>
                   <div className='flex justify-center items-center'>
                      <img src={errorpng} alt="" />
                   </div>
                   <div className='flex flex-col justify-center items-center'>
                     <h1 className='text-[2.2rem] font-medium text-black'>Oops, Page Not found!</h1>
                     <p>The page you are looking for is not available.</p>
                     <button className='my-5 text-[1rem] text-white font-semibold px-3 py-1.5 rounded-[.5rem] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'><Link to='/'>Go Back!</Link></button>
                   </div>
               </div>
        </div>
    );
};

export default ErrorPage;