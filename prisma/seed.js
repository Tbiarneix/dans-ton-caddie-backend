const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: "Thomas",
      password: "P@ssw0rd",
      role: "user",
    },
  });
  await prisma.ingredient.create({
    data: {
      name: "Tomates",
      type: "Fruits et légumes",
      unit: "Kilogramme",
    },
  });
  await prisma.ingredient.create({
    data: {
      name: "Bananes",
      type: "Fruits et légumes",
      unit: "Kilogramme",
    },
  });
  await prisma.ingredient.create({
    data: {
      name: "Yaourts",
      type: "Produits laitiers",
      unit: "Kilogramme",
    },
  });
  await prisma.ingredient.create({
    data: {
      name: "Céréales",
      type: "Epicerie sucrée",
      unit: "Paquet",
    },
  });
  await prisma.ingredient.create({
    data: {
      name: "Steack hachés",
      type: "Viandes et Poissons",
      unit: "Nombre",
    },
  });
  await prisma.ingredient.create({
    data: {
      name: "Poissons panés",
      type: "Viandes et Poissons",
      unit: "Paquet",
    },
  });
  await prisma.ingredient.create({
    data: {
      name: "Glaces",
      type: "Surgelés",
      unit: "Paquets",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
