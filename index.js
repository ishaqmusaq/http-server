const express = require("express");
const handleAllRequests = (requestOpject, responseObjects) => {
    console.log("<h1>Hi, i just received a request</h1>");
    responseObjects.setHeader("content-type", "text/html")
    const url = requestOpject.url;
    
        responseObjects.write("<h1>this page is not found</h1>")
    
    responseObjects.end();
}

const handleHomeRequest = (req, res) => {
    res.send("<h3>Welcome to the home page</h3>")
}

const handleLoginRequest = (req, res) => {
    res.send("<h3>Welcome to the login page</h3>")
}

const handleSignupRequest = (req, res) => {
    res.send("<h3>Welcome to the signup page</h3>")
}

const handleProfileRequest = (req, res) => {
    res.send("<h3>Welcome to the profile page</h3>")
}

const handleLogoutRequest = (req, res) => {
    res.send("<h3>Welcome to the logout page</h3>")
}
const server = express();
server.use('/login',handleLoginRequest);
server.use('/signup',handleSignupRequest);
server.use('/profile',handleProfileRequest);
server.use('/logout',handleLogoutRequest);
server.use('/',handleHomeRequest);
server.use(handleAllRequests);

server.listen(3000, "127.0.0.1", () => console.log("server is ready to accept your request"))

