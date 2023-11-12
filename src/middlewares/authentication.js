import { User } from "../models/user.js";


export const checkAuth = async (req, res, next) => {
    const auth = req.headers.authorization;

    if (!auth) {
      res.status(401);
      res.send('Not authenticated');
      return;
    }

    const user = await User.findOne({where: {email: auth}});

    if (user) {
      next();
    } else {
      res.status(401);
      res.send('User does not exist.');
    }
}