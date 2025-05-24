import mongoose from "mongoose";
import { Schema } from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      minlength: [4, "Fullname must be at least 4 characters long"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: [4, "Email must be at least 4 characters long"],
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
