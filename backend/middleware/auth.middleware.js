import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // Attach user to the request
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default auth;
