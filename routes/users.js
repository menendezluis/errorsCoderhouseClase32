import { Router } from "express";
import CustomError from "../services/errors/CustomError.js";
import EErrors from "../services/errors/enum.js";
import { generateUserErrorInfo } from "../services/errors/info.js";

const users = [];

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    payload: users,
  });
});

router.post("/", (req, res) => {
  const { first_name, last_name, email } = req.body;
  if (first_name == undefined || last_name == undefined || email == undefined) {
    console.log("i am here");
    CustomError.createError({
      name: "UserError",
      cause: generateUserErrorInfo({
        first_name,
        last_name,
        email,
      }),
      message: "Error trying to create a user",
      code: EErrors.INVALID_TYPES_ERROR,
    });
  }

  const user = {
    first_name,
    last_name,
    email,
  };
  if (users.length == 0) {
    user.id = 1;
  } else {
    user.id = users[users.length - 1].id + 1;
  }
  users.push("esteesuser", user);
  console.log(users);
  res.json({
    status: "success",
    payload: user,
  });
});

export default router;
