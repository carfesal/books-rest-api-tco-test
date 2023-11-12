import { User } from '../models/user.js';

export const registerUser = async (req, res) => {
    try {
        const user = await User.create(req.body).then(user => {
            res.json({
                data: user
            });
        }).catch(error => {
            return res.status(400).json({
                message: "There was an error while creating the user: " + error.message
            });
        });
        
    } catch (error) {
        console.log(error);
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json({
            data: users
        });
    } catch (error) {
        console.log(error);
    }
}