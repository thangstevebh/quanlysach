import {
  loginService,
  registerServices,
} from "../../services/auth/auth.serives.js";

export const registerController = async (req, res) => {
  const {
    firstname,
    lastname,
    gender,
    email,
    phoneNumber,
    address,
    password,
    dob,
  } = req.body;

  const registerServiceResponse = await registerServices(
    {
      firstname,
      lastname,
      gender,
      email,
      phoneNumber,
      address,
      password,
      dob,
    },
    res,
  );

  return res.status(201).json(registerServiceResponse);
};

export const loginController = async (req, res) => {
  const { username, password } = req.body;

  const loginServiceResponse = await loginService({ username, password });

  return res.status(200).json(loginServiceResponse);
};
