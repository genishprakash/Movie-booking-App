const asyncHandler = require('express-async-handler');
const User = require('../model/userModel')

const loginController = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    // Check if both username and password are provided
    if (!username || !password) {
        res.status(400).json({ error: 'Please provide both username and password' });
        return;
    }

    try {
        // Find user by username
        const user = await User.findOne({ username, password });

        // Check if user exists
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        

        // Login successful
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error in login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = loginController;
