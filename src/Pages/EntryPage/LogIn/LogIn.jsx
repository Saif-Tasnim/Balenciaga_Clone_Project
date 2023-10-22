import React from 'react';
import LogInForm from '../../../Components/LogInForm/LogInForm';

const LogIn = () => {
    return (
        <div className='max-w-xl mx-auto border-[1px] border-black h-[90vh]'>
            <div className='py-20 text-center'>
                <h1 className='font-bold my-9 uppercase text-2xl'>Login</h1>

                <div>
                    <LogInForm></LogInForm>
                </div>
            </div>
        </div>
    );
};

export default LogIn;