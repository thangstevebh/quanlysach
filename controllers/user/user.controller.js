import {
  createUser,
  getUserByIdSevice,
} from "../../services/user/user.services.js";

export const getUserController = (req, res) => {
  return res.status(200).json({ user: "John Doe" });
};

export const createUserController = async (req, res) => {
  const { firstName, lastName, password, email, gender } = await req.body;

  const userServiceResponse = await createUser({
    firstName,
    lastName,
    password,
    email,
    gender,
  });
  console.log(userServiceResponse);
  return res.status(201).json(userServiceResponse);
};

export const getUserByIdController = async (req, res) => {
  const { id } = req.params;

  const getUserByIdResponse = await getUserByIdSevice({ userId: id });

  return res.status(200).json(getUserByIdResponse);
};

export async function getProfileController(req, res) {
  console.log(req?.user);
  console.log(123);
}
