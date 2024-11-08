import React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../../context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { setState } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}/login`,
                {
                    email, password
                });
            setEmail('');
            setPassword('');
            // update context
            setState({
                user: data.user,
                token: data.token,
            });
            // save in local storage
            window.localStorage.setItem("auth", JSON.stringify(data));
            navigate("/")
            toast.success("User LoggedIn Successfully")
        } catch (error) {
            toast.error(error.response.data);
        }
    }

    return (
        <div>
            <form className="flex max-w-md flex-col gap-4 mx-auto mt-5" onSubmit={handleSubmit}>
                <div className='mb-10'>
                    <h1 className='text-center text-[#063A73] font-bold text-[1.6rem]'>Currency Exchange</h1>
                    <h2 className='text-center text-[#063A73] font-bold text-[2rem] mt-10'>Login</h2>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Email" />
                    </div>
                    <TextInput id="email" type="email" placeholder="name@email.com" value={email} onChange={e => setEmail(e.target.value)} required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Password" />
                    </div>
                    <TextInput id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required shadow />
                </div>
                <button disabled={!email || !password} className='bg-gradient-to-br from-theme-primary to-theme-secondary text-white py-2 rounded-lg'>Login</button>
            </form>
            <p className="mt-4 text-center text-gray-600 text-sm">
                Don't have an account? <Link to='/register' className="text-blue-600 hover:underline">Sign Up</Link>
            </p>
            <p className="mt-2 text-center text-gray-600 text-sm">
                <Link to='/forgotPassword' className="text-blue-600 hover:underline">Forgot Password?</Link>
            </p>
        </div>
    );
}

export default Login;