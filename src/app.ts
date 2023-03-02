import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";
import categoryRoutes from "./routers/categories.routes";


const app: Application = express();
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);

app.use(handleErrors);

export default app;