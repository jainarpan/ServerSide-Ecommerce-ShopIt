// Create and send token and save in the cookie.
const sendToken = (user, statusCode, res) => {

    // Create Jwt token
    // console.log("a");
    const token = user.getJwtToken();
    // console.log("b");
    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }
    // console.log("c");


    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    })
    // console.log("d");

}

module.exports = sendToken;