const User = require("../models/user.model");
const { generateUsername } = require("../utils/usernameGenerator");

exports.createUser = async (req, res) => {
    let user = await User.findOne({ uid: req.body.uid });
    if (user) {
        console.log(`User already exists : ${user.name}`)
        return res.status(200).send("User already exists !");
    }
    user = await User.create({
        uid: req.body.uid,
        email: req.body.email,
        name: req.body.displayName || req.body.name,
        username: req.body.username || generateUsername(req.body.displayName || req.body.name),
        image: req.body.photoURL || "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png",
        isNewUser: true,
        isVerifiedEmail: req.body.emailVerified || false
    });
    console.log(`New user created : ${user.name}`);
    return res.status(201).send("User created.");
}

exports.getUser = async (req, res) => {
    let user = await User.findOne({ uid: req.params.uid });
    if (user) {
        console.log(`User found : ${user.name}`)
        return res.status(200).send(user);
    }
    console.log(`User not found : ${req.params.uid}`)
    return res.status(404).send("User not found !")
}