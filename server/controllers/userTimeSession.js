const User = require("../models/user");


//controller for storing the userTime session
const storeUserTimeSession = async (req, res) => {
    const { userId, sessionStart } = req.body;


    const startDate = new Date(sessionStart);
    if (isNaN(startDate)) {
        return res.status(400).json({ ok: false, message: 'Invalid session start time' });
    }

    const startSeconds = startDate.getTime();
    const endSeconds = new Date().getTime()


    // StartTime, EndTime, totalSecond and LocalDate that to be stored in UserModel's userTimeSession
    const startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const endTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const totalTimeSeconds = Math.floor((endSeconds - startSeconds) /1000);
    const sessionDate = new Date().toLocaleDateString();

    

    try {
        // Create new user time session
        const userTimeSession = {
            startTime,
            endTime,
            totalSeconds: totalTimeSeconds,
            sessionDate: sessionDate
        }
    
        // finds the userId and Submit the TimeSession in the User model's timeSession
        const user = await User.findByIdAndUpdate(userId, {$push : { userTimeSession: userTimeSession}},{new: true})

        return res.json({ ok: true, message: 'Session stored successfully' });
    } catch (error) {
        console.error('Error saving user session:', error.message);
        return res.status(500).json({ ok: false, message: error.message });
    }
}


//function for getting the userTotal time in Seconds based on today date
const getTotalTime = async (req, res) => {
    const { userId } = req.body;

    const sessionDate = new Date().toLocaleDateString();

    try {
        const user = await User.findById(userId);
        
        // Make sure the user exists
        if (!user) {
            return res.status(404).json({ ok: false, message: 'User not found' });
        }

        // Filter sessions for today and sum the total seconds
        const totalTime = user.userTimeSession
            .filter(session => session.sessionDate.startsWith(sessionDate)) // filter the on today Date
            .reduce((accumulator, currentValue) => {
                return accumulator + currentValue.totalSeconds; // addition of total seconds
            }, 0);
        
        return res.json({ ok: true, data: totalTime });
    } catch (error) {
        console.error('Error retrieving total time:', error);
        return res.status(500).json({ ok: false, message: error.message });
    }
};



module.exports = {
    storeUserTimeSession,
    getTotalTime
}
