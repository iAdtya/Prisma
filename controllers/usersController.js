//todo bring in prisma and cookie
import prisma from "../prisma/index.js";
import { cookieToken } from "../utils/cokkieToken.js";

//todo create a user

export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("Please provide all fields");
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    cookieToken(user, res, next);
  } catch (error) {
    throw new Error(error);
  }
};
