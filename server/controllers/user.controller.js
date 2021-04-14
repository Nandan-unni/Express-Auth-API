const User = require("../models/user.model");

exports.createUser = async (req, res) => {
    let user = await User.findOne({uid: req.params.uid});
    if (user)
        return res.status(200).send("User already exists !");
    user = await User.create({
        uid: req.body.uid,
        email: req.body.email,
        name: req.body.displayName || req.body.name,
        image: req.body.photoURL || "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png",
        isNewUser: true,
        isVerifiedEmail: req.body.emailVerified || false
    });
    console.log(user);
    return res.status(201).send("User created.");
}