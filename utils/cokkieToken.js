import { getJwtToken } from "../helpers/getJwtToken.js";

export const cookieToken = (user, res, next) => {
  const token = getJwtToken(user.id);
  const opt = {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  user.password = undefined;

  res.status(200).cookie("token", token, opt).json({
    success: true,
    token,
    user
  });
};
