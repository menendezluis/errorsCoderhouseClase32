import express from "express";
import userRouter from "./routes/users.js";
import errorHandler from "./middleware/errors/index.js";

const app = express();
const server = app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
app.use(express.json());
app.use("/users", userRouter);
app.use(errorHandler);
