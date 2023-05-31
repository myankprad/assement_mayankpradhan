import asyncHandler from "../services/asyncHandler.js";
import User from "../models/user.model.js";
import JWT from "jsonwebtoken";
import config from "../config/index.config.js";

import customError from "../helpers/customError.js";

export const isLoggedIn = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.cookies.token ||
    (req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer"))
  ) {
    token = req.cookies.token || req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    throw new customError("Not authorized", 401);
  }

  try {
    const decodedJwtToken = JWT.verify(token, config.JWT_SECRET);

    req.user = await User.findById(decodedJwtToken._id, "name email role");

    next();
  } catch (error) {
    throw new customError("Not authorized", 401);
  }
});
