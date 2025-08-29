import { prisma } from "../lib/prisma.js";


export const getAllProducts = async (req, res) => {
  const product = await prisma.products.findMany();
  res.json({
    length: product.length,
    data: product,
    msg: "success create data",
    code: 200,
  });
};

export const createSingleProduct = async (req, res) => {
  const { name, brand, chipset, vram, price, stock, image } = req.body;
  try {
    const product = await prisma.products.create({
      data: { name, brand, chipset, vram, price, stock, image },
    });
    res.json({ data: product, msg: "success create product", code: 200 });
  } catch (error) {
    res.json({ error: error.message, msg: "error create product", code: 400 });
  }
};

export const deleteSingleProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const product = await prisma.products.delete({ where: { id: id } });
    res.json({ data: product, msg: "success delete data", code: 200 });
  } catch (error) {
    res.json({ error, msg: "error delete product", code: 400 });
  }
};

export const updateProduct = async (req, res) => {
  const { name, brand, chipset, vram, price, stock, image } = req.body;
  const { id } = req.params;
  try {
    const product = await prisma.products.update({
      where: { id },
      data: { name, brand, chipset, vram, price, stock, image },
    });
    res.json({ data: product, msg: "success create data", code: 200 });
  } catch (error) {
    res.json({ error, msg: "error create product", code: 400 });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params
  const product = await prisma.products.findUnique({where: { id }});
  res.json({
    length: product.length,
    data: product,
    msg: "success create data",
    code: 200,
  });
};