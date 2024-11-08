import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSync } from "react-icons/ai";

const Validate = ({ children }) => {
    const {state} = useContext(UserContext);
    const [valid, setValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (state && state.token) {
            validateUser();
        }
    }, [state && state.token]);

    const validateUser = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API_URL}/authorizedUser`, {
                headers: {
                    Authorization: `Bearer ${state.token}`,
                }
            }
            );
            if (data.valid) setValid(true);
        } catch (error) {
            navigate("/login");
        }
    }

    state === null && setTimeout(() => {
        validateUser();
    }, 1000);
    return !valid ? (<AiOutlineSync spin className='d-flex justify-content-center display-1' />) : (<>{children}</>)
}

export default Validate;