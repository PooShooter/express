import { prisma } from "../lib/prisma.js";

export const getAllPokemons = async (req, res)=> {
  const response = await prisma.pokemon.findMany({orderBy: {name: "asc"}})
  res.json(response)
}

export const getPokemonById = async (req, res)=> {
  const {id} = req.params
  const response = await prisma.pokemon.findUnique({where: {id}})
  res.json(response)
}

export const getPokemonByName = async (req, res)=> {
  const { name } = req.params
  const response = await prisma.pokemon.findMany({ where: { name: {contains: name, mode: "insensitive"} }})
  res.json(response)
}

export const createSinglePokemon = async (req, res)=> {
  const {data} = req.body
  const response = await prisma.pokemon.create({data})
  res.json(response)
}

export const createManyPokemons = async (req, res)=> {
  const {data} = req.body
  const response = await prisma.pokemon.createMany({data})
  res.json(response)
}

export const deleteSinglePokemon = async (req, res)=> {
  const {id} = req.params
  const response = await prisma.pokemon.delete({where: {id}})
  res.json(response)
}

export const deletePokemons = async (req, res)=> {
  const {id} = req.body
  const response = await prisma.pokemon.deleteMany({where : { id: {in: id} }})
  res.json(response)
}

export const deleteAllPokemons = async (req, res)=> {
  const response = await prisma.pokemon.deleteMany({})
  res.json(response)
}

export const updateSinglePokemon = async (req, res)=> {
  const {id} = req.params
  const {data} = req.body
  const response = await prisma.pokemon.update({where: {id}, data: data})
  res.json(response)
}

export const updatePokemons = async (req, res)=> {
  const {id} = req.params
  const {data} = req.body
  const response = await prisma.pokemon.updateMany({where: {id : {in: id}}, data: data})
  res.json(response)
}
