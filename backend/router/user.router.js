import express from "express";
import {
  login,
  register,
  logout,
  deleteUser,
} from "../controllers/user.controllers.js";
import auth from "../middleware/auth.middleware.js";
const authrouter = express.Router();

authrouter.post("/register", register);
authrouter.post("/login", login);
authrouter.post("/logout", logout);
authrouter.delete("/delete", auth, deleteUser);

export default authrouter;
