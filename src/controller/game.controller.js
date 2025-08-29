import { prisma } from "../lib/prisma.js";

export const getAllGames = async (req, res)=> {
  const response = await prisma.game.findMany()
  console.log(response)
  res.json(response)
}

export const createSingleGame = async (req, res)=> {
  const {data} = req.body
  const response = await prisma.game.create({data})
  res.json(response)
}

export const deleteSingleGame = async (req, res)=> {
  const {id} = req.params
  const response = await prisma.game.delete({where : {id}})
  res.json(response)
}

export const updateGame = async (req, res)=> {
  const {id} = req.params
  const {data} = req.body
  const response = await prisma.game.update({where: {id}, data: data})
  res.json(response)
}

export const getGameById = async (req, res)=> {
  const {id} = req.params
  const response = await prisma.game.findUnique({where: {id}})
  res.json(response)
}

export const deleteGames = async (req, res)=> {
  const {id} = req.body
  const response = await prisma.game.deleteMany({where : { id: {in: id} }})
  res.json(response)
}