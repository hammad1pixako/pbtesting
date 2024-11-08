import { useState, createContext, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {


    //User Related State
    const [state, setState] = useState({
        user: {},
        token: "",
    })


    //Timer Related States
    const [isToggled, setIsToggled] = useState(JSON.parse(localStorage.getItem("isToggled")) || false);

    useEffect(() => {
        setState(JSON.parse(window.localStorage.getItem("auth")))
    }, []);
    return (
        <UserContext.Provider value={{
            state,
            setState,
            isToggled,
            setIsToggled
        }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };