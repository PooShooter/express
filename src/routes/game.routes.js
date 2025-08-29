import express from "express"
import { createSingleGame, deleteGames, deleteSingleGame, getAllGames, getGameById, updateGame } from "../controller/game.controller.js"

const router = express.Router()

router.get("/", getAllGames)
router.post("/", createSingleGame)
router.delete("/:id", deleteSingleGame)
router.put("/:id", updateGame)
router.get("/:id", getGameById)
router.delete("/", deleteGames)

export default router