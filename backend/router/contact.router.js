import express from "express";
import createContact from "../controllers/contact.controller.js";
const contactrouter = express.Router();

contactrouter.post("/message", createContact);

export default contactrouter;
