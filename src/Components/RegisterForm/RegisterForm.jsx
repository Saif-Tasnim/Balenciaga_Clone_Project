import React from 'react';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import SelectField from '../SelectField/SelectField';
import AgreeCheckBox from '../AgreeCheckBox/AgreeCheckBox';

const RegisterForm = () => {
    const civilsOptions = ["Mr", "Miss , Mrs , Ms", "Mix", "I'd rather not say"];

    const country = ["Australia", "New Zealand", "Bangladesh", "China", "USA", "Canada", "Finland"]

    return (
        <div>

            {/* civility */}
            <SelectField
                head="Civility"
                options={civilsOptions}
            ></SelectField>

            {/* first name */}
            <InputField
                head="First Name"
                type="text"
            ></InputField>

            {/* last name */}
            <InputField
                head="Last Name"
                type="text"
            ></InputField>


            {/* birth date */}
            <InputField
                head="Birth Date (DD/MM/YYYY)"
                type="text"
            ></InputField>

            {/* email */}
            <InputField
                head="Email"
                type="email"
            ></InputField>

            {/* password */}
            <InputField
                head="Password"
                type="password"
            ></InputField>

            {/* country */}
            <SelectField
                head="Country of Residence"
                options={country}
            ></SelectField>

            {/* text */}
            <div className='h-24 overflow-y-scroll my-6 mb-16'>
                <p> <b>You are invited to read our privacy policy in full. In any event,</b> here are some key points we would like to share with you:

                    You are about to create your Balenciaga profile. This will allow Balenciaga to offer you a personalized and tailored experience, provide you with products, services and information you request from Balenciaga and communicate with you. All your personal information will be kept, used and linked to your Balenciaga profile. Your profile could include information we obtained directly from you as well as from our retailers and other commercial partners. As we operate globally, we may securely share your personal information with companies of our group and our approved partners located around the world. We will implement safeguards to protect your personal information. We may use any contact information you share with us to contact you.

                    Privacy laws may grant you certain rights such as the right to access, delete, modify and rectify your data, or to restrict or object to processing, as well as the right to data portability. You can also lodge a complaint with your competent regulator. You can withdraw your consent or delete your profile at any time. For further information regarding our privacy practices and your rights, please contact us at privacy@balenciaga.com.
                </p>
            </div>

            {/* checkbox */}

            <AgreeCheckBox
                text="I have understood the privacy policy and I agree to Terms of use"
            ></AgreeCheckBox>

            <AgreeCheckBox
                text=" I would like to receive updates about Balenciaga new activities, exclusive products, tailored services and to have a personalised."
            ></AgreeCheckBox>

            <AgreeCheckBox
                text=" I confirm that I am 18 years old"
            ></AgreeCheckBox>

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