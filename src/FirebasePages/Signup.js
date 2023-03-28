import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
//import { getAuth } from "firebase/auth";


const inputClass = "h-[10%] w-[60%] p-4 border border-blue-300 rounded-md m-1";
const divClassRight = "flex flex-col w-full h-full ml-36 pl-1 ";
const divClassLeft = "flex flex-col w-full h-full ml-36";

const signUpValidationSchema = Yup.object().shape({
    fullName: Yup.string()
        .matches(/(\w.+\s).+/, 'Enter at least 2 names')
        .required('Full name is required'),
    phoneNumber: Yup.string()
        .matches(/(01)(\d){9}\b/, 'Enter a valid phone number')
        .required('Phone number is required'),
    email: Yup.string()
        .email("Please enter valid email")
        .required('Email is required'),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
});
const form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>

(
    <div className="w-full h-full flex bg-blue-100">
        <div className="w-[30%] h-full"></div>

        <div className="w-[40%] h-full mt-40 mb-96 bg-blue-300 ">
            <p className="mt-5 mb-5 text-3xl text-white font-bold font-serif text-center">Sign Up</p>
            <div className="flex w-full h-full justify-center divide-x-2 divide-slate-500">
                <div className="mt-1 flex flex-col w-full h-full">
                    <form onSubmit={handleSubmit}>
                        <div className={divClassLeft}>
                            <input
                                type='name'
                                name='fullName'
                                placeholder='Enter Your Full Name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fullName}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.fullName && errors.fullName}
                            </span>

                        </div>
                        {/* <div className={divClassLeft}>
                            <input
                                type="text"
                                name='phoneNumber'
                                placeholder='Phone Number'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phoneNumber}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.phoneNumber && errors.phoneNumber}
                            </span>
                        </div> */}
                        <div className={divClassLeft}>
                            <input
                                type="text"
                                name='email'
                                placeholder='Your Valid Email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.email && errors.email}
                            </span>
                        </div>
                        <div className={divClassLeft}>
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.password && errors.password}
                            </span>
                        </div>
                        <div className={divClassLeft}>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder='Confirm Password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.confirmPassword && errors.confirmPassword}
                            </span>
                        </div>
                        <div className={divClassRight}>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="text-center text-2xl text-white font-bold h-[10%] w-[60%] p-4 border border-blue-300 rounded-md mb-10 mt-5 bg-blue-600 hover:text-blue-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="w-[20%] h-full"></div>
    </div>

)
const iValue = { fullName: '', phoneNumber: '', email: '', password: '', confirmPassword: '' }

const SignUp2 = () => {
    const navigate = useNavigate();
  //  const auth = getAuth(app);
    const onSubmit = (values, { setSubmitting }) => {
        fetch('http://localhost:3002/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => {
                navigate('/');
            });

    }
    return (
        <div>
            <Formik
                initialValues={iValue}
                validationSchema={signUpValidationSchema}
                component={form}
                onSubmit={onSubmit}
            >
            </Formik>
        </div>
    );
};
export default SignUp2;