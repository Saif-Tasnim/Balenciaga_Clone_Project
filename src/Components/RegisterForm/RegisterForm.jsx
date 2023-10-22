import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div>
            {/* civility */}
            <label className="form-label"> <span> Civility <sup>*</sup></span> </label>
            <select className="select select-block border-black rounded-md mt-1 mb-4">
                <option>Mr.</option>
                <option> Miss , Mrs, Ms </option>
                <option> Mix </option>
                <option> I'd rather not say </option>
            </select>

            {/* first name */}
            <div className="form-field mb-4">
                <label className="form-label"> <span>First Name <sup>*</sup></span> </label>
                <input type="text" className="input max-w-full border-black rounded-md" />
            </div>

            {/* last name */}
            <div className="form-field mb-4">
                <label className="form-label"> <span>Last Name <sup>*</sup></span> </label>
                <input type="text" className="input max-w-full border-black rounded-md" />
            </div>

            {/* birth date */}
            <div className="form-field mb-4">
                <label className="form-label"> <span>Birth Date (DD/MM/YYYY)
                    <sup>*</sup></span> </label>
                <input type="text" className="input max-w-full border-black rounded-md" />
            </div>
            
            {/* email */}
            <div className="form-field mb-4">
                <label className="form-label"> <span>Email
                    <sup>*</sup></span> </label>
                <input type="email" className="input max-w-full border-black rounded-md" />
            </div>
            
            {/* password */}
            <label className="form-label mb-1"> <span>Password
                <sup>*</sup></span> </label>
            <div className="form-control flex-col relative w-full mb-4">
                <input type="password" className="input input-lg max-w-full border-black rounded-md" />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-content3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                </span>
            </div>
            
            {/* country */}
            <label className="form-label"> <span> Country of Residence <sup>*</sup></span> </label>
            <select className="select select-block border-black rounded-md mt-1 mb-4">
                <option>Australia</option>
                <option> New Zealand </option>
                <option> Bangladesh </option>
                <option> China </option>
                <option> USA </option>
                <option> Canada </option>
                <option> Finland </option>
            </select>
            
            {/* text */}
            <div className='h-24 overflow-y-scroll my-6'>
                <p> <b>You are invited to read our privacy policy in full. In any event,</b> here are some key points we would like to share with you:

                    You are about to create your Balenciaga profile. This will allow Balenciaga to offer you a personalized and tailored experience, provide you with products, services and information you request from Balenciaga and communicate with you. All your personal information will be kept, used and linked to your Balenciaga profile. Your profile could include information we obtained directly from you as well as from our retailers and other commercial partners. As we operate globally, we may securely share your personal information with companies of our group and our approved partners located around the world. We will implement safeguards to protect your personal information. We may use any contact information you share with us to contact you.

                    Privacy laws may grant you certain rights such as the right to access, delete, modify and rectify your data, or to restrict or object to processing, as well as the right to data portability. You can also lodge a complaint with your competent regulator. You can withdraw your consent or delete your profile at any time. For further information regarding our privacy practices and your rights, please contact us at privacy@balenciaga.com.
                </p>
            </div>

            {/* checkbox */}
            <div className='mt-24 mb-7'>
                <label className="flex cursor-pointer gap-2">
                    <input type="checkbox" className="checkbox" />
                    <span>I have understood the <u>privacy policy</u> and I agree to <u>Terms of use </u></span>
                </label>
            </div>

            <div className='mb-7'>
                <label className="flex cursor-pointer gap-2">
                    <input type="checkbox" className="checkbox" />
                    <span>
                        I would like to receive updates about Balenciaga new activities, exclusive products, tailored services and to have a personalised client experience based on my interests.</span>
                </label>
            </div>

            <div className='mb-7'>
                <label className="flex cursor-pointer gap-2">
                    <input type="checkbox" className="checkbox" />
                    <span>
                        I confirm that I am 18 years old </span>
                </label>
            </div>
            
            
            {/* button */}
            <div className='my-12 text-center w-full'>
                <button className='btn bg-black text-white'>Create My Profile </button>
            </div>

            <div>
                Already have a profile ? <Link to='/entry/login' className='underline'>Log In</Link>
            </div>

        </div>
    );
};

export default RegisterForm;