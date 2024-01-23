import mongoose from "mongoose";

const USER_MODEL = "users";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      maxlength: 32,
      minlength: 1,
      required: true,
    },
    lastname: {
      type: String,
      maxlength: 32,
      minlength: 1,
      required: true,
    },
    fullname: {
      type: String,
      required: false,
      default: null,
    },
    email: {
      type: String,
      maxlength: 64,
      minlength: 1,
      required: true,
    },
    phoneNumber: {
      type: String,
      maxlength: 64,
      minlength: 1,
      required: true,
    },
    address: {
      type: String,
      minlength: 1,
      required: true,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE"],
      required: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "CUSTOMER"],
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { timestamps: true, collection: USER_MODEL },
);

export default mongoose.model(USER_MODEL, userSchema);
