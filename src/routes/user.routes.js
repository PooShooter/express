import express from "express";
import { createSingleUser, deleteSingleUser, getAllUsers, getUserById, getUserByName, updateUser } from "../controller/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers)

router.get("/:id", getUserById)

router.get("/name/:name", getUserByName)

router.post("/", createSingleUser)

router.delete("/:id", deleteSingleUser)

router.put("/:id", updateUser)

export default router;
