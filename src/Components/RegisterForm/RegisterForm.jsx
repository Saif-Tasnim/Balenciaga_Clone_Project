import React from 'react';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import SelectField from '../SelectField/SelectField';
import AgreeCheckBox from '../AgreeCheckBox/AgreeCheckBox';
import EntryButton from '../EntryButton/EntryButton';
import Switching from '../Switching/Switching';
import TermsAndCondition from '../TermsAndCondition/TermsAndCondition';

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
            <TermsAndCondition></TermsAndCondition>


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
            <EntryButton
                text="Create My Profile"
            ></EntryButton>

            <Switching
                head="Already have a profile ?"
                link="login"
                text="Log In"
            ></Switching>

        </div>
    );
};

export default RegisterForm;