const User = require("../models/user.model");

exports.generateUsername = async (name = "") => {
    let username = "", usernames = [], userExists, i = 1, checkname;
    checkname = name.replace(" ", "_");
    usernames.push(name.replace(" ", "_"));
    usernames.push(name.trim());
    name.split(" ").forEach((word) => {
        if (word.length >= 3) usernames.push(word);
    });
    usernames.forEach( async(item) => {
        userExists = await User.findOne({username: item});
        if (!userExists) {
            username = item;
            break;
        }
    });
    while (username === "") {
        userExists = await User.findOne({username: checkname + i});
        if (!userExists) username = checkname + i;
        i++;
    }
    console.log(`Username algorithm : ${username}`);
    return username;
}
