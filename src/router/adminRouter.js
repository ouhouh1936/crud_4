import express from "express";
import {
  authorViewController,
  authorDetailController,
  authorCreateController,
  bookViewController,
  bookDetailController,
  bookCreateController,
  postAuthotCreateController,
} from "../controller/adminController";

const adminRouter = express.Router();

//author
adminRouter.get("/authorManagement", authorViewController);
adminRouter.get("/authorManagement:id", authorDetailController);
adminRouter.get("/authorManagement/create", authorCreateController);

adminRouter.post("/postCreateAuthor", postAuthotCreateController);
//book
adminRouter.get("/bookManagement", bookViewController);
adminRouter.get("/bookManagement:id", bookDetailController);
adminRouter.get("/bookManagement/create", bookCreateController);

export default adminRouter;
