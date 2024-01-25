import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    firstname: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .nonempty({ message: "firstname must be not empty" }),
    lastname: z
      .string({
        required_error: "Full name is required",
      })
      .nonempty({ message: "lastname must be not empty" }),
    password: z
      .string({
        required_error: "Full name is required",
      })
      .max(8, {
        message: "max length 8",
      })
      .nonempty({ message: "password must be not empty" }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Not a valid email")
      .nonempty({ message: "email must be not empty" }),
    gender: z.enum(["MALE", "FEMALE", "OTHER"]),
    phoneNumber: z
      .string({
        required_error: "Full name is required",
      })
      .regex(/^\d+$/, { message: "phone number invalid" })
      .nonempty({ message: "phoneNUmber must be not empty" }),
    address: z
      .string({
        required_error: "Full name is required",
      })
      .optional(),
    dob: z.coerce.date(),
  }),
});
