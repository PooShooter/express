import { prisma } from "../lib/prisma.js";

export const getAllUsers = async ( req, res ) => {
  const user = await prisma.user.findMany();

  res.json({
    code: 200,
    msg: "success get data",
    data: user,
    length: user.length,
  });
}

export const getUserById = async ( req, res ) => {
  const { id } = req.params
  const user = await prisma.user.findUnique({ where: { id }})

  res.json({
    code: 200,
    msg: "success get data",
    data: user
  })
}

export const getUserByName = async ( req, res ) => {
  const { name } = req.params
  const user = await prisma.user.findMany({ where: { name: {contains: name} }})

  res.json({
    code: 200,
    msg: "success get data",
    data: user
  })
}

export const createSingleUser = async ( req, res ) => {
  const { name, email, password } = req.body;
  const user = await prisma.user.create({ data: { name, email, password } });

  res.json({ code: 200, msg: "success post data", data: user });
}

export const deleteSingleUser = async ( req, res ) => {
  const { id } = req.params;
  const user = await prisma.user.delete({ where: { id } });

  res.json({ code: 200, msg: "data deleted successfully", data: user });
}

export const updateUser = async ( req, res ) => {
    const { id } = req.params;
  const { name, email, password } = req.body;
  const user = await prisma.user.update({
    where: { id },
    data: { name, email, password },
  });

  res.json({code: 200, msg: "data updated successfully", data: user})
}