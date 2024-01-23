import UserModel from "../../models/user.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const registerServices = async (payload) => {
  const res = {
    statusCode: 201,
    message: "Create user successfully",
    data: {},
  };

  try {
    const {
      firstname,
      lastname,
      gender,
      email,
      address,
      phoneNumber,
      password,
      dob,
    } = payload;

    //email unique
    //check existed user
    const existedUser = await UserModel.findOne({
      email: email,
    });

    if (existedUser) {
      res.statusCode = 500;
      res.message = "User existed";
      return res;
    }

    //hash password
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);

    //tao requirement
    const createUserRequirements = {
      firstname,
      lastname,
      gender,
      email,
      address,
      phoneNumber,
      role: "CUSTOMER",
      dob,

      password: hashPassword,
      salt,
    };

    //create user
    const user = await UserModel.create(createUserRequirements);

    res.data = user;
  } catch (err) {
    console.log(err.message);
    res.statusCode = 500;
    res.message = "Register failed";
  }

  return res;
};

export const loginService = async ({ username, password }) => {
  const res = {
    statusCode: 201,
    message: "Create user successfully",
    data: {},
  };

  try {
    // check casi username ===  email type ? email = username : phoneNumber = email

    // tim user username: email, phoneNumber trong dob
    const userExisted = await UserModel.findOne({
      email: username,
    });

    // neu ton taji user lay truong password
    // compare password vs password db
    const result = await bcrypt.compare(password, userExisted.password);
    if (!result) {
      res.statusCode = 500;
      res.message = "Unauthenticated";
      return res;
    }

    const jwtPayload = {
      firstname: userExisted.firstname,
      lastname: userExisted.lastname,
      email: userExisted.email,
      phoneNumber: userExisted.phoneNumber,
      gender: userExisted.gender,
      address: userExisted.address || null,
      dob: userExisted.dob,
    };

    // return accessToken user jwt
    const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    res.data = { accessToken };
  } catch (err) {
    console.log(err.message);
    res.statusCode = 500;
    res.message = "Register failed";
  }

  return res;
};
