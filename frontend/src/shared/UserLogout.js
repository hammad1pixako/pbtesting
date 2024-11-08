import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../context';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { SubmitSession } from './Timer';

const UserLogout = () => {
    const navigate = useNavigate();
    const { setState, setIsToggled } = useContext(UserContext);

    const handleLogout = async () => {
        await SubmitSession(setIsToggled)
        setState(null); // Update context to null
        window.localStorage.removeItem("auth"); // Clear local storage
        navigate("/login"); // Redirect to login
        toast.success("User LoggedOut Successfully"); // Show success message
    };

    return (
        <button
            onClick={handleLogout}
            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            Logout<FaArrowRightFromBracket className='mt-1 ml-1' />
        </button>
    );
};

export default UserLogout;
