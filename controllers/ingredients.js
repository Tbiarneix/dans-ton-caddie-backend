const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const handleIngredientCreation = async (req, res) => {
  const results = await prisma.ingredient.create({data: req.body});
  res.status(200).json({
    success: true,
    payload: results,
  });
};

const handleIngredientRetrievalAll = async (req, res) => {
  const results = await prisma.ingredient.findMany();
  res.status(200).json({
    success: true,
    payload: results,
  });
};

const handleIngredientRetrievalOne = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const result = await prisma.ingredient.findUnique({ where: { id }, rejectOnNotFound: true });
  res.status(200).json({
    success: true,
    payload: result,
  });
};

const handleIngredientUpdate = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const result = await prisma.ingredient.update({
    where: { id },
    rejectOnNotFound: true,
    data: {
      ...req.body,
    },
  });
  res.status(200).json({
    success: true,
    payload: result,
  });
};

const handleIngredientDeletion = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  await prisma.ingredient.delete({
      where: { id },
      rejectOnNotFound: true 
    });
    res.sendStatus(204);
};

module.exports = { handleIngredientCreation, handleIngredientRetrievalAll, handleIngredientRetrievalOne, handleIngredientUpdate, handleIngredientDeletion };
