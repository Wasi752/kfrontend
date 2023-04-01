import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signin = () => {
        console.log('Text')

        fetch('http://localhost:3000/login?password=' + password)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then((body) => {
                if (body) {
                    localStorage.setItem('code', body.code)
                    localStorage.setItem('iv', body.iv)
                    navigate("/admin/" + body.fullName) //+ body.id
                    //window.alert(`Signed in as ${body.fullName}`)
                }
                else {
                    window.alert(`No user exists with ${password} `);
                    setPassword("");
                }
            });
    };

    return (
        <div className="flex w-screen h-screen bg-gray-100">
            <div className="w-4/12"></div>
            <div className="w-4/12 mt-[6%]">
                <div className='bg-gray-200 flex flex-col justify-center px-[10%] py-[20%]'>
                    <form className='flex flex-col w-full text-white'>
                        <h2 className='text-4xl text-teal-500 font-bold text-center py-7'>SIGNIN</h2>
                        
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className='m-3 px-4 py-3 rounded-lg bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        />
                        <button
                            type="button"
                            onClick={signin}
                            className='m-3 px-4 py-3 bg-teal-500 shadow-lg text-center shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg text-2xl  hover:bg-teal-400'
                        >SIGNIN
                        </button>
                    </form>
                    <div className="flex">
                        <Link to="/forget"><p className="mt-2 ml-3 text-teal-700">Forgot Your Password?</p></Link>
                        <p className="mt-2 ml-44 text-teal-700">New User? <Link to="/signup">SignUp</Link></p>
                    </div>
                </div>
            </div>
            <div className="w-4/12 h-full"></div>
        </div>
    );
}
export default Login;