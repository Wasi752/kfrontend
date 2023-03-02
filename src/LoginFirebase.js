import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Signin() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value)
            .than(user => {
                console.log(user)
            }).catch(arr =>{
                console.log(arr)
            })
    };

    return (
        <div className="flex w-screen h-screen bg-gray-100">
            <div className="w-4/12"></div>
            <div className="w-4/12 mt-[6%]">
                <div className='bg-gray-800 flex flex-col justify-center px-[10%] py-[20%]'>
                    <form className='flex flex-col w-full text-white'>
                        <h2 className='text-4xl text-teal-500 font-bold text-center py-7'>Login your account</h2>
                        <input
                            ref={emailRef}
                            type="text"
                            placeholder="E-mail"
                            className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        />
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="Password"
                            className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        />
                        <button
                            type="button"
                            onClick={Signin}
                            className='m-3 px-4 py-3 bg-teal-500 shadow-lg text-center shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg text-2xl  hover:bg-teal-400'
                        >Login
                        </button>
                    </form>
                    <div className="flex">
                        <Link to="/forget"><p className="mt-2 ml-3 text-teal-300">Forgot Your Password?</p></Link>
                        <p className="mt-2 ml-44 text-teal-300">New User? <span onClick={signUp}>SignUp</span></p>
                    </div>
                </div>
            </div>
            <div className="w-4/12 h-full"></div>
        </div>
    );
}
export default Signin;