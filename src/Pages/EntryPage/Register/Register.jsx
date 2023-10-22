import React from 'react';
import RegisterForm from '../../../Components/RegisterForm/RegisterForm';

const Register = () => {
    return (
        <div className='max-w-xl mx-auto border-[1px] border-black'>
        <div className='py-20 text-center'>
            <h1 className='font-bold mt-9 mb-4 uppercase text-2xl'>Create a Profile</h1>
            
            <p className='w-[350px] mx-auto'>Create a profile and benefit from order delivery updates and return management as well as personalized recommendations</p>

            <div className='mt-16 w-4/5 mx-auto '>
                <RegisterForm></RegisterForm>
            </div>
        </div>
    </div>
    );
};

export default Register;