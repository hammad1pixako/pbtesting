import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../context';

export default function Timer() {

    const {
        state,
        isToggled,
        setIsToggled
    } = useContext(UserContext);

    const [time, setTime] = useState(0); // Total time in seconds
    const [totalTime, setTotalTime] = useState(localStorage.getItem("totaltime"));
    const [transition, setTransition] = useState("");


    // handles the toggle button for submitting the time session
    const handleToggle = async () => {
        const sessionStart = localStorage.getItem('timerStart');

        if (isToggled) {
            // Toggling off
            if (sessionStart) {
                await SubmitSession(setIsToggled);
                toast.success("Session Submitted Successfully");
                fetchTotalTime();
            } else {
                toast.error("Session is Not Submitted");
            }
        } else {
            // Toggling on
            const startTime = new Date();
            localStorage.setItem('timerStart', startTime);
            localStorage.setItem('userId', state.user._id);
            localStorage.setItem('isToggled', true);

            // Update toggle state
            setIsToggled(prev => !prev);
        }
    };



    //Total time session. stores totaltime on every render
    useEffect(() => {
        fetchTotalTime();
    }, [state && state.user && state.user._id]);

    //function that fetch the total time in seconds
    const fetchTotalTime = async () => {
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}/getTotalTime`,
                {
                    userId: state.user._id
                }
            );
            setTotalTime(data.data);         // It Stores the Total time in the form of Seconds
            localStorage.setItem("totalTime", data.data);       //Store the total time in local Storage
        } catch (error) {
            console.log(error.message);
            const storedTime = localStorage.getItem("totalTime") || '';
            setTotalTime(storedTime); // Set localStorage value on error
        }
    };


    //renders the hours, minutes, soconds on every second for user
    useEffect(() => {
        // Check for existing timer start time in localStorage
        const storedStartTime = localStorage.getItem('timerStart');
        if (storedStartTime) {
            const startTime = new Date(storedStartTime);
            const now = new Date();
            const elapsedSeconds = Math.floor((now - startTime) / 1000);
            setTime(elapsedSeconds);
            setIsToggled(true); // Set the toggle state to true if there's an existing timer
        }

        let timer = null;

        if (isToggled) {
            timer = setInterval(() => {
                setTransition("translate-y-0")
                setTime(prevTime => prevTime + 1);
                setTransition("translate-y-4")
            }, 1000);
        }

        return () => clearInterval(timer); // Cleanup interval on unmount
    }, [isToggled]);




    //useEffect that calls the sessionSubmitfunction on visibility change but need to improve
    // useEffect(() => {
    //     const handleVisibilityChange = async () => {
    //         if (document.visibilityState === 'hidden') {
    //             await SubmitSession(setIsToggled); // Call SubmitSession when tab is no longer visible
    //         }
    //     };

    //     // Attach the visibilitychange event listener
    //     document.addEventListener('visibilitychange', handleVisibilityChange);

    //     // Cleanup the event listener on component unmount
    //     return () => {
    //         document.removeEventListener('visibilitychange', handleVisibilityChange);
    //     };
    // }, [setIsToggled]); // Ensure the effect is tied to session cleanup









    // Total Time hours, minutes and seconds
    const totalHours = Math.floor(totalTime / 3600); // Get the Hours
    const totalMinutes = Math.floor((totalTime % 3600) / 60); // Get the Minutes
    const totalSeconds = totalTime % 60;



    // current Time hours, minutes and seconds
    const hours = Math.floor(time / 3600); // Get the Hours
    const minutes = Math.floor((time % 3600) / 60); // Get the Minutes
    const seconds = time % 60;

    return (
        <div>
            <div className='pt-7 box-border inline-flex items-center mb-5 cursor-pointer'>


                {/* Toggle Button for Timer */}
                <div className='w-32 mt-4 flex  flex-col'>
                    <div className=' ml-7 mb-4'>
                        <div className="container ">
                            <div className="flex items-center">
                                <input onClick={handleToggle} type="checkbox" id="isActive" checked={isToggled} className="hidden" />
                                <label htmlFor="isActive" id="slider" className="relative mr-4 w-8 h-4 rounded-full bg-red-600 cursor-pointer"></label>
                            </div>
                        </div>
                    </div>
                    <span className={` text-lg font-bold text-left ${isToggled ? "text-red-500" : "text-green-500"} dark:text-gray-300`}>
                        {isToggled ? "Stop Timer" : "Start Timer"}
                    </span>
                </div>


                {/* Current Time Session */}
                <div className='w-32 text-left flex flex-col ml-4'>
                    <div className=" flex mb-2  w-full">
                        <div className="w-6 h-6">
                            <p className="text-[0.7rem] font-Cormorant font-normal text-gray-900  text-center w-full">hr</p>
                            <div className={`${isToggled ? "bg-green-500" : "bg-red-500"}  rounded-lg text-white text-center overflow-hidden`}>{isToggled ? String(hours).padStart(2, '0') : "00"}</div>
                        </div>
                        <h3 className={`font-manrope font-semibold mt-4 ${isToggled ? "text-green-500" : "text-red-500"}`}>:</h3>
                        <div class="w-6 h-6">
                            <p className="text-[0.7rem] font-Cormorant font-normal text-gray-900  text-center w-full">min</p>
                            <div className={`${isToggled ? "bg-green-500" : "bg-red-500"}  rounded-lg text-white text-center overflow-hidden`}>{isToggled ? String(minutes).padStart(2, '0') : "00"}</div>
                        </div>
                        <h3 className={`font-manrope font-semibold mt-4 ${isToggled ? "text-green-500" : "text-red-500"}`}>:</h3>
                        <div className={`w-6 h-6 `}>
                            <p className="text-[0.7rem] font-Cormorant font-normal text-gray-900  text-center w-full">sec</p>
                            <div className={`${isToggled ? "bg-green-500" : "bg-red-500"}  rounded-lg text-white text-center overflow-hidden`}>{isToggled ? String(seconds).padStart(2, '0') : "00"}</div>
                        </div>
                    </div>
                    <span className=" text-lg font-bold text-[#054080]  dark:text-gray-300">Current Time</span>
                </div>

                {/* Total Time Session */}
                <div className='w-32 text-left flex flex-col ml-4'>
                    <div className=" flex mb-2  w-full">
                        <div className="w-6 h-6">
                            <p className="text-[0.7rem] font-Cormorant font-normal text-gray-900  text-center w-full">hr</p>
                            <div className=" bg-[#054080]  rounded-lg text-white text-center overflow-hidden">{String(totalHours).padStart(2, '0')}</div>
                        </div>
                        <h3 class="font-manrope font-semibold mt-4 text-gray-900">:</h3>
                        <div class="w-6 h-6">
                            <p className="text-[0.7rem] font-Cormorant font-normal text-gray-900  text-center w-full">min</p>
                            <div className=" bg-[#054080] rounded-lg text-white text-center overflow-hidden">{String(totalMinutes).padStart(2, '0')}</div>
                        </div>
                        <h3 className="font-manrope font-semibold mt-4 text-gray-900">:</h3>
                        <div className={`w-6 h-6 `}>
                            <p className="text-[0.7rem] font-Cormorant font-normal text-gray-900  text-center w-full">sec</p>
                            <div className={`bg-[#054080] rounded-lg text-white text-center overflow-hidden  `}>{String(totalSeconds).padStart(2, '0')}</div>
                        </div>
                    </div>
                    <span className=" text-lg font-bold text-[#054080]  dark:text-gray-300">Total Session</span>
                </div>


            </div>
        </div>

    );
}




//function that Submit the the Time Session into db
export async function SubmitSession(setIsToggled) {

    const sessionStart = localStorage.getItem("timerStart")
    const userId = localStorage.getItem("userId")
    try {
        if (sessionStart === null || sessionStart === undefined) {
            return
        }
        await axios.post(
            `${process.env.REACT_APP_API_URL}/submitSession`,
            {
                userId,
                sessionStart
            }
        );

        // Update toggle state
        await setIsToggled(prev => !prev);
        await localStorage.removeItem('timerStart');
        await localStorage.removeItem('userId');
        await localStorage.removeItem('isToggled');
        await localStorage.removeItem('totalTime');
        console.log("i am at the end")

    } catch (error) {
        toast.error(error.message);
    }
};