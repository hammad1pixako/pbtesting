import React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../../context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const { setState } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [passwordField, setPasswordField] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmitEmail = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}/forgotPasswordSendMail`,
                {
                    email
                });
            setEmail('')
            toast.success("User Submit Successfully")
        } catch (error) {
            toast.error(error.response.data);
        }
    }



    const handleSubmitPasswords = () => {
        console.log("")
    }

    return (
        <div>
            {!passwordField ? (
                <div>
                    <form className="flex max-w-md flex-col gap-4 mx-auto mt-5" onSubmit={handleSubmitEmail}>
                        <div className='mb-10'>
                            <h1 className='text-center text-[#063A73] font-bold text-[1.6rem]'>Currency Exchange</h1>
                            <h2 className='text-center text-[#063A73] font-bold text-[2rem] mt-10'>Reset Password</h2>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput id="email" type="email" placeholder="name@email.com" value={email} onChange={e => setEmail(e.target.value)} required shadow />
                        </div>
                        <button disabled={!email} className='bg-gradient-to-br from-theme-primary to-theme-secondary text-white py-2 rounded-lg'>
                            Send Reset Link
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600 text-sm">
                        Remembered your password? <Link to='/login' className="text-purple-600 hover:underline">Log In</Link>
                    </p>
                </div>
            ) : (
                <div>
                    <form className="flex max-w-md flex-col gap-4 mx-auto mt-5" onSubmit={handleSubmitPasswords}>
                        <div className='mb-10'>
                            <h1 className='text-center text-[#063A73] font-bold text-[1.6rem]'>Currency Exchange</h1>
                            <h2 className='text-center text-[#063A73] font-bold text-[2rem] mt-10'>Reset Password</h2>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Password" />
                            </div>
                            <TextInput id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="repeat-password" value="Repeat Password" />
                            </div>
                            <TextInput id="repeat-password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} onBlur={() => {
                                if (password !== confirmPassword) {
                                    toast.error('Password doesnt matched');
                                }
                            }} required shadow />
                        </div>
                        <button disabled={!password || !confirmPassword || password !== confirmPassword} className='bg-gradient-to-br from-theme-primary to-theme-secondary text-white py-2 rounded-lg'>Reset Password</button>
                    </form>
                </div>
            )}

        </div>
    );
}

export default ForgotPassword;