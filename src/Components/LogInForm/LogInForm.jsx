import React from 'react';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';

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
            <div className="form-field pt-5">
                <div className="form-control justify-between">
                    <button type="button" className="btn bg-black text-white rounded-md w-full">NEXT</button>
                </div>
            </div>

            <div className="form-field my-3">
                <div className="form-control justify-center">
                    <Link to="/entry/register" className="link underline text-sm">Create a profile </Link>
                </div>
            </div>
        </div>
      
    );
};

export default LogInForm;