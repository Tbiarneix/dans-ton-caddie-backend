const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const handleListCreation = async (req, res) => {
  const results = await prisma.list.create({data: req.body});
  res.status(200).json({
    success: true,
    payload: results,
  });
};

const handleListRetrievalOneByUserId = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const result = await prisma.list.findMany({ where: { user_id: userId }, include: {ingredient: true}, rejectOnNotFound: true });
  res.status(200).json({
    success: true,
    payload: result,
  });
};

const handleListDeletion = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const ingredientId = parseInt(req.params.ingredientid, 10);

  await prisma.list.deleteMany({
      where: { user_id: userId, ingredient_id: ingredientId},
      rejectOnNotFound: true 
    });
    res.sendStatus(204);
};

module.exports = { handleListCreation, handleListRetrievalOneByUserId, handleListDeletion };
