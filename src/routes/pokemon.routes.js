import express from "express"
import { createManyPokemons, createSinglePokemon, deleteAllPokemons, deletePokemons, deleteSinglePokemon, getAllPokemons, getPokemonById, getPokemonByName, updatePokemons, updateSinglePokemon } from "../controller/pokemon.controller.js"

const router = express.Router()

router.get("/", getAllPokemons)
router.get("/:id", getPokemonById)
router.get("/name/:name", getPokemonByName)
router.post("/", createSinglePokemon)
router.post("/many", createManyPokemons)
router.delete("/:id", deleteSinglePokemon)
router.delete("/", deletePokemons)
router.delete("/all", deleteAllPokemons)
router.put("/:id", updateSinglePokemon)
router.put("/", updatePokemons)

export default router