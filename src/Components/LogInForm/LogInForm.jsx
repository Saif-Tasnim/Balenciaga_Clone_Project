import React from 'react';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import EntryButton from '../EntryButton/EntryButton';
import Switching from '../Switching/Switching';

const LogInForm = () => {
    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">

            <InputField
                head="Email Address"
                type="email"
            ></InputField>

            <div className="form-field">
                <div className="form-control justify-between">
                    <div className="flex gap-2">
                        <input type="checkbox" className="checkbox" />
                        <a href="#">Remember me</a>
                    </div>
                    <label className="form-label">
                        <a className="link link-underline-hover underline font-semibold text-sm">Forgot password </a>
                    </label>
                </div>
            </div>

            <EntryButton
                text="NEXT"
            ></EntryButton>

            <Switching
                link="register"
                text="Create a profile"
            ></Switching>


        </div>

    );
};

export default LogInForm;