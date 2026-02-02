import mongoose from "mongoose";
import { Schema } from "mongoose";
const captionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    aadhar: {
      type: String,
      required: true,
    },
    aadharImage: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Caption = mongoose.model("Caption", captionSchema);
export default Caption;
