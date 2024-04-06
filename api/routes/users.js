import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import {verifyAdmin, verifyToken,verifyUser} from "../utils/verifyToken.js"
const router = express.Router();

//update
router.put("/:id",verifyUser,updateUser);

//delete
// router.delete("/:id",verifyUser,deleteUser);
router.delete("/:id",deleteUser);
//get
router.get("/:id",verifyUser,getUser);

//get all
router.get("/",getUsers);

export default router