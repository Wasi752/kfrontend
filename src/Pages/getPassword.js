import { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function GetPassword() {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    const submit = () => {
        const user = {
            email: email,
            phoneNumber: phoneNumber
        };

        fetch('http://localhost:3001/signin', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then((body) => {
                if (body) {
                    navigate('/signin' + id)
                    //window.alert(`Signed in as ${body.fullName}`)
                }
                else {
                    window.alert(`No user exists with ${email} or ${phoneNumber} `);
                    setEmail("") || setPhoneNumber("");
                }
            });
    };

    return (
        <div className="flex w-screen h-screen bg-gray-100">
            <div className="w-4/12"></div>
            <div className="w-4/12 mt-[6%]">
                <div className='bg-gray-800 flex flex-col justify-center px-[10%] py-[20%]'>
                    <form className='flex flex-col w-full text-white'>
                        <h2 className='text-2xl text-teal-500 font-bold text-center py-7'>Recover Your Password</h2>
                        <input
                            value={email || phoneNumber}
                            onChange={e => setEmail(e.target.value) || setPhoneNumber(e.target.value)}
                            type="text"
                            placeholder="E-mail or Phone Number"
                            className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        />
                        <Link to = {'/signin' + id}>
                        <button
                            type="button"
                            onClick={submit}
                            className='m-3 px-4 py-3 bg-teal-500 shadow-lg text-center shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg text-2xl  hover:bg-teal-400'
                        >Submit
                        </button></Link>
                    </form>
                </div>
            </div>
            <div className="w-4/12 h-full"></div>
        </div>
    );
}
export default GetPassword;