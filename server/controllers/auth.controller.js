
const User = require("../models/user.model");
const { hashPassword, comparePassword } = require("../helpers/auth.helper");
const jwt = require('jsonwebtoken');
const { sendEmail } = require("../helpers/nodeMailer");

const userRegister = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name) return res.status(400).send("Name is required");
    if (!email) return res.status(400).send("Email is required");
    if (!password || password.length < 6) return res.status(400).send("Password is required and should be atleast 6 characters long");

    const exist = await User.findOne({ email });
    if (exist) return res.status(400).send("Email already exists!");

    const hashedPassword = hashPassword(password);

    const user = new User({ name, email, password: hashedPassword });

    try {
        await user.save();
        return res.json({
            ok: true,
        })
    } catch (error) {
        console.log(error);
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check if our db has user with that email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send("No user found");
        // check password
        const match = await comparePassword(password, user.password);
        if (!match) return res.status(400).send("Wrong password");
        // create signed token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        user.password = undefined;
        res.json({
            token,
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send('Error. Try agian.');
    }
}

module.exports={
    userRegister,
    userLogin
}