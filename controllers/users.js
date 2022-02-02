const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const handleUserCreation = async (req, res) => {
  const results = await prisma.user.create({data: req.body});
  res.status(200).json({
    success: true,
    payload: results,
  });
};

const handleUserRetrievalAll = async (req, res) => {
  const results = await prisma.user.findMany();
  res.status(200).json({
    success: true,
    payload: results,
  });
};

const handleUserRetrievalOne = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const result = await prisma.user.findUnique({ where: { id }, rejectOnNotFound: true });
  res.status(200).json({
    success: true,
    payload: result,
  });
};

const handleUserUpdate = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const result = await prisma.user.update({
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

const handleUserDeletion = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  await prisma.user.delete({
      where: { id },
      rejectOnNotFound: true 
    });
    res.sendStatus(204);
};

module.exports = { handleUserCreation, handleUserRetrievalAll, handleUserRetrievalOne, handleUserUpdate, handleUserDeletion };
