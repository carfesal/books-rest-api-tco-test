import { User } from '../models/user.js';

export const registerUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json({
            data: user
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