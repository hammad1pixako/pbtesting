import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}/register`,
                {
                    name, email, password
                });
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setAgree(false);
            navigate("/login");
            toast.success("User Registered Successfully")
        } catch (error) {
            toast.error(error.response.data);
        }
    }

    return (
        <div>
            <form className="flex max-w-md flex-col gap-4 mx-auto mt-5" onSubmit={handleSubmit}>
                <div className='mb-10'>
                    <h1 className='text-center text-[#063A73] font-bold text-[1.6rem]'>Currency Exchange</h1>
                    <h2 className='text-center text-[#063A73] font-bold text-[2rem] mt-10'>Signup</h2>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Full Name" />
                    </div>
                    <TextInput id="name" type="text" placeholder="Enter your full name" value={name} onChange={e => setName(e.target.value)} required shadow />
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
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" checked={agree} onChange={() => setAgree(!agree)} />
                    <Label htmlFor="agree" className="flex">
                        I agree with the&nbsp;
                        terms and conditions
                    </Label>
                </div>
                <button disabled={!name || !email || !password || !confirmPassword || password !== confirmPassword || !agree} className='bg-gradient-to-br from-theme-primary to-theme-secondary text-white py-2 rounded-lg'>Register new account</button>
            </form>
            <p className="mt-4 text-center text-gray-600 text-sm">
                Already have an account? <Link to='/login' className="text-green-600 hover:underline">Log In</Link>
            </p>
        </div>
    );
}

export default Register;