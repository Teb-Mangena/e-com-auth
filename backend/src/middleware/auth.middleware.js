import { requireAuth } from '@clerk/express';
import User from '../models/user.model.js';

export const ProtectRoute = [
  requireAuth(),
  async (req,res,next) => {
    try {
      // get the clerk id
      const clerkId = req.auth().userId;
      if(!clerkId) return res.status(400).json({message:"Unauthorized - invalid token"});

      // get user from db
      const user = await User.findOne({ clerkId });
      if(!user) return res.status(400).json({message:"Unauthorized - user does not exist"});

      // attact user to auth
      req.user = user;

      next();
    } catch (error) {
      console.log("Error in protectRote", error);
      res.status(500).json({ message: "Internal server error"})
    }
  }
]