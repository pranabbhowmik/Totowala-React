import Contact from "../models/contact.model.js";
import { sendContactmail } from "../utils/contactMail.js";

const createContact = async (req, res) => {
  try {
    const { fullname, email, phone, message } = req.body;
    if (!fullname || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (fullname.length < 4) {
      return res
        .status(400)
        .json({ message: "Fullname must be at least 4 characters long" });
    }
    if (phone.length < 10) {
      return res
        .status(400)
        .json({ message: "Phone number must be at least 10 characters long" });
    }
    const newContact = new Contact({
      fullname,
      email,
      phone,
      message,
    });
    await newContact.save();
    await sendContactmail(email, fullname);
    return res.status(201).json({ message: "Contact created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default createContact;
