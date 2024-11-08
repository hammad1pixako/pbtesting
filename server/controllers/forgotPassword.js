const { sendEmail } = require("../helpers/mailer");
const User = require("../models/user");

const forgotPasswordSendMail = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.json({
                ok: false,
                message: "No User Found"
            })
        }

        console.log("userfound in forgotPasswordSendMail")


        

        return res.json({
            ok: true,
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send('Error. Try agian.');
    }
}

module.exports = {
    forgotPasswordSendMail
}